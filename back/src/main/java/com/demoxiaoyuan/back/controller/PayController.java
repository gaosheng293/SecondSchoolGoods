package com.demoxiaoyuan.back.controller;

import com.demoxiaoyuan.back.entity.UserEntity;
import com.demoxiaoyuan.back.repository.UserRepository;
import com.demoxiaoyuan.back.util.HttpClientUtil;
import com.demoxiaoyuan.back.util.JwtUtil;
import com.wechat.pay.contrib.apache.httpclient.WechatPayHttpClientBuilder;
import com.wechat.pay.contrib.apache.httpclient.auth.PrivateKeySigner;
import com.wechat.pay.contrib.apache.httpclient.auth.WechatPay2Credentials;
import com.wechat.pay.contrib.apache.httpclient.auth.WechatPay2Validator;
import com.wechat.pay.contrib.apache.httpclient.cert.CertificatesManager;
import com.wechat.pay.contrib.apache.httpclient.util.PemUtil;
import org.apache.http.impl.client.CloseableHttpClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.security.PrivateKey;
import java.util.*;

@RestController
@RequestMapping("/api/pay")
public class PayController {

    @Value("${wechat.pay.mch-id}")
    private String mchId;

    @Value("${wechat.pay.mch-serial-no}")
    private String mchSerialNo;

    @Value("${wechat.pay.api-v3-key}")
    private String apiV3Key;

    @Value("${wechat.pay.private-key-path}")
    private String privateKeyPath;

    @Value("${wechat.pay.appid}")
    private String appid;

    private final UserRepository userRepository;
    private final CloseableHttpClient httpClient;

    public PayController(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.httpClient = null; // 先设为 null

        // 临时跳过初始化，等你拿到证书再打开下面代码
    }

//    public PayController(UserRepository userRepository) throws Exception {
//        this.userRepository = userRepository;
//
//        // 加载私钥
//        PrivateKey privateKey = PemUtil.loadPrivateKey(new FileInputStream(privateKeyPath));
//
//        // 获取证书管理器实例
//        CertificatesManager certificatesManager = CertificatesManager.getInstance();
//        certificatesManager.putMerchant(mchId, new WechatPay2Credentials(mchId,
//                new PrivateKeySigner(mchSerialNo, privateKey)), apiV3Key.getBytes("utf-8"));
//
//        // 创建验证器
//        WechatPay2Validator validator = new WechatPay2Validator(certificatesManager.getVerifier(mchId));
//
//        // 创建 HttpClient
//        this.httpClient = WechatPayHttpClientBuilder.create()
//                .withMerchant(mchId, mchSerialNo, privateKey)
//                .withValidator(validator)
//                .build();
//    }


    @PostMapping("/create")
    public ResponseEntity<Map<String, Object>> create(
            @RequestBody Map<String, Object> req,
            @RequestHeader("Authorization") String auth) {
        try {
            if (httpClient == null) {
                return ResponseEntity.status(503).body(null);
            }
            Long userId = JwtUtil.getUserId(auth.substring(7));
            UserEntity user = userRepository.findById(userId).orElse(null);
            if (user == null || user.getOpenid() == null) {
                return ResponseEntity.status(401).body(null);
            }

            String openid = user.getOpenid();
            String outTradeNo = "ORDER_" + System.currentTimeMillis();
            Integer amount = (Integer) req.get("amount"); // 单位：分

            // 构造请求参数（Java 8 写法）
            Map<String, Object> body = new HashMap<>();
            body.put("appid", appid);
            body.put("mchid", mchId);
            body.put("description", req.get("description"));
            body.put("out_trade_no", outTradeNo);
            body.put("notify_url", "https://你的域名/api/pay/notify");

            Map<String, Object> amountMap = new HashMap<>();
            amountMap.put("total", amount);
            body.put("amount", amountMap);

            Map<String, Object> payerMap = new HashMap<>();
            payerMap.put("openid", openid);
            body.put("payer", payerMap);

            // 发送请求
            String result = HttpClientUtil.postJson("https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi", body);

            // 解析返回结果（使用 fastjson）
            Map<String, Object> resMap = com.alibaba.fastjson.JSON.parseObject(result, Map.class);
            String prepayId = (String) resMap.get("prepay_id");

            // 生成前端支付参数
            Map<String, String> payParams = generatePaySign(prepayId);

            Map<String, Object> response = new HashMap<>();
            response.put("payment", payParams);
            response.put("outTradeNo", outTradeNo);
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(null);
        }
    }

    // 生成支付签名（兼容 Java 8）
    private Map<String, String> generatePaySign(String prepayId) throws Exception {
        long timestamp = System.currentTimeMillis() / 1000;
        String nonceStr = generateNonceStr();
        String packageStr = "prepay_id=" + prepayId;

        String message = appid + "\n" + timestamp + "\n" + nonceStr + "\n" + packageStr + "\n";

        PrivateKey privateKey = PemUtil.loadPrivateKey(new FileInputStream(privateKeyPath));
        java.security.Signature signature = java.security.Signature.getInstance("SHA256withRSA");
        signature.initSign(privateKey);
        signature.update(message.getBytes("utf-8"));
        String paySign = Base64.getEncoder().encodeToString(signature.sign());

        Map<String, String> map = new HashMap<>();
        map.put("appId", appid);
        map.put("timeStamp", String.valueOf(timestamp));
        map.put("nonceStr", nonceStr);
        map.put("package", packageStr);
        map.put("signType", "RSA");
        map.put("paySign", paySign);
        return map;
    }

    // 生成32位随机字符串
    private String generateNonceStr() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        Random random = new Random();
        StringBuilder sb = new StringBuilder(32);
        for (int i = 0; i < 32; i++) {
            sb.append(chars.charAt(random.nextInt(chars.length())));
        }
        return sb.toString();
    }
}
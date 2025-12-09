package com.demoxiaoyuan.back.controller;

import com.alibaba.fastjson.JSON;
import com.demoxiaoyuan.back.entity.GoodsEntity;

import java.util.HashMap;
import java.util.Map;                                 // 解决 Map.of
import com.demoxiaoyuan.back.model.PublishGoodsRequest;
import com.demoxiaoyuan.back.model.SearchRequest;
import com.demoxiaoyuan.back.repository.GoodsRepository;
import com.demoxiaoyuan.back.repository.LikesRepository;
import com.demoxiaoyuan.back.service.GoodsService;
import com.demoxiaoyuan.back.service.LikesService;
import com.demoxiaoyuan.back.util.JwtUtil;
import com.demoxiaoyuan.back.util.LikeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/api/goods")
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private LikeUtil likeUtil;

    @Autowired
    private LikesService likesService;
    @Autowired
    private GoodsRepository goodsRepository;


    // 首页推荐（GET /api/goods/recommend?universityId=1&page=1&size=10）
    @GetMapping("/recommend")
    public ResponseEntity<List<GoodsEntity>> getRecommendations(
            @RequestParam String universityId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestHeader(value = "Authorization", required = false) String auth) {
        // 解析用户ID
        Long userId = null;
        if (auth != null && auth.startsWith("Bearer ")) {
            String token = auth.substring(7);
            userId = JwtUtil.getUserId(token);
        }

        // 获取带点赞状态的推荐列表
        List<GoodsEntity> list = goodsService.getRecommendationsWithLike(universityId, page, size, userId);

        return ResponseEntity.ok(list);
    }

    // 分类商品（GET /api/goods/category?categoryId=1&universityId=1&page=1&size=20）
    @GetMapping("/category")
    public ResponseEntity<?> getByCategory(
            @RequestParam Integer categoryId,
            @RequestParam String universityId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int size) {

        Pageable pageable = PageRequest.of(page - 1, size);
        List<GoodsEntity> list = goodsService.getByCategory(categoryId, universityId, pageable);

        return ResponseEntity.ok(list);
    }

    // 商品详情（GET /api/goods/detail/{id}）
    // GoodsController.java
    @GetMapping("/detail/{id}")
    public ResponseEntity<?> getDetail(@PathVariable Long id,
                                       @RequestHeader("Authorization") String auth) {
        // 解析用户ID
        Long userId = null;
        if (auth != null && auth.startsWith("Bearer ")) {
            String token = auth.substring(7);
            userId = JwtUtil.getUserId(token);
        }

        GoodsEntity goods = goodsService.getDetailWithLike(id, userId);
        if (goods == null) {
            return ResponseEntity.status(404).body("商品不存在或已下架");
        }

        // 确保likeCount不为null
        goods.setLikeCount(goods.getLikeCount() != null ? goods.getLikeCount() : 0);

        return ResponseEntity.ok(goods);
    }

    @PostMapping("/publish")
    public ResponseEntity<?> publish(
            @RequestHeader("Authorization") String auth,
            @RequestBody PublishGoodsRequest req) {

        String token = auth.substring(7);
        Long userId = JwtUtil.getUserId(token);
        String universityId = JwtUtil.getUniversityId(token); // 你之前有这个方法

        if (userId == null || universityId == null) {
            return ResponseEntity.status(401).body("登录失效");
        }

        // 简单校验
        if (req.getTitle() == null || req.getTitle().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("标题不能为空");
        }
        if (req.getImages() == null || req.getImages().isEmpty()) {
            return ResponseEntity.badRequest().body("至少上传一张图片");
        }

        GoodsEntity goods = new GoodsEntity();
        goods.setUserId(userId);
        goods.setUniversityId(universityId);
        goods.setTitle(req.getTitle().trim());
        goods.setPrice(req.getPrice());
        goods.setOriginalPrice(req.getOriginalPrice());
        goods.setCategoryId(req.getCategoryId());
        goods.setImages(JSON.toJSONString(req.getImages())); // List → JSON 字符串
        goods.setCover(req.getImages().get(0));
        goods.setDescription(req.getDescription());
        goods.setWechat(req.getWechat());
        goods.setPhone(req.getPhone());
        goods.setQq(req.getQq());
        goods.setStatus(1);

        goodsRepository.save(goods);

        Map<String, Object> resp = new HashMap<>();
        resp.put("ok", true);
        resp.put("goodsId", goods.getId());
        return ResponseEntity.ok(resp);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) throws IOException {
        if (file.isEmpty()) return ResponseEntity.badRequest().body("文件为空");

        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path path = Paths.get("E:/uploads/goods/", filename); // 改成你的路径
        Files.createDirectories(path.getParent());
        file.transferTo(path);

        String url = "http://192.168.0.105:8080/uploads/goods/" + filename;
        Map<String, String> resp = new HashMap<>();
        resp.put("url", url);
        return ResponseEntity.ok(resp);
    }

    // GoodsController.java（新增三个接口）

    @GetMapping("/my")
    public ResponseEntity<Map<String, Object>> myGoods(@RequestHeader("Authorization") String auth) {
        Long userId = getUserId(auth);
        List<GoodsEntity> list = goodsRepository.findByUserIdAndStatusOrderByCreatedAtDesc(userId, 1); // 只上架
        return okList(list);
    }

    @GetMapping("/my-likes")
    public ResponseEntity<Map<String, Object>> myLikes(@RequestHeader("Authorization") String auth) {
        Long userId = getUserId(auth);
        List<Long> likeIds = likesService.getMyLikes(userId);
        List<GoodsEntity> list = goodsRepository.findAllById(likeIds);
        return okList(list);
    }

    @GetMapping("/my-published")
    public ResponseEntity<Map<String, Object>> myPublished(@RequestHeader("Authorization") String auth) {
        Long userId = getUserId(auth);
        List<GoodsEntity> list = goodsRepository.findByUserIdOrderByCreatedAtDesc(userId); // 所有（含下架）
        return okList(list);
    }

    // 工具方法
    private Long getUserId(String auth) {
        return JwtUtil.getUserId(auth.substring(7));
    }

    private ResponseEntity<Map<String, Object>> okList(List<GoodsEntity> list) {
        Map<String, Object> body = new HashMap<>();
        body.put("list", list);
        return ResponseEntity.ok(body);
    }




    // 保存修改（支持修改标题、价格、描述、图片）
    @Transactional
    @PostMapping("/update")
    public ResponseEntity<Map<String, Object>> update(@RequestHeader("Authorization") String auth,
                                                      @RequestBody GoodsEntity req) {
        Long userId = JwtUtil.getUserId(auth.substring(7));

        GoodsEntity goods = goodsRepository.findById(req.getId()).orElse(null);
        if (goods == null || !goods.getUserId().equals(userId)) {
            return ResponseEntity.status(404).body(null);
        }

        // 只允许修改以下字段
        goods.setTitle(req.getTitle());
        goods.setPrice(req.getPrice());
        goods.setDescription(req.getDescription());
        goods.setImages(req.getImages()); // 图片数组转JSON字符串存库（你原来的逻辑）

        goodsRepository.save(goods);

        Map<String, Object> body = new HashMap<>();
        body.put("ok", true);
        body.put("goods", goods);
        return ResponseEntity.ok(body);
    }


    @PostMapping("/search")
    public ResponseEntity<List<GoodsEntity>> searchGoods(
            @RequestBody SearchRequest req,
            @RequestHeader(value = "Authorization", required = false) String auth) {

        // 1. 解析当前用户（用于判断是否已点赞）
        Long userId = null;
        if (auth != null && auth.startsWith("Bearer ")) {
            String token = auth.substring(7);
            userId = JwtUtil.getUserId(token);
        }

        // 2. 参数校验
        if (req.getKeyword() == null || req.getKeyword().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }
        if (req.getUniversityId() == null || req.getUniversityId().isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }

        // 3. 分页查询
        Pageable pageable = PageRequest.of(req.getPage() - 1, req.getSize());
        Page<GoodsEntity> page = goodsRepository.searchGoods(
                req.getKeyword().trim(),
                req.getUniversityId(),
                pageable
        );

        List<GoodsEntity> list = page.getContent();

        // 4. 设置 cover（你 images 是 JSON 字符串）
        for (GoodsEntity g : list) {
            if (g.getImages() != null && !g.getImages().isEmpty()) {
                try {
                    List<String> imgList = JSON.parseArray(g.getImages(), String.class);
                    g.setCover(imgList.get(0));
                } catch (Exception e) {
                    g.setCover(g.getImages().split(",")[0]); // 兜底
                }
            }
        }

        // 5. 注入当前用户是否已点赞（你已经有现成的工具方法！超香）
        likeUtil.setGoodsLikeStatus(list, userId);

        return ResponseEntity.ok(list);
    }

}
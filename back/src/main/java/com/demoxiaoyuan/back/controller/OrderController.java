package com.demoxiaoyuan.back.controller;

import com.demoxiaoyuan.back.entity.OrderEntity;
import com.demoxiaoyuan.back.repository.OrderRepository;
import com.demoxiaoyuan.back.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // 获取我的订单列表（支持状态过滤，status=null 返回所有）
    @GetMapping("/my")
    public ResponseEntity<Map<String, Object>> myOrders(@RequestHeader("Authorization") String auth,
                                                        @RequestParam(required = false) String status) {  // 改成 String！

        Long userId = JwtUtil.getUserId(auth.substring(7));
        List<OrderEntity> list;

        if (status != null && !"null".equals(status) && !status.isEmpty()) {
            // 只有当 status 是有效数字时才过滤
            list = orderRepository.findByBuyerIdAndStatusOrderByCreatedAtDesc(userId, Integer.parseInt(status));
        } else {
            // status 是 null、"null"、空字符串 → 返回全部
            list = orderRepository.findByBuyerIdOrderByCreatedAtDesc(userId);
        }

        Map<String, Object> body = new HashMap<>();
        body.put("list", list);
        return ResponseEntity.ok(body);
    }

    // 获取订单详情
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> detail(@RequestHeader("Authorization") String auth,
                                                      @PathVariable Long id) {
        Long userId = JwtUtil.getUserId(auth.substring(7));
        OrderEntity order = orderRepository.findById(id).orElse(null);
        if (order == null || !order.getBuyerId().equals(userId)) {
            return ResponseEntity.status(404).body(null);
        }

        Map<String, Object> body = new HashMap<>();
        body.put("order", order);
        return ResponseEntity.ok(body);
    }

    // 更新订单状态（e.g., 确认收货）
    @PutMapping("/status/{id}")
    public ResponseEntity<Map<String, Object>> updateStatus(@RequestHeader("Authorization") String auth,
                                                            @PathVariable Long id,
                                                            @RequestParam Integer newStatus) {
        Long userId = JwtUtil.getUserId(auth.substring(7));
        OrderEntity order = orderRepository.findById(id).orElse(null);
        if (order == null || !order.getBuyerId().equals(userId)) {
            return ResponseEntity.status(404).body(null);
        }

        order.setStatus(newStatus);
        orderRepository.save(order);

        Map<String, Object> body = new HashMap<>();
        body.put("ok", true);
        return ResponseEntity.ok(body);
    }
}
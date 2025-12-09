package com.demoxiaoyuan.back.controller;

import com.demoxiaoyuan.back.entity.ChatMessage;
import com.demoxiaoyuan.back.repository.ChatMessageRepository;
import com.demoxiaoyuan.back.service.ChatMessageService;
import com.demoxiaoyuan.back.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.*;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private ChatMessageService chatMessageService;

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    // GET /api/chat/history?friendId=123&page=1&size=30
    @GetMapping("/history")
    public ResponseEntity<?> history(
            @RequestParam Long friendId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "30") int size,
            @RequestHeader("Authorization") String auth) {

        String token = auth.substring(7);
        Long userId = JwtUtil.getUserId(token);

        if (userId == null) {
            return ResponseEntity.status(401).body("登录失效");
        }

        List<ChatMessage> list = chatMessageService.getHistory(userId, friendId, page, size);

        // 进入聊天页自动标记已读
        chatMessageService.markAsRead(friendId, userId);

        Map<String, Object> resp = new HashMap<>();
        resp.put("list", list);
        return ResponseEntity.ok(resp);
    }

    @GetMapping("/sessions")
    public ResponseEntity<?> sessions(@RequestHeader("Authorization") String auth) {
        String token = auth.substring(7);
        Long userId = JwtUtil.getUserId(token);
        if (userId == null) {
            return ResponseEntity.status(401).body("登录失效");
        }

        // 1. 获取所有有过聊天的用户 + 最后一条消息
        List<Object[]> rawList = chatMessageRepository.findLatestConversations(userId);

        List<Map<String, Object>> result = new ArrayList<>();
        Set<Long> added = new HashSet<>();  // 去重

        for (Object[] row : rawList) {
            Long friendId = ((Number) row[0]).longValue();
            if (added.contains(friendId)) continue;
            added.add(friendId);

            Map<String, Object> item = new HashMap<>();
            item.put("friendId", friendId);
            item.put("nickname", row[1] != null ? row[1] : "用户");
            item.put("avatar", row[2] != null ? row[2] : "");
            item.put("lastMessage", row[3] != null ? row[3].toString() : "[图片]");
            item.put("lastTime", row[4]);

            // 统计未读数
            int unread = chatMessageRepository.countUnread(userId, friendId);
            item.put("unread", unread);

            result.add(item);
        }

        // Java 8 写法：不能用 Map.of()
        Map<String, Object> resp = new HashMap<>();
        resp.put("code", 200);
        resp.put("data", result);

        return ResponseEntity.ok(resp);
    }
}
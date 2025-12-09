package com.demoxiaoyuan.back.websocket;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.demoxiaoyuan.back.entity.ChatMessage;
import com.demoxiaoyuan.back.service.ChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class ChatWebSocketHandler implements WebSocketHandler {

    // 在线用户：userId -> session
    public static final ConcurrentHashMap<Long, WebSocketSession> ONLINE_USERS = new ConcurrentHashMap<>();

    @Autowired
    private ChatMessageService chatMessageService;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        Long userId = (Long) session.getAttributes().get("userId");
        System.out.println("【后端连接完全建立】userId=" + userId);
        if (userId != null) {
            ONLINE_USERS.put(userId, session);
        }
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        String payload = (String) message.getPayload();
        JSONObject json = JSON.parseObject(payload);

        ChatMessage msg = new ChatMessage();
        msg.setFromUserId(json.getLong("fromUserId"));
        msg.setToUserId(json.getLong("toUserId"));
        msg.setContent(json.getString("content"));
        msg.setImageUrl(json.getString("imageUrl"));
        msg.setType(json.getInteger("type"));
        msg.setStatus(0);

        try {
            ChatMessage savedMsg = chatMessageService.save(msg);

            JSONObject resp = new JSONObject();
            resp.put("type", "message");
            resp.put("msg", savedMsg);
            String respStr = resp.toJSONString();

            // 推给对方
            WebSocketSession toSession = ONLINE_USERS.get(msg.getToUserId());
            if (toSession != null && toSession.isOpen()) {
                toSession.sendMessage(new TextMessage(respStr));
            }
            // 回给发送者
            session.sendMessage(new TextMessage(respStr));

        } catch (Exception e) {
            e.printStackTrace();  // 这行很重要！后台会打印真实错误原因

            // 告诉前端保存失败了
            JSONObject err = new JSONObject();
            err.put("type", "error");
            err.put("message", "保存失败：" + e.getMessage());
            session.sendMessage(new TextMessage(err.toJSONString()));
        }
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) {
        closeSession(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        closeSession(session);
    }

    private void closeSession(WebSocketSession session) {
        Long userId = (Long) session.getAttributes().get("userId");
        if (userId != null) {
            ONLINE_USERS.remove(userId);
        }
    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }
}
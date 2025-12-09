package com.demoxiaoyuan.back.websocket;

import com.demoxiaoyuan.back.util.JwtUtil;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

import java.util.Map;
@Component
public class ChatHandshakeInterceptor extends HttpSessionHandshakeInterceptor {

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response,
                                   WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {

        System.out.println("【WebSocket握手开始】");

        if (!(request instanceof ServletServerHttpRequest)) {
            return false;
        }

        String query = request.getURI().getQuery();
        if (query == null) return false;

        String token = null;
        Long userId = null;
        for (String param : query.split("&")) {
            if (param.startsWith("token=")) token = param.substring(6);
            if (param.startsWith("userId=")) userId = Long.parseLong(param.substring(7));
        }

        if (token != null && userId != null) {
            try {
                if (JwtUtil.getUserId(token).equals(userId)) {
                    attributes.put("userId", userId);
                    System.out.println("【握手验证通过】userId = " + userId);

                    // 必须调用 super！！
                    return super.beforeHandshake(request, response, wsHandler, attributes);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        System.out.println("【握手验证失败】拒绝连接");
        return false;
    }


    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response,
                               WebSocketHandler wsHandler, Exception exception) {
        System.out.println("【握手完成】Spring 已发送 101 响应，前端 onOpen 马上触发！");
        // 必须调用 super，否则客户端永远收不到 101！
        super.afterHandshake(request, response, wsHandler, exception);
    }
}
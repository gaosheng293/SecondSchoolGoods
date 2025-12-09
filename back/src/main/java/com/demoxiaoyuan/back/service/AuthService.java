package com.demoxiaoyuan.back.service;

import com.demoxiaoyuan.back.entity.SessionEntity;
import com.demoxiaoyuan.back.entity.UserEntity;
import com.demoxiaoyuan.back.repository.SessionRepository;
import com.demoxiaoyuan.back.repository.UserRepository;
import com.demoxiaoyuan.back.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final SessionRepository sessionRepository;

    public AuthService(UserRepository userRepository, SessionRepository sessionRepository) {
        this.userRepository = userRepository;
        this.sessionRepository = sessionRepository;
    }

    public ResponseEntity<Map<String, Object>> loginWithWxCode(String code) {
        String openId = UUID.nameUUIDFromBytes(code.getBytes()).toString();
        UserEntity user = userRepository.findByOpenid(openId).orElseGet(() -> {
            UserEntity u = new UserEntity();
            u.setOpenid(openId);
            u.setNickname("校园用户" + (int)(Math.random()*9000+1000));
            return userRepository.save(u);
        });
        // 直接生成带 userId 的 JWT
        String newToken = JwtUtil.generateToken(user.getId(), user.getUniversityId());
        // 关键：踢掉这个用户之前的所有登录设备！
        sessionRepository.deleteByUserId(user.getId());
        // 保存新的 session
        SessionEntity session = new SessionEntity();
        session.setToken(newToken);
        session.setUserId(user.getId());
        session.setUserOpenid(user.getOpenid());
        session.setCreatedAt(Instant.now());
        sessionRepository.save(session);
        Map<String, Object> body = new HashMap<>();
        body.put("token", newToken);
        body.put("userInfo", user);
        return ResponseEntity.ok(body);
    }

    public SessionEntity getSessionByToken(String token) {
        return sessionRepository.findById(token).orElse(null);
    }
}

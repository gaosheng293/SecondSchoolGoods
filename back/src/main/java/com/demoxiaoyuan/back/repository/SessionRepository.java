package com.demoxiaoyuan.back.repository;

import com.demoxiaoyuan.back.entity.SessionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SessionRepository extends JpaRepository<SessionEntity, String> {
    // 关键：根据用户ID删除所有旧会话（实现踢人）
    void deleteByUserId(Long id);

    // 删除指定 token 的会话（设置大学时用）
    void deleteByToken(String token);

    // 可选：查用户当前是否已有有效会话
    Optional<SessionEntity> findByUserId(String userId);
}

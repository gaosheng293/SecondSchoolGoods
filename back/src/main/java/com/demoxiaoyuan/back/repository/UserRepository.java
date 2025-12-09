package com.demoxiaoyuan.back.repository;

import com.demoxiaoyuan.back.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findById(Long id);
    Optional<UserEntity> findByOpenid(String openid);
}

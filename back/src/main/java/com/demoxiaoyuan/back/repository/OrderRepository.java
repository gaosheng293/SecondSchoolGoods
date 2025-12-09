package com.demoxiaoyuan.back.repository;

import com.demoxiaoyuan.back.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
    // 按买家 + 状态查询，时间倒序
    List<OrderEntity> findByBuyerIdAndStatusOrderByCreatedAtDesc(Long buyerId, Integer status);
    // 按买家查询所有
    List<OrderEntity> findByBuyerIdOrderByCreatedAtDesc(Long buyerId);

    long countByBuyerId(Long buyerId);
}
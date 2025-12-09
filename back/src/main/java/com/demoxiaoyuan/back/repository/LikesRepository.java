package com.demoxiaoyuan.back.repository;

import com.demoxiaoyuan.back.entity.LikesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LikesRepository extends JpaRepository<LikesEntity, Long> {
    boolean existsByUserIdAndGoodsId(Long userId, Long goodsId);
    void deleteByUserIdAndGoodsId(Long userId, Long goodsId);
    List<LikesEntity> findByUserId(Long userId);

    @Query("SELECT l.goodsId FROM LikesEntity l WHERE l.userId = :userId")
    List<Long> findGoodsIdByUserId(@Param("userId") Long userId);

    long countByUserId(Long userId);
}
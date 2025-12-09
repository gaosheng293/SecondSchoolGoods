package com.demoxiaoyuan.back.entity;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "likes")
public class LikesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;    // 喜欢的用户ID
    @Column(name = "goods_id", nullable = false)
    private Long goodsId;   // 喜欢的商品ID
    private Instant createdAt = Instant.now();  // 创建时间


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Long goodsId) {
        this.goodsId = goodsId;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
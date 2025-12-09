package com.demoxiaoyuan.back.entity;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "sessions")
public class SessionEntity {
    @Id
    private String token;
    @Column(name = "user_id")
    private Long userId;
    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "user_openid")
    private String userOpenid;

    public String getUserOpenid() {
        return userOpenid;
    }

    public void setUserOpenid(String userOpenid) {
        this.userOpenid = userOpenid;
    }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}

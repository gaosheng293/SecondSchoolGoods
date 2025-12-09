package com.demoxiaoyuan.back.entity;


import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;


@Entity
@Table(name = "goods")
public class GoodsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(precision = 10, scale = 2)
    private BigDecimal originalPrice;

    private String cover;

    @Column(columnDefinition = "TEXT")
    private String images;  // JSON 字符串

    @Column(columnDefinition = "TEXT")
    private String description;

    private Integer likeCount = 0;

    private Integer viewCount = 0;

    @Column(nullable = false)
    private Integer categoryId;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String universityId;

    private Boolean isNegotiable = false;

    private Boolean isFreeShipping = false;

    private String wechat;

    private String phone;

    private String qq;

    // 为了前端显示，加上卖家昵称、头像、学校名（联表查询返回）
    @Transient  // 不存数据库，是运行时字段
    private String nickname;

    @Transient
    private String avatar;

    @Transient
    private String universityName;

    @Transient
    private Boolean isLiked = false;  // 默认false

    public Boolean getIsLiked() {
        return isLiked != null ? isLiked : false;
    }

    public void setIsLiked(Boolean isLiked) {
        this.isLiked = isLiked;
    }

    // getter/setter
    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }
    public String getAvatar() { return avatar; }
    public void setAvatar(String avatar) { this.avatar = avatar; }
    public String getUniversityName() { return universityName; }
    public void setUniversityName(String universityName) { this.universityName = universityName; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(BigDecimal originalPrice) {
        this.originalPrice = originalPrice;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(Integer likeCount) {
        this.likeCount = likeCount;
    }

    public Integer getViewCount() {
        return viewCount;
    }

    public void setViewCount(Integer viewCount) {
        this.viewCount = viewCount;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUniversityId() {
        return universityId;
    }

    public void setUniversityId(String universityId) {
        this.universityId = universityId;
    }

    public Boolean getNegotiable() {
        return isNegotiable;
    }

    public void setNegotiable(Boolean negotiable) {
        isNegotiable = negotiable;
    }

    public Boolean getFreeShipping() {
        return isFreeShipping;
    }

    public void setFreeShipping(Boolean freeShipping) {
        isFreeShipping = freeShipping;
    }

    public String getWechat() {
        return wechat;
    }

    public void setWechat(String wechat) {
        this.wechat = wechat;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    private Integer status = 1;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;



}
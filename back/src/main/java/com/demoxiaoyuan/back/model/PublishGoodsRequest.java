package com.demoxiaoyuan.back.model;

import java.math.BigDecimal;
import java.util.List;

public class PublishGoodsRequest {
    private String title;
    private BigDecimal price;
    private BigDecimal originalPrice;
    private Integer categoryId;
    private List<String> images;        // 图片URL数组
    private String description;
    private String wechat;
    private String phone;
    private String qq;
    private Boolean isNegotiable = false;
    private Boolean isFreeShipping = false;

    // getters and setters...

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

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
}
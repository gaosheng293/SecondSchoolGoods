package com.demoxiaoyuan.back.model;

public class SearchRequest {
    private String keyword;        // 搜索关键词
    private String universityId;   // 大学ID（字符串，和你数据库保持一致）
    private Integer page = 1;
    private Integer size = 20;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public String getUniversityId() {
        return universityId;
    }

    public void setUniversityId(String universityId) {
        this.universityId = universityId;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }
}
package com.demoxiaoyuan.back.model;

public class UserSession {
    private String userId;
    private String universityId;

    public UserSession(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public String getUniversityId() {
        return universityId;
    }

    public void setUniversityId(String universityId) {
        this.universityId = universityId;
    }
}

package com.demoxiaoyuan.back.entity;

import javax.persistence.*;

@Entity
@Table(name = "universities")
public class UniversityEntity {

    @Id
    private String id;

    private String name;

    @Column(name = "en_name")
    private String enName;

    // 新增：省份，用于前端按省份折叠分组
    private String province;

    // Getter & Setter
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEnName() { return enName; }
    public void setEnName(String enName) { this.enName = enName; }
    public String getProvince() { return province; }
    public void setProvince(String province) { this.province = province; }
}
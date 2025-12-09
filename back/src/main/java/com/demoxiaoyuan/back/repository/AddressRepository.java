package com.demoxiaoyuan.back.repository;

import com.demoxiaoyuan.back.entity.AddressEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<AddressEntity, Long> {

    // 查询用户所有地址，按默认在前、创建时间倒序
    List<AddressEntity> findByUserIdOrderByIsDefaultDescCreatedAtDesc(Long userId);

    // 取消用户所有默认地址（用于设新默认）
    @Modifying
    @Query("UPDATE AddressEntity a SET a.isDefault = false WHERE a.userId = :userId")
    void resetDefaultByUserId(Long userId);
}
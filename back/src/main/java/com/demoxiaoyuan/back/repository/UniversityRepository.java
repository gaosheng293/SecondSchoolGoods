package com.demoxiaoyuan.back.repository;

import com.demoxiaoyuan.back.entity.UniversityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UniversityRepository extends JpaRepository<UniversityEntity, String> {
    Optional<UniversityEntity> findById(String id);
}

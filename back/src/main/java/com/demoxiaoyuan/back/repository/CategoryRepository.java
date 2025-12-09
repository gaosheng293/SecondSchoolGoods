package com.demoxiaoyuan.back.repository;

import com.demoxiaoyuan.back.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {
    List<CategoryEntity> findAllByOrderBySortOrderAsc();
}
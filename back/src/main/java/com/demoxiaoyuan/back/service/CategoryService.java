package com.demoxiaoyuan.back.service;

import com.demoxiaoyuan.back.entity.CategoryEntity;
import com.demoxiaoyuan.back.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository repository;

    public List<CategoryEntity> listAll() {
        return repository.findAllByOrderBySortOrderAsc();
    }
}
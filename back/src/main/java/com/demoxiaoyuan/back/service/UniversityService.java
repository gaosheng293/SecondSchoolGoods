package com.demoxiaoyuan.back.service;

import com.demoxiaoyuan.back.entity.UniversityEntity;
import com.demoxiaoyuan.back.repository.UniversityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniversityService {
    private final UniversityRepository repository;

    public UniversityService(UniversityRepository repository) {
        this.repository = repository;
    }

    public List<UniversityEntity> list() {
        return repository.findAll();
    }
}

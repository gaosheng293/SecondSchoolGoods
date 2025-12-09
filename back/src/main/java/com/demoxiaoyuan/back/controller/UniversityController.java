package com.demoxiaoyuan.back.controller;

import com.demoxiaoyuan.back.entity.UniversityEntity;
import com.demoxiaoyuan.back.service.UniversityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UniversityController {
    private final UniversityService universityService;

    public UniversityController(UniversityService universityService) {
        this.universityService = universityService;
    }

    @GetMapping("/universities")
    public ResponseEntity<Map<String, Object>> list() {
        List<UniversityEntity> list = universityService.list();
        Map<String, Object> body = new HashMap<>();
        body.put("list", list);
        return ResponseEntity.ok(body);
    }
}

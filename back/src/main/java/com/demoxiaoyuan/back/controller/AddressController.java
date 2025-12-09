package com.demoxiaoyuan.back.controller;

import com.demoxiaoyuan.back.entity.AddressEntity;
import com.demoxiaoyuan.back.repository.AddressRepository;
import com.demoxiaoyuan.back.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/address")
public class AddressController {

    private final AddressRepository addressRepository;

    public AddressController(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    // 获取用户地址列表
    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> getList(@RequestHeader("Authorization") String auth) {
        Long userId = JwtUtil.getUserId(auth.substring(7));
        List<AddressEntity> list = addressRepository.findByUserIdOrderByIsDefaultDescCreatedAtDesc(userId);

        Map<String, Object> body = new HashMap<>();
        body.put("list", list);
        return ResponseEntity.ok(body);
    }

    // 添加/编辑地址（id 存在则编辑）
    @Transactional
    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@RequestHeader("Authorization") String auth,
                                                    @RequestBody AddressEntity req) {
        Long userId = JwtUtil.getUserId(auth.substring(7));
        req.setUserId(userId);

        // 如果设默认，先取消其他默认
        if (req.getIsDefault()) {
            addressRepository.resetDefaultByUserId(userId);
        }

        AddressEntity saved = addressRepository.save(req);

        Map<String, Object> body = new HashMap<>();
        body.put("ok", true);
        body.put("address", saved);
        return ResponseEntity.ok(body);
    }

    // 删除地址
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(@RequestHeader("Authorization") String auth,
                                                      @PathVariable Long id) {
        Long userId = JwtUtil.getUserId(auth.substring(7));
        AddressEntity addr = addressRepository.findById(id).orElse(null);
        if (addr == null || !addr.getUserId().equals(userId)) {
            return ResponseEntity.status(404).body(null);
        }

        addressRepository.deleteById(id);

        Map<String, Object> body = new HashMap<>();
        body.put("ok", true);
        return ResponseEntity.ok(body);
    }

    // 设为默认
    @Transactional
    @PutMapping("/default/{id}")
    public ResponseEntity<Map<String, Object>> setDefault(@RequestHeader("Authorization") String auth,
                                                          @PathVariable Long id) {
        Long userId = JwtUtil.getUserId(auth.substring(7));
        AddressEntity addr = addressRepository.findById(id).orElse(null);
        if (addr == null || !addr.getUserId().equals(userId)) {
            return ResponseEntity.status(404).body(null);
        }

        // 取消其他默认
        addressRepository.resetDefaultByUserId(userId);

        // 设当前为默认
        addr.setIsDefault(true);
        addressRepository.save(addr);

        Map<String, Object> body = new HashMap<>();
        body.put("ok", true);
        return ResponseEntity.ok(body);
    }
}
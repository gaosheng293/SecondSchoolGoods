package com.demoxiaoyuan.back.controller;

import com.demoxiaoyuan.back.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;



    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    public static class WxLoginRequest {
        public String code;
        public String getCode() { return code; }
        public void setCode(String code) { this.code = code; }
    }

    @PostMapping("/wxLogin")
    public ResponseEntity<Map<String, Object>> wxLogin(@RequestBody WxLoginRequest req) {
        return authService.loginWithWxCode(req.getCode());
    }
}

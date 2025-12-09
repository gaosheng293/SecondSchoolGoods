// JwtUtil.java
package com.demoxiaoyuan.back.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JwtUtil {
    private static final String SECRET = "g7k9p2m4x8q1r5t3y6u0i9o8l7k6j5h4g3f2d1s2a3d4f5g6h7j8k9l0m1n2p3q4r5"; // 改成你自己的
    private static final long EXPIRATION = 30 * 24 * 60 * 60 * 1000L; // 30天

    public static String generateToken(Long userId, String universityId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", userId);
        if (universityId != null) {
            claims.put("universityId", universityId);
        }
        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    public static Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody();
    }

    public static Long getUserId(String token) {
        return Long.valueOf(parseToken(token).get("userId").toString());
    }

    public static String getUniversityId(String token) {
        Object uid = parseToken(token).get("universityId");
        return uid != null ? uid.toString() : null;
    }
}
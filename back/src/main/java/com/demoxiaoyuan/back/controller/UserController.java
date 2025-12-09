package com.demoxiaoyuan.back.controller;

import com.demoxiaoyuan.back.entity.GoodsEntity;
import com.demoxiaoyuan.back.entity.SessionEntity;
import com.demoxiaoyuan.back.entity.UniversityEntity;
import com.demoxiaoyuan.back.entity.UserEntity;
import com.demoxiaoyuan.back.repository.GoodsRepository;
import com.demoxiaoyuan.back.repository.OrderRepository;
import com.demoxiaoyuan.back.repository.SessionRepository;
import com.demoxiaoyuan.back.repository.UserRepository;
import com.demoxiaoyuan.back.service.LikesService;
import com.demoxiaoyuan.back.service.UniversityService;
import com.demoxiaoyuan.back.service.AuthService;
import com.demoxiaoyuan.back.util.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final AuthService authService;
    private final UserRepository userRepository;
    private final UniversityService universityService;

    private final LikesService likesService;
    private final GoodsRepository goodsRepository;

    private final SessionRepository sessionRepository;

    private final OrderRepository orderRepository;

    public UserController(AuthService authService, UserRepository userRepository,
                          UniversityService universityService, SessionRepository sessionRepository,
                          LikesService likesService, GoodsRepository goodsRepository,
                          OrderRepository orderRepository) {
        this.authService = authService;
        this.userRepository = userRepository;
        this.universityService = universityService;
        this.sessionRepository = sessionRepository;
        this.likesService = likesService;
        this.goodsRepository = goodsRepository;
        this.orderRepository = orderRepository;
    }

    public static class SelectUniversityRequest {
        public String universityId;
        public String getUniversityId() { return universityId; }
        public void setUniversityId(String universityId) { this.universityId = universityId; }
    }

    // UserController.java 的 setUniversity 方法，修改返回内容
    @Transactional
    @PostMapping("/university")
    public ResponseEntity<Map<String, Object>> setUniversity(
            @RequestHeader("Authorization") String auth,
            @RequestBody SelectUniversityRequest req) {

        String token = auth.substring(7);
        Long userId = JwtUtil.getUserId(token);

        UserEntity user = userRepository.findById(userId).orElse(null);
        if (user == null) return ResponseEntity.status(401).body(null);

        user.setUniversityId(req.getUniversityId());
        userRepository.save(user);

        // 生成新 token
        String newToken = JwtUtil.generateToken(userId, req.getUniversityId());

        // 删除旧 session，保存新 session（你原来的逻辑）
        sessionRepository.deleteByToken(token);
        SessionEntity newSession = new SessionEntity();
        newSession.setToken(newToken);
        newSession.setUserId(user.getId());
        newSession.setUserOpenid(user.getOpenid());
        newSession.setCreatedAt(Instant.now());
        sessionRepository.save(newSession);

        // 关键：返回完整的 profile，方便前端直接保存！
        Map<String, Object> body = new HashMap<>();
        body.put("ok", true);
        body.put("token", newToken);

        // 构造 university 对象
        Map<String, Object> university = new HashMap<>();
        UniversityEntity u = universityService.list().stream()
                .filter(x -> x.getId().equals(req.getUniversityId()))
                .findFirst().orElse(null);
        if (u != null) {
            university.put("id", u.getId());
            university.put("name", u.getName());
            university.put("enName", u.getEnName());
        }

        Map<String, Object> profile = new HashMap<>();
        profile.put("userId", userId);
        profile.put("university", university);

        body.put("profile", profile); // 加上这一行！

        return ResponseEntity.ok(body);
    }
    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> profile(
            @RequestHeader(value = "Authorization", required = false) String auth) {
        String token = null;
        if (auth != null && auth.startsWith("Bearer ")) {
            token = auth.substring(7);
        }
        if (token == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new HashMap<>());
        }
        SessionEntity session = authService.getSessionByToken(token);
        if (session == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new HashMap<>());
        }
        UserEntity user = userRepository.findByOpenid(session.getUserOpenid()).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new HashMap<>());
        }
        Map<String, Object> body = new HashMap<>();
        body.put("userId", user.getId());
        body.put("user", user);
        Map<String, Object> uni = new HashMap<>();
        if (user.getUniversityId() != null) {
            com.demoxiaoyuan.back.entity.UniversityEntity u = universityService.list().stream()
                    .filter(x -> x.getId().equals(user.getUniversityId()))
                    .findFirst().orElse(null);
            if (u != null) {
                uni.put("id", u.getId());
                uni.put("name", u.getName());
                uni.put("enName", u.getEnName());
            }
        }
        body.put("university", uni.isEmpty() ? null : uni);
        return ResponseEntity.ok(body);
    }

    @GetMapping("/mine")
    public ResponseEntity<Map<String, Object>> mine(
            @RequestHeader(value = "Authorization", required = false) String auth) {
        String token = null;
        if (auth != null && auth.startsWith("Bearer ")) {
            token = auth.substring(7);
        }
        if (token == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new HashMap<>());
        }
        SessionEntity session = authService.getSessionByToken(token);
        if (session == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new HashMap<>());
        }
        UserEntity user = userRepository.findByOpenid(session.getUserOpenid()).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new HashMap<>());
        }

        Map<String, Object> body = new HashMap<>();
        body.put("nickname", user.getNickname());
        body.put("avatar", user.getAvatar() != null ? user.getAvatar() : "");

        Map<String, Object> uni = new HashMap<>();
        if (user.getUniversityId() != null) {
            UniversityEntity u = universityService.list().stream()
                    .filter(x -> x.getId().equals(user.getUniversityId()))
                    .findFirst().orElse(null);
            if (u != null) {
                uni.put("id", u.getId());
                uni.put("name", u.getName());
            }
        }
        body.put("university", uni.isEmpty() ? null : uni);

        // 实时从数据库计算 counts
        Long userId = user.getId();
        body.put("goodsCount", goodsRepository.countByUserIdAndStatus(userId, 1)); // 假设 status=1 为上架中的闲置商品
        body.put("likeCount", likesService.countUserLikes(userId)); // 喜欢的商品数量
        body.put("orderCount", orderRepository.countByBuyerId(userId));

        return ResponseEntity.ok(body);
    }

    public static class UpdateProfileRequest {
        public String nickname;
        public String avatar;

        public String getNickname() { return nickname; }
        public void setNickname(String nickname) { this.nickname = nickname; }
        public String getAvatar() { return avatar; }
        public void setAvatar(String avatar) { this.avatar = avatar; }
    }

    @Transactional
    @PostMapping("/update")
    public ResponseEntity<Map<String, Object>> updateProfile(
            @RequestHeader("Authorization") String auth,
            @RequestBody UpdateProfileRequest req) {

        String token = auth.substring(7);
        Long userId = JwtUtil.getUserId(token);

        UserEntity user = userRepository.findById(userId).orElse(null);
        if (user == null) return ResponseEntity.status(401).body(null);

        // 更新昵称（如果提供了）
        if (req.getNickname() != null && !req.getNickname().isEmpty()) {
            user.setNickname(req.getNickname().trim());
        }

        // 更新头像（如果提供了）
        if (req.getAvatar() != null && !req.getAvatar().isEmpty()) {
            user.setAvatar(req.getAvatar());
        }

        userRepository.save(user);

        // 生成新 token（带最新信息）
        String newToken = JwtUtil.generateToken(userId, user.getUniversityId());

        // 删除旧 session，保存新 session
        sessionRepository.deleteByToken(token);
        SessionEntity newSession = new SessionEntity();
        newSession.setToken(newToken);
        newSession.setUserId(user.getId());
        newSession.setUserOpenid(user.getOpenid());
        newSession.setCreatedAt(Instant.now());
        sessionRepository.save(newSession);

        // 返回完整的 profile（与 university 接口一致）
        Map<String, Object> body = new HashMap<>();
        body.put("ok", true);
        body.put("token", newToken);

        // 构造 university 对象
        Map<String, Object> university = new HashMap<>();
        if (user.getUniversityId() != null) {
            UniversityEntity u = universityService.list().stream()
                    .filter(x -> x.getId().equals(user.getUniversityId()))
                    .findFirst().orElse(null);
            if (u != null) {
                university.put("id", u.getId());
                university.put("name", u.getName());
                university.put("enName", u.getEnName());
            }
        }

        // 构造 user 对象
        Map<String, Object> userMap = new HashMap<>();
        userMap.put("id", user.getId());
        userMap.put("nickname", user.getNickname());
        userMap.put("avatar", user.getAvatar() != null ? user.getAvatar() : "");

        Map<String, Object> profile = new HashMap<>();
        profile.put("user", userMap);
        profile.put("university", university.isEmpty() ? null : university);

        body.put("profile", profile);

        return ResponseEntity.ok(body);
    }

    // 添加喜欢/取消喜欢 API
    @PostMapping("/like/{goodsId}")
    public ResponseEntity<Map<String, Object>> toggleLike(
            @RequestHeader("Authorization") String auth,
            @PathVariable Long goodsId) {

        String token = auth.substring(7);
        Long userId = JwtUtil.getUserId(token);

        // 调用 service 切换喜欢状态
        boolean isLiked = likesService.toggleLike(userId, goodsId);

        Map<String, Object> body = new HashMap<>();
        body.put("ok", true);
        body.put("isLiked", isLiked);
        // 可选：返回最新 likeCount（从 Goods 查）
        GoodsEntity goods = goodsRepository.findById(goodsId).orElse(null);
        body.put("likeCount", goods != null ? goods.getLikeCount() : 0);

        return ResponseEntity.ok(body);
    }

    // 获取我的喜欢列表 API（返回 goodsId 列表，后续可扩展返回完整 Goods）
    @GetMapping("/my-likes")
    public ResponseEntity<List<Long>> getMyLikes(
            @RequestHeader("Authorization") String auth) {

        String token = auth.substring(7);
        Long userId = JwtUtil.getUserId(token);

        List<Long> likes = likesService.getMyLikes(userId);
        return ResponseEntity.ok(likes);
    }

    // ============================ 个人主页相关接口 ============================

    /**
     * 获取用户公开信息（别人访问 Ta 的主页时用）
     * GET /api/user/info/{userId}
     */
    @GetMapping("/info/{userId}")
    public ResponseEntity<Map<String, Object>> getUserInfo(@PathVariable Long userId) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.status(404).body(null);
        }

        Map<String, Object> body = new HashMap<>();

        // 基本信息
        body.put("userId", user.getId());
        body.put("nickname", user.getNickname() != null ? user.getNickname() : "匿名用户");
        body.put("avatar", user.getAvatar() != null ? user.getAvatar() : "");

        // 学校信息
        Map<String, Object> university = new HashMap<>();
        if (user.getUniversityId() != null) {
            UniversityEntity u = universityService.list().stream()
                    .filter(x -> x.getId().equals(user.getUniversityId()))
                    .findFirst().orElse(null);
            if (u != null) {
                university.put("id", u.getId());
                university.put("name", u.getName());
                university.put("enName", u.getEnName());
            }
        }
        body.put("universityName", university.isEmpty() ? "未设置学校" : university.get("name"));

        // 统计数量（实时统计）
        long goodsCount = goodsRepository.countByUserId(userId);
        long likeCount = likesService.countUserLikes(userId); // 你后面会补这个方法

        body.put("goodsCount", goodsCount);
        body.put("likeCount", likeCount);   // 前端暂时不用也行，预留着

        return ResponseEntity.ok(body);
    }

    /**
     * 获取用户发布的商品列表（公开）
     * GET /api/user/goods/{userId}
     */
    @GetMapping("/goods/{userId}")
    public ResponseEntity<Map<String, Object>> getUserGoods(@PathVariable Long userId) {
        // 直接查该用户的所有商品（可加状态过滤：只显示上架的）
        List<GoodsEntity> list = goodsRepository.findByUserIdOrderByCreatedAtDesc(userId);

        Map<String, Object> body = new HashMap<>();
        body.put("list", list);
        return ResponseEntity.ok(body);
    }

    /**
     * 获取用户喜欢的商品列表（仅自己能看自己的）
     * GET /api/user/likes/{userId}
     */
    @GetMapping("/likes/{userId}")
    public ResponseEntity<Map<String, Object>> getUserLikes(
            @RequestHeader("Authorization") String auth,
            @PathVariable Long userId) {

        String token = auth.substring(7);
        Long loginUserId = JwtUtil.getUserId(token);

        // 关键：只能看自己的喜欢！别人访问直接返回空
        if (!loginUserId.equals(userId)) {
            Map<String, Object> empty = new HashMap<>();
            empty.put("list", new ArrayList<>());
            return ResponseEntity.ok(empty);
        }

        // 是自己，正常返回喜欢的商品列表
        List<GoodsEntity> list = likesService.getLikedGoods(userId); // 你需要实现这个方法

        Map<String, Object> body = new HashMap<>();
        body.put("list", list);
        return ResponseEntity.ok(body);
    }

}
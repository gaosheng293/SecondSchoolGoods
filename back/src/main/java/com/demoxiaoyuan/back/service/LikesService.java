package com.demoxiaoyuan.back.service;

import com.demoxiaoyuan.back.entity.GoodsEntity; // 假设你有 GoodsEntity
import com.demoxiaoyuan.back.entity.LikesEntity;
import com.demoxiaoyuan.back.repository.GoodsRepository; // 假设你有 GoodsRepository
import com.demoxiaoyuan.back.repository.LikesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LikesService {

    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private GoodsRepository goodsRepository; // 用于更新 likeCount

    @Transactional
    public boolean toggleLike(Long userId, Long goodsId) {
        if (likesRepository.existsByUserIdAndGoodsId(userId, goodsId)) {
            // 取消喜欢
            likesRepository.deleteByUserIdAndGoodsId(userId, goodsId);
            updateLikeCount(goodsId, -1);
            return false; // 返回 false 表示已取消
        } else {
            // 添加喜欢
            LikesEntity like = new LikesEntity();
            like.setUserId(userId);
            like.setGoodsId(goodsId);
            like.setCreatedAt(Instant.now());
            likesRepository.save(like);
            updateLikeCount(goodsId, 1);
            return true; // 返回 true 表示已喜欢
        }
    }

    private void updateLikeCount(Long goodsId, int delta) {
        GoodsEntity goods = goodsRepository.findById(goodsId).orElse(null);
        if (goods != null) {
            goods.setLikeCount((goods.getLikeCount() != null ? goods.getLikeCount() : 0) + delta);
            goodsRepository.save(goods);
        }
    }

    public List<Long> getMyLikes(Long userId) {
        return likesRepository.findByUserId(userId).stream()
                .map(LikesEntity::getGoodsId)
                .collect(Collectors.toList());
    }

    // 统计某人喜欢的数量
    public long countUserLikes(Long userId) {
        return likesRepository.countByUserId(userId);
    }

    // 获取某人喜欢的所有商品（关联查询）
    public List<GoodsEntity> getLikedGoods(Long userId) {
        List<Long> goodsIds = likesRepository.findGoodsIdByUserId(userId);
        if (goodsIds.isEmpty()) return new ArrayList<>();
        return goodsRepository.findAllById(goodsIds);
    }
}
package com.demoxiaoyuan.back.util;

import com.demoxiaoyuan.back.entity.GoodsEntity;
import com.demoxiaoyuan.back.repository.LikesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class LikeUtil {

    @Autowired
    private LikesRepository likesRepository;

    /**
     * 为商品列表批量设置点赞状态（推荐接口使用）
     * @param goodsList 商品列表
     * @param userId 当前用户ID（可以为null表示未登录）
     */
    public void setGoodsLikeStatus(List<GoodsEntity> goodsList, Long userId) {
        if (goodsList == null || goodsList.isEmpty() || userId == null) {
            return;
        }

        // 获取当前用户的所有点赞商品ID
        Set<Long> likedGoodsIds = likesRepository.findByUserId(userId).stream()
                .map(like -> like.getGoodsId())
                .collect(Collectors.toSet());

        // 遍历设置点赞状态
        for (GoodsEntity goods : goodsList) {
            goods.setIsLiked(likedGoodsIds.contains(goods.getId()));
        }
    }

    /**
     * 为单个商品设置点赞状态
     * @param goods 商品
     * @param userId 用户ID
     */
    public void setSingleGoodsLikeStatus(GoodsEntity goods, Long userId) {
        if (goods == null || userId == null) {
            return;
        }

        boolean isLiked = likesRepository.existsByUserIdAndGoodsId(userId, goods.getId());
        goods.setIsLiked(isLiked);
    }
}
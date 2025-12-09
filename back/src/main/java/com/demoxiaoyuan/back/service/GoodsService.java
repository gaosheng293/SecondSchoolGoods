package com.demoxiaoyuan.back.service;


import com.demoxiaoyuan.back.entity.GoodsEntity;
import com.demoxiaoyuan.back.entity.UniversityEntity;
import com.demoxiaoyuan.back.entity.UserEntity;
import com.demoxiaoyuan.back.repository.GoodsRepository;
import com.demoxiaoyuan.back.repository.LikesRepository;
import com.demoxiaoyuan.back.repository.UniversityRepository;
import com.demoxiaoyuan.back.repository.UserRepository;
import com.demoxiaoyuan.back.util.LikeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class GoodsService {

    @Autowired
    private GoodsRepository goodsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UniversityRepository universityRepository; // 学校表

    @Autowired
    private LikeUtil likeUtil;

    @Autowired
    private LikesRepository likesRepository;

    // 获取首页推荐
    public List<GoodsEntity> getRecommendations(String universityId, int page, int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return goodsRepository.findRecommendations(universityId, pageable);
    }

    // 获取分类商品
// GoodsService.java
    public List<GoodsEntity> getByCategory(Integer categoryId, String universityId, Pageable pageable) {
        // 查本校 + 该分类 + 上架的商品
        return goodsRepository.findByCategoryIdAndUniversityId(
                categoryId, universityId, pageable);
    }

    // 获取详情
    // 商品详情：带卖家信息
    public GoodsEntity getDetail(Long id) {
        Optional<GoodsEntity> optional = goodsRepository.findById(id);
        if (!optional.isPresent() || optional.get().getStatus() != 1) {
            return null;
        }

        GoodsEntity g = optional.get();
        g.setViewCount(g.getViewCount() + 1);
        goodsRepository.save(g); // 浏览数+1

        // 查卖家信息
        UserEntity seller = userRepository.findById(g.getUserId()).orElse(null);
        if (seller != null) {
            g.setNickname(seller.getNickname());
            g.setAvatar(seller.getAvatar());
        }

        // 查学校名（你可以用一个 Map 缓存，这里简单查）
        UniversityEntity univ = universityRepository.findById(g.getUniversityId()).orElse(null);
        if (univ != null) {
            g.setUniversityName(univ.getName());
        }

        return g;
    }
    /**
     * 获取首页推荐（带点赞状态）
     */
    public List<GoodsEntity> getRecommendationsWithLike(String universityId, int page, int size, Long userId) {
        Pageable pageable = PageRequest.of(page - 1, size);
        List<GoodsEntity> list = goodsRepository.findRecommendations(universityId, pageable);

        // 设置点赞状态
        likeUtil.setGoodsLikeStatus(list, userId);

        return list;
    }
    /**
     * 获取商品详情（带点赞状态）
     */
    public GoodsEntity getDetailWithLike(Long id, Long userId) {
        GoodsEntity goods = getDetail(id);
        if (goods != null && userId != null) {
            boolean isLiked = likesRepository.existsByUserIdAndGoodsId(userId, id);
            goods.setIsLiked(isLiked);
        }
        return goods;
    }
}
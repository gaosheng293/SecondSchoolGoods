package com.demoxiaoyuan.back.repository;


import com.demoxiaoyuan.back.entity.GoodsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface GoodsRepository extends JpaRepository<GoodsEntity, Long> {

    // 获取首页推荐（按点赞降序，同大学）
    @Query("SELECT g FROM GoodsEntity g WHERE g.universityId = :universityId AND g.status = 1 ORDER BY g.likeCount DESC")
    List<GoodsEntity> findRecommendations(@Param("universityId") String universityId, org.springframework.data.domain.Pageable pageable);

    // 按分类获取商品
    @Query("SELECT g FROM GoodsEntity g " +
            "WHERE g.categoryId = :categoryId " +
            "AND g.universityId = :universityId " +
            "AND g.status = 1 " +
            "ORDER BY g.createdAt DESC")
    List<GoodsEntity> findByCategoryIdAndUniversityId(
            @Param("categoryId") Integer categoryId,
            @Param("universityId") String universityId,
            Pageable pageable);

    @Query("SELECT g FROM GoodsEntity g WHERE g.userId = :userId AND g.status = 1 ORDER BY g.createdAt DESC")
    List<GoodsEntity> findByUserIdOrderByCreatedAtDesc(@Param("userId") Long userId);

    long countByUserId(Long userId);

    List<GoodsEntity> findByUserIdAndStatusOrderByCreatedAtDesc(Long userId, Integer status);

    long countByUserIdAndStatus(Long userId, Integer status);



    @Query("SELECT g FROM GoodsEntity g " +
            "WHERE g.status = 1 " +
            "AND g.universityId = :universityId " +
            "AND (g.title LIKE CONCAT('%', :keyword, '%') " +
            "     OR g.description LIKE CONCAT('%', :keyword, '%')) " +
            "ORDER BY g.createdAt DESC")
    Page<GoodsEntity> searchGoods(
            @Param("keyword") String keyword,
            @Param("universityId") String universityId,
            Pageable pageable);

}
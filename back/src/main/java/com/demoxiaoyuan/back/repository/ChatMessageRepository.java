package com.demoxiaoyuan.back.repository;

import com.demoxiaoyuan.back.entity.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
//import org.springframework.stereotype.Repository;
//
//@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {

    @Query("SELECT m FROM ChatMessage m WHERE " +
            "(m.fromUserId = :userId AND m.toUserId = :friendId) OR " +
            "(m.fromUserId = :friendId AND m.toUserId = :userId) " +
            "ORDER BY m.createTime DESC")
    List<ChatMessage> findHistory(@Param("userId") Long userId,
                                  @Param("friendId") Long friendId,
                                  org.springframework.data.domain.Pageable pageable);

    @Modifying
    @Transactional
    @Query("UPDATE ChatMessage m SET m.status = 1 WHERE m.fromUserId = :fromId AND m.toUserId = :toId AND m.status = 0")
    int markAsRead(@Param("fromId") Long fromId, @Param("toId") Long toId);

    // ChatMessageRepository 加这个原生查询
// ChatMessageRepository.java 加入这个方法（直接复制粘贴）

// ChatMessageRepository.java 直接加这个方法

    @Query(value =
            "SELECT DISTINCT " +
                    "  CASE WHEN m.from_user_id = ?1 THEN m.to_user_id ELSE m.from_user_id END as friendId, " +
                    "  u.nickname, " +
                    "  u.avatar, " +
                    "  m.content as lastMessage, " +
                    "  m.create_time as lastTime " +
                    "FROM chat_message m " +
                    "JOIN user u ON u.id = CASE WHEN m.from_user_id = ?1 THEN m.to_user_id ELSE m.from_user_id END " +
                    "WHERE m.from_user_id = ?1 OR m.to_user_id = ?1 " +
                    "ORDER BY m.create_time DESC " +
                    "LIMIT 50", nativeQuery = true)
    List<Object[]> findLatestConversations(Long userId);

    @Query("SELECT COUNT(*) FROM ChatMessage m WHERE m.toUserId = ?1 AND m.fromUserId = ?2 AND m.status = 0")
    int countUnread(Long userId, Long fromUserId);
}
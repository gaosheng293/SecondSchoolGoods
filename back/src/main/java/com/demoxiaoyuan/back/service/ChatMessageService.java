package com.demoxiaoyuan.back.service;

import com.demoxiaoyuan.back.entity.ChatMessage;
import com.demoxiaoyuan.back.repository.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ChatMessageService{

    @Autowired
    private ChatMessageRepository messageRepository;

    @Transactional
    public ChatMessage save(ChatMessage message) {
        return messageRepository.save(message);
    }

    public List<ChatMessage> getHistory(Long userId, Long friendId, int page, int size) {
        PageRequest pageable = PageRequest.of(page - 1, size, Sort.by("createTime").descending());
        return messageRepository.findHistory(userId, friendId, pageable);
    }

    @Transactional
    public void markAsRead(Long fromUserId, Long toUserId) {
        messageRepository.markAsRead(fromUserId, toUserId);
    }
}
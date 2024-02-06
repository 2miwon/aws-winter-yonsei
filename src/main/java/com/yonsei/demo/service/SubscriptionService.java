package com.yonsei.demo.service;


import com.yonsei.demo.dto.KeywordDto;
import com.yonsei.demo.entity.Keyword;
import com.yonsei.demo.entity.Subscription;
import com.yonsei.demo.entity.User;
import com.yonsei.demo.repository.KeywordRepository;
import com.yonsei.demo.repository.SubscriptionRepository;
import com.yonsei.demo.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class SubscriptionService {

    private final UserRepository userRepository;
    private final KeywordRepository keywordRepository;
    private final SubscriptionRepository subscriptionRepository;

    public SubscriptionService(UserRepository userRepository, KeywordRepository keywordRepository, SubscriptionRepository subscriptionRepository) {
        this.userRepository = userRepository;
        this.keywordRepository = keywordRepository;
        this.subscriptionRepository = subscriptionRepository;
    }

    @Transactional
    public KeywordDto subscribe(String userEmail, String keywordValue) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        Keyword keyword = keywordRepository.findByValue(keywordValue)
                .orElseGet(() -> {
                    Keyword newKeyword = new Keyword(keywordValue);
                    return keywordRepository.save(newKeyword);
                });

        Optional<Subscription> existingSubscription = subscriptionRepository.findByUserAndKeyword(user, keyword);
        if (existingSubscription.isPresent()) {
            throw new IllegalStateException("Subscription already exists");
        }

        Subscription subscription = new Subscription(user, keyword);
        subscriptionRepository.save(subscription);
        return keyword.toDto();
    }
    @Transactional
    public String unsubscribe(String userEmail, Long keywordId) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        Keyword keyword = keywordRepository.findById(keywordId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid keyword Value"));
        Subscription subscription = subscriptionRepository.findByUserAndKeyword(user, keyword)
                .orElseThrow(() -> new IllegalArgumentException("Subscription not found"));

        subscriptionRepository.delete(subscription);

        return "Unsubscribed successfully";

    }
    @Transactional
    public List<KeywordDto> subscriptions(String userEmail) {
        Long userId = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"))
                .getId();
        List<Keyword> keywords = subscriptionRepository.findAllKeywordsByUserId(userId)
                .orElseThrow(() -> new IllegalArgumentException("Subscription not found"));

        return keywords.stream()
                .map(keyword -> new KeywordDto(keyword.getId(), keyword.getValue()))
                .collect(Collectors.toList());
    }
}

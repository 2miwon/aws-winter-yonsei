package com.yonsei.demo.repository;

import com.yonsei.demo.entity.Keyword;
import com.yonsei.demo.entity.Opinion;
import com.yonsei.demo.entity.Subscription;
import com.yonsei.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface OpinionRepository extends JpaRepository<Opinion, Long> {
//    Optional<Subscription> findByUserAndKeyword(User user, Keyword keyword);
//
//    @Query("SELECT s.user FROM Subscription s WHERE s.keyword.id = :keywordId")
//    Optional<List<User>> findAllUsersByKeyword(Long keywordId);
//
    @Query("SELECT o FROM Opinion o WHERE o.bills.bill_id = :billsId")
    Optional<List<Opinion>> findAllByBillsId(@Param("billsId") Long billsId);
}

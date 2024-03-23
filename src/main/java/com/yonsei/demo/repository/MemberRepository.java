package com.yonsei.demo.repository;

import com.yonsei.demo.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {

    List<Member> findByDistrictId(Long districtId);
}

package com.yonsei.demo.repository;

import com.yonsei.demo.entity.Party;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PartyRepository extends JpaRepository<Party, Long> {

    Optional<Party> findByName(String name);
}

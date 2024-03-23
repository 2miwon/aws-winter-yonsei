package com.yonsei.demo.repository;

import com.yonsei.demo.entity.District;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DistrictRepository extends JpaRepository<District, Long> {
    List<District> findByRegionId(Long regionId);
    Optional<District> findByName(String name);
}

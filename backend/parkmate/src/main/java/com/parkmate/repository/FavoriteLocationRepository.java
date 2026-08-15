package com.parkmate.repository;

import com.parkmate.entity.FavoriteLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteLocationRepository extends JpaRepository<FavoriteLocation, Long> {
}

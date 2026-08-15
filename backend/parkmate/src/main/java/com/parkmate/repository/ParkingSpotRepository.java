package com.parkmate.repository;

import com.parkmate.entity.ParkingSpot;
import com.parkmate.entity.ParkingSpotStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParkingSpotRepository
        extends JpaRepository<ParkingSpot, Long> {

    List<ParkingSpot> findByStatus(
            ParkingSpotStatus status
    );
}

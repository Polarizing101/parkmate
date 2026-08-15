package com.parkmate.service;

import com.parkmate.entity.ParkingSpot;
import com.parkmate.entity.ParkingSpotStatus;
import com.parkmate.repository.ParkingSpotRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class ParkingSpotScheduler {

    private final ParkingSpotRepository parkingSpotRepository;

    public ParkingSpotScheduler(
            ParkingSpotRepository parkingSpotRepository
    ) {
        this.parkingSpotRepository =
                parkingSpotRepository;
    }

    @Scheduled(fixedRate = 60000)
    public void expireOldSpots() {

        List<ParkingSpot> spots =
                parkingSpotRepository.findAll();

        for (ParkingSpot spot : spots) {

            if (spot.getCreatedAt() == null) {
                continue;
            }

            boolean expired =
                    spot.getCreatedAt()
                            .plusMinutes(30)
                            .isBefore(
                                    LocalDateTime.now()
                            );

            if (expired &&
                    spot.getStatus() ==
                            ParkingSpotStatus.AVAILABLE) {

                spot.setStatus(
                        ParkingSpotStatus.EXPIRED
                );

                parkingSpotRepository.save(
                        spot
                );
            }
        }
    }
}

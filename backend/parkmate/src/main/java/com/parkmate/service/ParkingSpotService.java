package com.parkmate.service;

import com.parkmate.entity.ParkingSpot;
import com.parkmate.exception.ResourceNotFoundException;
import com.parkmate.repository.ParkingSpotRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import com.parkmate.entity.ParkingSpotStatus;


@Service
public class ParkingSpotService {

    private final ParkingSpotRepository parkingSpotRepository;

    public List<ParkingSpot> getAvailableParkingSpots() {

    return parkingSpotRepository.findByStatus(
            ParkingSpotStatus.AVAILABLE
    );
}

    public ParkingSpotService(ParkingSpotRepository parkingSpotRepository) {
        this.parkingSpotRepository = parkingSpotRepository;
    }

    public List<ParkingSpot> getAllParkingSpots() {
        return parkingSpotRepository.findAll();
    }

    public ParkingSpot getParkingSpotById(Long id) {

        return parkingSpotRepository
                .findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Parking spot not found"
                        )
                );
    }

    public ParkingSpot createParkingSpot(ParkingSpot parkingSpot) {
        return parkingSpotRepository.save(parkingSpot);
    }
    public List<ParkingSpot> getNearbyParkingSpots(
        Double latitude,
        Double longitude,
        Double radius
) {

    return parkingSpotRepository
            .findAll()
            .stream()
            .filter(spot -> {

                double distance = Math.sqrt(
                        Math.pow(
                                spot.getLatitude() - latitude,
                                2
                        ) +
                        Math.pow(
                                spot.getLongitude() - longitude,
                                2
                        )
                );

                return distance <= radius;

            })
            .toList();
}

}

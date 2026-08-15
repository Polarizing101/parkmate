package com.parkmate.controller;

import com.parkmate.entity.ParkingSpot;
import com.parkmate.service.ParkingSpotService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parking-spots")
public class ParkingSpotController {

    private final ParkingSpotService parkingSpotService;

    public ParkingSpotController(ParkingSpotService parkingSpotService) {
        this.parkingSpotService = parkingSpotService;
    }

    @GetMapping
    public List<ParkingSpot> getAllParkingSpots() {
        return parkingSpotService.getAllParkingSpots();
    }

    @GetMapping("/available")
    public List<ParkingSpot> getAvailableParkingSpots() {

    return parkingSpotService
            .getAvailableParkingSpots();
}


    @PostMapping
    public ParkingSpot createParkingSpot(@RequestBody ParkingSpot parkingSpot) {
        return parkingSpotService.createParkingSpot(parkingSpot);
    }

    @GetMapping("/{id}")
    public ParkingSpot getParkingSpotById(
        @PathVariable Long id
) {
    return parkingSpotService.getParkingSpotById(id);
}
}

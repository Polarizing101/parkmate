package com.parkmate.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;


@Entity
@Table(name = "parking_spots")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParkingSpot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double latitude;

    private Double longitude;

    private String street;

    @Enumerated(EnumType.STRING)
    private ParkingSpotStatus status;


    @OneToMany(mappedBy = "parkingSpot")
    private List<ParkingReport> reports;
    
}

package com.parkmate.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;


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

    private String status;

    @OneToMany(mappedBy = "parkingSpot")
    private List<ParkingReport> reports;
    
}

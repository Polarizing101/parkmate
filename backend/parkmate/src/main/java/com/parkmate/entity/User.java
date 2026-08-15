package com.parkmate.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;


@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;


    @OneToMany(mappedBy = "user")
    private List<FavoriteLocation> favoriteLocations;

    @OneToMany(mappedBy = "user")
    private List<ParkingReport> parkingReports;
    
}

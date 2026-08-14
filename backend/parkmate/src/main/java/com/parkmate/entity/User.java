package com.parkmate.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;


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

    private String role;

    @OneToMany(mappedBy = "user")
    private List<FavoriteLocation> favoriteLocations;

    @OneToMany(mappedBy = "user")
    private List<ParkingReport> parkingReports;
    
}

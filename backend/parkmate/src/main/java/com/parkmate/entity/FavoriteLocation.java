package com.parkmate.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "favorite_locations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FavoriteLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double latitude;

    private Double longitude;
}

package com.parkmate.controller;

import com.parkmate.entity.FavoriteLocation;
import com.parkmate.service.FavoriteLocationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteLocationController {

    private final FavoriteLocationService favoriteLocationService;

    public FavoriteLocationController(
            FavoriteLocationService favoriteLocationService
    ) {
        this.favoriteLocationService = favoriteLocationService;
    }

    @GetMapping
    public List<FavoriteLocation> getAllFavorites() {
        return favoriteLocationService.getAllFavorites();
    }

    @PostMapping
    public FavoriteLocation addFavorite(
            @RequestBody FavoriteLocation favoriteLocation
    ) {
        return favoriteLocationService.saveFavorite(
                favoriteLocation
        );
    }
}

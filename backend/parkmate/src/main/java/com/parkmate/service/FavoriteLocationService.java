package com.parkmate.service;

import com.parkmate.entity.FavoriteLocation;
import com.parkmate.repository.FavoriteLocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteLocationService {

    private final FavoriteLocationRepository favoriteLocationRepository;

    public FavoriteLocationService(
            FavoriteLocationRepository favoriteLocationRepository
    ) {
        this.favoriteLocationRepository = favoriteLocationRepository;
    }

    public List<FavoriteLocation> getAllFavorites() {
        return favoriteLocationRepository.findAll();
    }

    public FavoriteLocation saveFavorite(
            FavoriteLocation favoriteLocation
    ) {
        return favoriteLocationRepository.save(favoriteLocation);
    }
}

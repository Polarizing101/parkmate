package com.parkmate.service;

import com.parkmate.dto.RegisterRequest;
import com.parkmate.entity.User;
import com.parkmate.entity.UserRole;
import com.parkmate.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(RegisterRequest request) {

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(request.getPassword())
                .role(UserRole.USER)
                .build();

        return userRepository.save(user);
    }
}

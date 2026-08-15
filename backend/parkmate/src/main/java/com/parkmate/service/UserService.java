package com.parkmate.service;

import com.parkmate.dto.RegisterRequest;
import com.parkmate.entity.User;
import com.parkmate.entity.UserRole;
import com.parkmate.repository.UserRepository;
import org.springframework.stereotype.Service;

import org.springframework.security.crypto.password.PasswordEncoder;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public UserService(
        UserRepository userRepository,
        PasswordEncoder passwordEncoder
) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
}

public boolean login(String email, String password) {

    User user = userRepository
            .findByEmail(email)
            .orElse(null);

    if (user == null) {
        return false;
    }

    return passwordEncoder.matches(
            password,
            user.getPassword()
    );
}

    public User register(RegisterRequest request) {

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(UserRole.USER)
                .build();

        return userRepository.save(user);
    }
}

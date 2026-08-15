package com.parkmate.controller;

import com.parkmate.dto.AuthResponse;
import com.parkmate.dto.AuthenticationResponse;
import com.parkmate.dto.LoginRequest;
import com.parkmate.dto.RegisterRequest;
import com.parkmate.entity.User;
import com.parkmate.service.JwtService;
import com.parkmate.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;
    private final JwtService jwtService;

    public AuthController(
            UserService userService,
            JwtService jwtService
    ) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public AuthenticationResponse register(
            @RequestBody RegisterRequest request
    ) {

        User user = userService.register(request);

        return new AuthenticationResponse(
                "User registered successfully: "
                        + user.getUsername()
        );
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request
    ) {

        boolean success = userService.login(
                request.getEmail(),
                request.getPassword()
        );

        if (!success) {
            return new AuthResponse(
                    "INVALID_CREDENTIALS"
            );
        }

        String token =
                jwtService.generateToken(
                        request.getEmail()
                );

        return new AuthResponse(token);
    }
}



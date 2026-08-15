package com.parkmate.controller;

import com.parkmate.dto.AuthenticationResponse;
import com.parkmate.dto.RegisterRequest;
import com.parkmate.entity.User;
import com.parkmate.service.UserService;
import org.springframework.web.bind.annotation.*;

import com.parkmate.dto.LoginRequest;



@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
public AuthenticationResponse login(
        @RequestBody LoginRequest request
) {

    boolean success = userService.login(
            request.getEmail(),
            request.getPassword()
    );

    if (success) {
        return new AuthenticationResponse(
                "Login successful"
        );
    }

    return new AuthenticationResponse(
            "Invalid credentials"
    );
}

}

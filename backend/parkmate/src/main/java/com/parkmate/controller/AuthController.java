package com.parkmate.controller;

import com.parkmate.dto.AuthenticationResponse;
import com.parkmate.dto.RegisterRequest;
import com.parkmate.entity.User;
import com.parkmate.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
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
}

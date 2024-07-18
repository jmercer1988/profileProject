package org.example.vibecheck_livemusicapp.controller;

import org.example.vibecheck_livemusicapp.model.LoginRequest;
import org.example.vibecheck_livemusicapp.model.RegisterRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // Authenticate user
        // For now, just return the username and password received
        return ResponseEntity.ok(loginRequest);
    }

    @PostMapping("/api/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        // Handle registration
        // For now, just return the registration data received
        return ResponseEntity.ok(registerRequest);
    }
}

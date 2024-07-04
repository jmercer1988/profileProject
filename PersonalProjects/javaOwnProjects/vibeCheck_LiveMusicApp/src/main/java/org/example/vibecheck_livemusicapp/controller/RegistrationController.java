package org.example.vibecheck_livemusicapp.controller;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import jakarta.validation.Valid;
import org.example.vibecheck_livemusicapp.dto.RegistrationRequest;
import org.example.vibecheck_livemusicapp.entity.vibeUser;
import org.example.vibecheck_livemusicapp.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/api/register")
@Validated
public class RegistrationController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public RegistrationController(UserService userService, BCryptPasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegistrationRequest registrationRequest) {
        try {
            // Validate the data (handled by @Valid annotation on the request body)

            // Create a new user object
            vibeUser newUser = new vibeUser();
            newUser.setUsername(registrationRequest.getUsername());
            newUser.setEmail(registrationRequest.getEmail());
           // newUser.setPassword(registrationRequest.getPassword());
            // Hash the password securely and set it in the user object
            String hashedPassword = passwordEncoder.encode(registrationRequest.getPassword());
            newUser.setPassword(hashedPassword);

            // Save the user to the database using your UserService
            userService.createUser(newUser);

            // Return a success response
            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            // Handle any exceptions that may occur during registration
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed");
        }
    }
}

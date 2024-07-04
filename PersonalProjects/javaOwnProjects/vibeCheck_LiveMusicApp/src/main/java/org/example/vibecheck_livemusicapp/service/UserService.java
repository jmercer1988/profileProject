package org.example.vibecheck_livemusicapp.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.dao.DataIntegrityViolationException;
import org.example.vibecheck_livemusicapp.entity.vibeUser;
import org.example.vibecheck_livemusicapp.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    public vibeUser createUser(vibeUser user) {
        // Validate email format
        if (!isValidEmail(user.getEmail())) {
            throw new IllegalArgumentException("Invalid email format");
        }

        // Check if username or email already exists
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new DataIntegrityViolationException("Username already exists");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new DataIntegrityViolationException("Email already exists");
        }

        // Encrypt (hash) the password
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);

        try {
            // Save the user with the hashed password to the repository
            return userRepository.save(user);
        } catch (DataIntegrityViolationException e) {
            // Handle possible data integrity violations, such as duplicate entries
            throw new IllegalStateException("Failed to create user due to data integrity violation", e);
        }
    }

    // Utility method to validate email format
    private boolean isValidEmail(String email) {
        // Use a regular expression or a dedicated library for email validation
        // Example simple regex pattern (consider using a more robust approach in production):
        return email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }

    public vibeUser getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found by id: " + id));
    }

    public boolean checkPassword(String enteredPassword, String storedHash) {
        // Use the autowired password encoder for password comparison
        return passwordEncoder.matches(enteredPassword, storedHash);
    }

    public vibeUser updateUser(Long id, vibeUser userDetails) {
        vibeUser existingUser = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));

        // Update username and email after validating them
        if (userDetails.getUsername() != null && !userDetails.getUsername().isEmpty()) {
            if (userRepository.existsByUsername(userDetails.getUsername())) {
                throw new DataIntegrityViolationException("Username already exists");
            }
            existingUser.setUsername(userDetails.getUsername());
        }
        if (userDetails.getEmail() != null && !userDetails.getEmail().isEmpty()) {
            if (userRepository.existsByEmail(userDetails.getEmail())) {
                throw new DataIntegrityViolationException("Email already exists");
            }
            // Add here additional email validation if needed
            existingUser.setEmail(userDetails.getEmail());
        }

        // Password validations and hashing
        if (userDetails.getPassword() != null && !userDetails.getPassword().isEmpty()) {
            // Ensure the new password meets your complexity requirements
            // Hash the new password before saving
            String hashedPassword = passwordEncoder.encode(userDetails.getPassword());
            existingUser.setPassword(hashedPassword);
        }

        // Save the updated user back to the database
        return userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {
    }

    //Other methods like findById, deleteUser, updateUser can be added.
}

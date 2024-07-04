package org.example.vibecheck_livemusicapp.model;

public class RegisterRequest {
    private String username;
    private String password;
    private String email;
    // Add other registration fields as needed

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Additional getters and setters for other fields
}

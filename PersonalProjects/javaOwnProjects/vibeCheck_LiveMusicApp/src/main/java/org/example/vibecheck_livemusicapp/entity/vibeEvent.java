package org.example.vibecheck_livemusicapp.entity;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class vibeEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private LocalDateTime dateTime;
    private String venue;
    private String description;

    public void setTitle(String title) {
        this.title = title;
    }

    // Getter method for title
    public String getTitle() {
        return title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Getter method for description
    public String getDescription() {
        return description;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getVenue() {
        return venue;
    }

    public long getId(){
        return id;
    }

    @ManyToOne
    private vibeBand vibeband;

    // Standard getters and setters
}
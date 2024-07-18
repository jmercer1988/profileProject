package org.example.vibecheck_livemusicapp.entity;

import jakarta.persistence.*;

@Entity
public class vibeBand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String bandName;
    private String bandBio;
    private String bandGenre;
    private String bandHomeTown;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setName(String name) {
        this.bandName = name;
    }

    public String getName() {
        return bandName;
    }

    public void setGenre(String genre) {
        this.bandGenre = genre;
    }

    public String getGenre() {
        return bandGenre;
    }

    public String getHometown() {
        return bandHomeTown;
    }

    public void setHometown(String hometown) {
        this.bandHomeTown = hometown;
    }

    public void setBio(String bio) {
        this.bandBio = bio;
    }

    public String getBio() {
        return bandBio;
    }

    @OneToOne
    private vibeUser user;
}

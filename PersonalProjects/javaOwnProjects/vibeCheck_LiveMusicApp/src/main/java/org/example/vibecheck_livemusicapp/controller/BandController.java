package org.example.vibecheck_livemusicapp.controller;
import org.example.vibecheck_livemusicapp.entity.vibeBand;
import org.example.vibecheck_livemusicapp.exceptions.ResourceNotFoundException;
import org.example.vibecheck_livemusicapp.exceptions.ValidationException;
import org.example.vibecheck_livemusicapp.service.BandService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bands")
public class BandController {

    private final BandService bandService;

    public BandController(BandService bandService) {
        this.bandService = bandService;
    }

    @PostMapping
    public ResponseEntity<vibeBand> createBand(@RequestBody vibeBand band) {
        if(band == null){
            throw new ValidationException("Validation failed while creating new band.");
        }

        vibeBand createdBand = bandService.createBand(band);
        return ResponseEntity.ok(createdBand);
    }

    @GetMapping("/bands/{id}")
    public ResponseEntity<vibeBand> getBandById(@PathVariable Long id) {
        vibeBand band = bandService.getBandById(id);
        if (band == null) {
            throw new ResourceNotFoundException("Band not found with id: " + id);
        }
        return ResponseEntity.ok(band);
    }

    @PutMapping("/{id}")
    public ResponseEntity<vibeBand> updateBand(@PathVariable Long id, @RequestBody vibeBand bandDetails) {
        vibeBand updatedBand = bandService.updateBand(id, bandDetails);
        return ResponseEntity.ok(updatedBand);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBand(@PathVariable Long id) {
        bandService.deleteBand(id);
        return ResponseEntity.noContent().build();
    }

    // Additional endpoints as needed
}
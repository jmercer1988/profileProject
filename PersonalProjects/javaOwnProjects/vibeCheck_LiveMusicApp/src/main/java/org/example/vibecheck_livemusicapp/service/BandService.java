package org.example.vibecheck_livemusicapp.service;

import jakarta.persistence.EntityNotFoundException;
import org.example.vibecheck_livemusicapp.entity.vibeBand;
import org.example.vibecheck_livemusicapp.repository.BandRepository;
import org.springframework.stereotype.Service;

@Service
public class BandService {

    private final BandRepository bandRepository;

    public BandService(BandRepository bandRepository) {
        this.bandRepository = bandRepository;
    }


    //add logic to check for validation of inputs etc
    public vibeBand createBand(vibeBand band) {
        return bandRepository.save(band);
    }

    public vibeBand getBandById(Long id) {
        return bandRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Band not found with id " + id));
    }

    public vibeBand updateBand(Long id, vibeBand bandDetails) {
        // First, retrieve the existing band by id
        vibeBand existingBand = bandRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Band not found with id: " + id));

        // Update the existing band's properties with bandDetails
        // Here, you can set each property that you allow to be updated
        existingBand.setId(bandDetails.getId());
        existingBand.setName(bandDetails.getName());
        existingBand.setGenre(bandDetails.getGenre());
        existingBand.setBio(bandDetails.getBio());
        existingBand.setHometown(bandDetails.getHometown());
        // ... set other updatable properties

        // Save the updated band back to the database
        return bandRepository.save(existingBand);
    }

    public void deleteBand(Long id) {
        // Check if a band with the given id exists
        boolean exists = bandRepository.existsById(id);
        if (!exists) {
            throw new EntityNotFoundException("Band not found with id: " + id);
        }

        // If it exists, delete the band
        bandRepository.deleteById(id);
    }


    //other methods below ie: findById, findBandName, deleteBand, updateBand
}

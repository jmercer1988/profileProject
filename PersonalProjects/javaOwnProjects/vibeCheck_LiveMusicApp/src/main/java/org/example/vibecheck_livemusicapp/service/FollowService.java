package org.example.vibecheck_livemusicapp.service;

import jakarta.persistence.EntityNotFoundException;
import org.example.vibecheck_livemusicapp.entity.vibeBand;
import org.example.vibecheck_livemusicapp.entity.vibeFollow;
import org.example.vibecheck_livemusicapp.repository.FollowRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FollowService {

    private final FollowRepository followRepository;

    public FollowService(FollowRepository followRepository) {
        this.followRepository = followRepository;
    }


//    public List<vibeBand> getFollowedBands(Long userId) {
//        return followRepository.findBandsByUserId(userId);
//    }

    public vibeFollow followBand(vibeFollow follow) {
        // Additional logic for following a band can be added here
        return followRepository.save(follow);
    }

    public void unfollowBand(Long id) {
        boolean exists = followRepository.existsById(id);
        if (!exists) {
            throw new EntityNotFoundException("Follow relationship not found with id: " + id);
        }
        followRepository.deleteById(id);
    }
    // Other methods like unfollowBand, getFollowedBands by a user, etc.
}

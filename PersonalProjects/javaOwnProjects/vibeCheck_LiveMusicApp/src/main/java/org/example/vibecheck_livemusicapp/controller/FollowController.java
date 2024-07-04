package org.example.vibecheck_livemusicapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.example.vibecheck_livemusicapp.entity.vibeFollow;
import org.example.vibecheck_livemusicapp.service.FollowService;

@RestController
@RequestMapping("/api/follows")
public class FollowController {

    private final FollowService followService;

    public FollowController(FollowService followService) {
        this.followService = followService;
    }

    @PostMapping
    public ResponseEntity<vibeFollow> followBand(@RequestBody vibeFollow follow) {
        vibeFollow createdFollow = followService.followBand(follow);
        return ResponseEntity.ok(createdFollow);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> unfollowBand(@PathVariable Long id) {
        followService.unfollowBand(id);
        return ResponseEntity.noContent().build();
    }

    // Additional endpoints as needed
}

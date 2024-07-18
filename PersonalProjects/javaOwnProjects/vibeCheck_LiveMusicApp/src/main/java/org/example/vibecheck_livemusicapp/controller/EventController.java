package org.example.vibecheck_livemusicapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.example.vibecheck_livemusicapp.entity.vibeEvent;
import org.example.vibecheck_livemusicapp.service.EventService;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    public ResponseEntity<vibeEvent> createEvent(@RequestBody vibeEvent event) {
        vibeEvent createdEvent = eventService.createEvent(event);
        return ResponseEntity.ok(createdEvent);
    }

    @GetMapping("/{id}")
    public ResponseEntity<vibeEvent> getEventById(@PathVariable Long id) {
        vibeEvent event = eventService.getEventById(id);
        return ResponseEntity.ok(event);
    }

    @PutMapping("/{id}")
    public ResponseEntity<vibeEvent> updateEvent(@PathVariable Long id, @RequestBody vibeEvent eventDetails) {
        vibeEvent updatedEvent = eventService.updateEvent(id, eventDetails);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }

    // Additional endpoints as needed
}

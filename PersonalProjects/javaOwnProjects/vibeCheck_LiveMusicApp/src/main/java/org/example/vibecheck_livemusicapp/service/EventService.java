package org.example.vibecheck_livemusicapp.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.example.vibecheck_livemusicapp.entity.vibeEvent;
import org.example.vibecheck_livemusicapp.repository.EventRepository;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }
    public vibeEvent createEvent(vibeEvent event) {
        // Additional logic before saving an event can be added here
        return eventRepository.save(event);
    }

    public vibeEvent getEventById(Long id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Event is not found with id: " + id));
    }

    //Update Properties of existing event
    public vibeEvent updateEvent(Long id, vibeEvent eventDetails) {
        vibeEvent existingEvent = eventRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Event is not found with id: " + id));

        existingEvent.setTitle(eventDetails.getTitle());
        existingEvent.setDescription(eventDetails.getDescription());
        existingEvent.setDateTime(eventDetails.getDateTime());
        return eventRepository.save(existingEvent);
    }

    public void deleteEvent(Long id) {
        boolean exists = eventRepository.existsById(id);
        if(!exists) {
            throw new EntityNotFoundException("Event is not found by id: " + id);
        }
        eventRepository.deleteById(id);
    }

}

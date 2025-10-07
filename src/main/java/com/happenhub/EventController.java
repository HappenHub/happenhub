package com.happenhub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private SessionManager sessionManager;

    @Autowired
    private JwtUtil jwtUtil;


    // Add event
    @PostMapping("/add")
    public Object addEvent(@RequestHeader("Authorization") String authHeader,
                           @RequestBody Event event) {
        try {
            String token = authHeader.replace("Bearer ", "");
            if (!jwtUtil.validateToken(token)) {
                return "❌ Invalid or expired token!";
            }

            String organizerEmail = jwtUtil.extractEmail(token);
            event.setOrganizerEmail(organizerEmail);
            return eventRepository.save(event);

        } catch (Exception e) {
            return "❌ Authorization header missing or invalid!";
        }
    }


    // Get all events
    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // Get events by organizer email
    @GetMapping("/organizer/{email}")
    public List<Event> getEventsByOrganizer(@PathVariable String email) {
        return eventRepository.findByOrganizerEmail(email);
    }

    // Update event
    @PutMapping("/update/{id}")
    public String updateEvent(@PathVariable String id, @RequestBody Event updatedEvent) {
        Optional<Event> eventOpt = eventRepository.findById(id);
        if (eventOpt.isPresent()) {
            Event event = eventOpt.get();
            event.setTitle(updatedEvent.getTitle());
            event.setLocation(updatedEvent.getLocation());
            event.setDate(updatedEvent.getDate());
            eventRepository.save(event);
            return "✅ Event updated successfully!";
        } else {
            return "❌ Event not found!";
        }
    }

    // Delete event
    @DeleteMapping("/delete/{id}")
    public String deleteEvent(@PathVariable String id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
            return "✅ Event deleted successfully!";
        }
        return "❌ Event not found!";
    }

    // Search events by keyword (title)
    @GetMapping("/search/{keyword}")
    public List<Event> searchEvents(@PathVariable String keyword) {
        return eventRepository.findByTitleContainingIgnoreCase(keyword);
    }

    // Filter events by location
    @GetMapping("/location/{location}")
    public List<Event> getEventsByLocation(@PathVariable String location) {
        return eventRepository.findByLocationIgnoreCase(location);
    }

}


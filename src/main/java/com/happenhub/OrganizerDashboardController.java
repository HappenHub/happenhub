package com.happenhub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/organizers")
public class OrganizerDashboardController {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private BookingRepository bookingRepository;

    // Get summary stats for an organizer
    @GetMapping("/stats/{email}")
    public Map<String, Object> getOrganizerStats(@PathVariable String email) {
        Map<String, Object> stats = new HashMap<>();

        // 1️⃣ All events by this organizer
        List<Event> events = eventRepository.findByOrganizerEmail(email);
        stats.put("totalEvents", events.size());

        // 2️⃣ All bookings linked to these events
        List<Booking> allBookings = bookingRepository.findAll();
        List<Booking> organizerBookings = allBookings.stream()
                .filter(b -> b.getOrganizerEmail().equals(email))
                .collect(Collectors.toList());
        stats.put("totalBookings", organizerBookings.size());

        // 3️⃣ Find which event has the most bookings
        Map<String, Long> eventBookingCount = organizerBookings.stream()
                .collect(Collectors.groupingBy(Booking::getEventTitle, Collectors.counting()));

        if (!eventBookingCount.isEmpty()) {
            String topEvent = Collections.max(eventBookingCount.entrySet(), Map.Entry.comparingByValue()).getKey();
            stats.put("topEvent", topEvent);
            stats.put("topEventBookings", eventBookingCount.get(topEvent));
        } else {
            stats.put("topEvent", "No bookings yet");
            stats.put("topEventBookings", 0);
        }

        return stats;
    }

    // Get all bookings for an organizer’s events
    @GetMapping("/bookings/{email}")
    public List<Booking> getAllOrganizerBookings(@PathVariable String email) {
        return bookingRepository.findAll().stream()
                .filter(b -> b.getOrganizerEmail().equals(email))
                .collect(Collectors.toList());
    }
}

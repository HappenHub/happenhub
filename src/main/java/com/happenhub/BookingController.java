package com.happenhub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private JwtUtil jwtUtil;


    // Add a booking
    @PostMapping("/add")
    public String addBooking(@RequestHeader("Authorization") String authHeader,
                             @RequestBody Booking booking) {
        try {
            String token = authHeader.replace("Bearer ", "");
            if (!jwtUtil.validateToken(token)) {
                return "❌ Invalid or expired token!";
            }

            String userEmail = jwtUtil.extractEmail(token);
            booking.setUserEmail(userEmail); // Auto-link to logged-in user

            if (!eventRepository.existsById(booking.getEventId())) {
                return "❌ Event not found!";
            }

            bookingRepository.save(booking);
            return "✅ Booking confirmed for event: " + booking.getEventTitle();

        } catch (Exception e) {
            return "❌ Authorization header missing or invalid!";
        }
    }


    // Get bookings by user email
    @GetMapping("/user/{email}")
    public List<Booking> getBookingsByUser(@PathVariable String email) {
        return bookingRepository.findByUserEmail(email);
    }

    // Get bookings by event ID
    @GetMapping("/event/{eventId}")
    public List<Booking> getBookingsByEvent(@PathVariable String eventId) {
        return bookingRepository.findByEventId(eventId);
    }
}

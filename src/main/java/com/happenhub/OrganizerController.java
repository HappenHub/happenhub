package com.happenhub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/organizers")
public class OrganizerController {

    @Autowired
    private OrganizerRepository organizerRepository;

    @Autowired
    private JwtUtil jwtUtil;

    // Signup
    @PostMapping("/signup")
    public String signup(@RequestBody Organizer organizer) {
        if (organizerRepository.findByEmail(organizer.getEmail()) != null) {
            return "❌ Organizer already exists!";
        }
        organizerRepository.save(organizer);
        return "✅ Organizer registered successfully!";
    }

    // Login -> Return JWT Token
    @PostMapping("/login")
    public String login(@RequestBody Organizer organizer) {
        Organizer existing = organizerRepository.findByEmail(organizer.getEmail());
        if (existing == null) {
            return "❌ Organizer not found!";
        }
        if (!existing.getPassword().equals(organizer.getPassword())) {
            return "❌ Incorrect password!";
        }

        String token = jwtUtil.generateToken(existing.getEmail());
        return "✅ Login successful!\nYour token: " + token;
    }
}


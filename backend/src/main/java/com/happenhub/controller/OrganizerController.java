package com.happenhub.controller;

import com.happenhub.model.Organizer;
import com.happenhub.repository.OrganizerRepository;
import com.happenhub.util.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/organizers")
public class OrganizerController {

    @Autowired
    private OrganizerRepository organizerRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Signup
    @PostMapping("/signup")
    public String signup(@RequestBody Organizer organizer) {
        if (organizerRepository.findByEmail(organizer.getEmail()) != null) {
            return "❌ Organizer already exists!";
        }
        // Encode password before saving
        organizer.setPassword(passwordEncoder.encode(organizer.getPassword()));
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
        if (!passwordEncoder.matches(organizer.getPassword(), existing.getPassword())) {
            return "❌ Incorrect password!";
        }

        String token = jwtUtil.generateToken(existing.getEmail());
        return "✅ Login successful! Your token: " + token;
    }
}


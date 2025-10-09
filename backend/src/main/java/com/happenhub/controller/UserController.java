package com.happenhub.controller;

import com.happenhub.model.User;
import com.happenhub.repository.UserRepository;
import com.happenhub.util.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "❌ Email already exists!"));
        }
        // Encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok()
                .body("✅ User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User existing = userRepository.findByEmail(user.getEmail());
        if (existing == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", "No account found with this email."));
        }
        if (!passwordEncoder.matches(user.getPassword(), existing.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", "Incorrect password."));
        }

        String token = jwtUtil.generateToken(existing.getEmail());
        
        // Create a sanitized user object without sensitive information
        Map<String, Object> userResponse = Map.of(
            "id", existing.getId(),
            "email", existing.getEmail(),
            "name", existing.getName() != null ? existing.getName() : existing.getEmail(),
            "location", existing.getLocation() != null ? existing.getLocation() : "",
            "role", "USER"
        );
        
        return ResponseEntity.ok(Map.of(
            "user", userResponse,
            "token", token,
            "message", "Login successful!"
        ));
    }
}

package com.happenhub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    // Signup
    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "❌ Email already exists!";
        }
        userRepository.save(user);
        return "✅ User registered successfully!";
    }

    // Login -> Return JWT Token
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User existing = userRepository.findByEmail(user.getEmail());
        if (existing == null) {
            return "❌ No account found with this email.";
        }
        if (!existing.getPassword().equals(user.getPassword())) {
            return "❌ Incorrect password.";
        }

        String token = jwtUtil.generateToken(existing.getEmail());
        return "✅ Login successful!\nYour token: " + token;
    }
}

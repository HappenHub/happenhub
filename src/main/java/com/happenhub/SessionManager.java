package com.happenhub;

import org.springframework.stereotype.Component;

@Component
public class SessionManager {
    private String currentOrganizerEmail;

    public String getCurrentOrganizerEmail() {
        return currentOrganizerEmail;
    }

    public void setCurrentOrganizerEmail(String email) {
        this.currentOrganizerEmail = email;
    }
}

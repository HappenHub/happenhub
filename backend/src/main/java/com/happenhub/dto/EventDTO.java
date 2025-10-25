package com.happenhub.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class EventDTO {
    private String id;
    
    @NotBlank(message = "Title is required")
    private String title;
    
    @NotBlank(message = "Location is required")
    private String location;
    
    @NotNull(message = "Date is required")
    private LocalDateTime date;
    
    private String organizerEmail;
    
    // Constructors
    public EventDTO() {}
    
    public EventDTO(String title, String location, LocalDateTime date, String organizerEmail) {
        this.title = title;
        this.location = location;
        this.date = date;
        this.organizerEmail = organizerEmail;
    }
    
    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public LocalDateTime getDate() { return date; }
    public void setDate(LocalDateTime date) { this.date = date; }
    
    public String getOrganizerEmail() { return organizerEmail; }
    public void setOrganizerEmail(String organizerEmail) { this.organizerEmail = organizerEmail; }
}
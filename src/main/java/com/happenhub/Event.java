package com.happenhub;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "events")
public class Event {

    @Id
    private String id;
    private String title;
    private String location;
    private String date;
    private String organizerEmail; // To track who posted it

    public Event() {}

    public Event(String title, String location, String date, String organizerEmail) {
        this.title = title;
        this.location = location;
        this.date = date;
        this.organizerEmail = organizerEmail;
    }

    // Getters & Setters
    public String getId() { return id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getOrganizerEmail() { return organizerEmail; }
    public void setOrganizerEmail(String organizerEmail) { this.organizerEmail = organizerEmail; }
}

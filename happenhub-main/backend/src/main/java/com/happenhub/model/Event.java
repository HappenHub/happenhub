package com.happenhub.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "events")
public class Event {

    @Id
    private String id;
    private String title;
    private String description;
    private String date;
    private String location;
    private int capacity;
    private double price;
    private String mood;
    private String organizerId;
    private String organizerEmail;
    private int availableTickets;
    private String imageUrl;
    private String[] tags;

    public Event() {}

    public Event(String title, String description, String date, String location, int capacity, double price, String mood, String organizerId, String organizerEmail) {
        this(title, description, date, location, capacity, price, mood, organizerId, organizerEmail, null, null);
    }

    public Event(String title, String description, String date, String location, int capacity, double price, String mood, String organizerId, String organizerEmail, String imageUrl, String[] tags) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.capacity = capacity;
        this.price = price;
        this.mood = mood;
        this.organizerId = organizerId;
        this.organizerEmail = organizerEmail;
        this.availableTickets = capacity;
        this.imageUrl = imageUrl != null ? imageUrl : "https://source.unsplash.com/random/800x600/?event," + mood.replaceAll("[^a-zA-Z]", "");
        this.tags = tags != null ? tags : new String[0];
    }

    // Getters & Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public int getCapacity() { return capacity; }
    public void setCapacity(int capacity) { this.capacity = capacity; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getMood() { return mood; }
    public void setMood(String mood) { this.mood = mood; }

    public String getOrganizerId() { return organizerId; }
    public void setOrganizerId(String organizerId) { this.organizerId = organizerId; }

    public String getOrganizerEmail() { return organizerEmail; }
    public void setOrganizerEmail(String organizerEmail) { this.organizerEmail = organizerEmail; }

    public int getAvailableTickets() { return availableTickets; }
    public void setAvailableTickets(int availableTickets) { this.availableTickets = availableTickets; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String[] getTags() { return tags; }
    public void setTags(String[] tags) { this.tags = tags; }
}

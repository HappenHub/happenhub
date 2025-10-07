package com.happenhub;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookings")
public class Booking {

    @Id
    private String id;
    private String userEmail;
    private String eventId;
    private String eventTitle;
    private String organizerEmail;

    public Booking() {}

    public Booking(String userEmail, String eventId, String eventTitle, String organizerEmail) {
        this.userEmail = userEmail;
        this.eventId = eventId;
        this.eventTitle = eventTitle;
        this.organizerEmail = organizerEmail;
    }

    // Getters and setters
    public String getId() { return id; }

    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }

    public String getEventId() { return eventId; }
    public void setEventId(String eventId) { this.eventId = eventId; }

    public String getEventTitle() { return eventTitle; }
    public void setEventTitle(String eventTitle) { this.eventTitle = eventTitle; }

    public String getOrganizerEmail() { return organizerEmail; }
    public void setOrganizerEmail(String organizerEmail) { this.organizerEmail = organizerEmail; }
}

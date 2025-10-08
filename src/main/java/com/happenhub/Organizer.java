package com.happenhub;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "organizers")
public class Organizer {

    @Id
    private String id;
    private String organizerName;
    private String email;
    private String password;
    private String organizationName;
    private String contactNumber;

    public Organizer() {}

    public Organizer(String organizerName, String email, String password, String organizationName, String contactNumber) {
        this.organizerName = organizerName;
        this.email = email;
        this.password = password;
        this.organizationName = organizationName;
        this.contactNumber = contactNumber;
    }

    // Getters and setters
    public String getId() { return id; }

    public String getOrganizerName() { return organizerName; }
    public void setOrganizerName(String organizerName) { this.organizerName = organizerName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getOrganizationName() { return organizationName; }
    public void setOrganizationName(String organizationName) { this.organizationName = organizationName; }

    public String getContactNumber() { return contactNumber; }
    public void setContactNumber(String contactNumber) { this.contactNumber = contactNumber; }
}

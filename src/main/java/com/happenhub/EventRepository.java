package com.happenhub;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface EventRepository extends MongoRepository<Event, String> {

    // Existing methods
    List<Event> findByOrganizerEmail(String email);

    // New features:
    List<Event> findByTitleContainingIgnoreCase(String keyword); // Search by keyword in title
    List<Event> findByLocationIgnoreCase(String location);        // Filter by location
}

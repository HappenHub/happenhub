package com.happenhub;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrganizerRepository extends MongoRepository<Organizer, String> {
    Organizer findByEmail(String email);
}

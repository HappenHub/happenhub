package com.happenhub.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.happenhub.model.Organizer;

public interface OrganizerRepository extends MongoRepository<Organizer, String> {
    Organizer findByEmail(String email);
}

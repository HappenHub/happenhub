package com.happenhub.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.happenhub.model.Booking;
import java.util.List;

public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findByUserEmail(String userEmail);
    List<Booking> findByEventId(String eventId);
}

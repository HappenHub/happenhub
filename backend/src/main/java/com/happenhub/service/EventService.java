package com.happenhub.service;

import com.happenhub.dto.EventDTO;
import java.util.List;
import java.util.Optional;

public interface EventService {
    List<EventDTO> getAllEvents();
    Optional<EventDTO> getEventById(String id);
    EventDTO createEvent(EventDTO eventDTO);
    EventDTO updateEvent(String id, EventDTO eventDTO);
    void deleteEvent(String id);
    List<EventDTO> searchEvents(String keyword);
}
package com.happenhub.service.impl;

import com.happenhub.model.Event;
import com.happenhub.repository.EventRepository;
import com.happenhub.dto.EventDTO;
import com.happenhub.exception.ResourceNotFoundException;
import com.happenhub.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.time.LocalDateTime;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public List<EventDTO> getAllEvents() {
        return eventRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<EventDTO> getEventById(String id) {
        return eventRepository.findById(id).map(this::convertToDTO);
    }

    @Override
    public EventDTO createEvent(EventDTO eventDTO) {
        Event event = convertToEntity(eventDTO);
        Event savedEvent = eventRepository.save(event);
        return convertToDTO(savedEvent);
    }

    @Override
    public EventDTO updateEvent(String id, EventDTO eventDTO) {
        Event existingEvent = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));
        
        existingEvent.setTitle(eventDTO.getTitle());
        existingEvent.setLocation(eventDTO.getLocation());
        existingEvent.setDate(eventDTO.getDate().toString());
        
        Event updatedEvent = eventRepository.save(existingEvent);
        return convertToDTO(updatedEvent);
    }

    @Override
    public void deleteEvent(String id) {
        if (!eventRepository.existsById(id)) {
            throw new ResourceNotFoundException("Event not found with id: " + id);
        }
        eventRepository.deleteById(id);
    }

    @Override
    public List<EventDTO> searchEvents(String keyword) {
        return eventRepository.findByTitleContainingIgnoreCase(keyword).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private EventDTO convertToDTO(Event event) {
        EventDTO dto = new EventDTO();
        dto.setId(event.getId());
        dto.setTitle(event.getTitle());
        dto.setLocation(event.getLocation());
        dto.setDate(LocalDateTime.parse(event.getDate())); // Assuming date is stored in ISO format
        dto.setOrganizerEmail(event.getOrganizerEmail());
        return dto;
    }

    private Event convertToEntity(EventDTO dto) {
        Event event = new Event();
        event.setTitle(dto.getTitle());
        event.setLocation(dto.getLocation());
        event.setDate(dto.getDate().toString());
        event.setOrganizerEmail(dto.getOrganizerEmail());
        return event;
    }
}
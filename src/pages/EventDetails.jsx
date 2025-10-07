import React from 'react';
import BookingForm from '../components/BookingForm';

function EventDetails() {
  return (
    <div className="event-details">
      <h2>Party Night</h2>
      <p><strong>Date:</strong> 2025-10-05</p>
      <p><strong>Location:</strong> Mumbai</p>
      <p><strong>Organizer:</strong> Happen Hub Team</p>
      <p><strong>Tickets:</strong> Available</p>
      <p><strong>Description:</strong> A fun night full of music, dance, and excitement! Join us for an unforgettable party experience.</p>

      <BookingForm />
    </div>
  );
}

export default EventDetails;

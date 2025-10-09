import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { api } from '../utils/api';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const data = await api.events.getById(id);
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="event-details p-6">
        <div className="text-center mt-4">Loading event details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="event-details p-6">
        <div className="text-red-500 text-center mt-4">Error: {error}</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="event-details p-6">
        <div className="text-center mt-4">Event not found</div>
      </div>
    );
  }

  return (
    <div className="event-details p-6 bg-[#6F1D1B] min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">{event.title}</h2>
      <p className="mb-4"><strong>Date:</strong> {event.date}</p>
      <p className="mb-4"><strong>Location:</strong> {event.location}</p>
      <p className="mb-4"><strong>Organizer:</strong> {event.organizer?.name || 'Unknown'}</p>
      <p className="mb-4"><strong>Mood:</strong> {event.mood}</p>
      <p className="mb-4"><strong>Tickets:</strong> {event.available ? 'Available' : 'Sold Out'}</p>
      <p className="mb-8"><strong>Description:</strong> {event.description}</p>

      {event.available && <BookingForm eventId={event.id} />}
    </div>
  );
}

export default EventDetails;

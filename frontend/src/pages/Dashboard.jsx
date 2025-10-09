import React, { useState } from 'react';
import EventCard from '../components/EventCard';

const userEvents = [
  { id: 1, title: 'Party Night', date: '2025-10-05', mood: '🎉', location: 'Mumbai', status: 'Booked' },
  { id: 2, title: 'Tech Meetup', date: '2025-10-10', mood: '💻', location: 'Bangalore', status: 'Booked' },
  { id: 3, title: 'Art Workshop', date: '2025-10-12', mood: '🎨', location: 'Delhi', status: 'Interested' },
];

function Dashboard() {
  const [events, setEvents] = useState(userEvents);

  const bookedEvents = events.filter(event => event.status === 'Booked');
  const interestedEvents = events.filter(event => event.status === 'Interested');

  return (
    <div className="home-container">
      <h2 className="section-title">Your Dashboard</h2>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>All Events</h3>
          <p>{bookedEvents.length}</p>
        </div>
        <div className="stat-card">
          <h3>Interested Events</h3>
          <p>{interestedEvents.length}</p>
        </div>
        <div className="stat-card">
          <h3>Booked Events</h3>
          <p>{bookedEvents.length}</p>
        </div>
        <div className="stat-card">
          <h3>Saved Events</h3>
          <p>{interestedEvents.length}</p>
        </div>
      </div>

      <h3 className="section-title">Upcoming Events</h3>
      <div className="events-grid">
        {events.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            mood={event.mood}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

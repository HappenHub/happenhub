import React, { useState } from 'react';
import EventCard from "../components/EventCard";
import MoodFilter from '../components/MoodFilter';
import SearchBar from '../components/SearchBar';

const allEvents = [
  { id: 1, title: 'Party Night', date: '2025-10-05', mood: '🎉', location: 'Mumbai' },
  { id: 2, title: 'Tech Meetup', date: '2025-10-10', mood: '💻', location: 'Bangalore' },
  { id: 3, title: 'Art Workshop', date: '2025-10-12', mood: '🎨', location: 'Delhi' },
  { id: 4, title: 'Music Fest', date: '2025-10-15', mood: '🎵', location: 'Chennai' },
  { id: 5, title: 'Outdoor Adventure', date: '2025-10-20', mood: '🏞️', location: 'Goa' },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [selectedMood, setSelectedMood] = useState('');

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMood = selectedMood ? event.mood === selectedMood : true;
    const matchesLocation = locationTerm ? event.location.toLowerCase().includes(locationTerm.toLowerCase()) : true;
    return matchesSearch && matchesMood && matchesLocation;
  });

  return (
    <div className="home-container p-6 bg-[#6F1D1B] min-h-screen">
      <SearchBar placeholder="Search by event title..." value={searchTerm} setValue={setSearchTerm} />
      <SearchBar placeholder="Search by location..." value={locationTerm} setValue={setLocationTerm} />
      <MoodFilter selectedMood={selectedMood} setSelectedMood={setSelectedMood} />

      <h2 className="section-title text-white text-2xl mt-6 mb-4">Upcoming Events</h2>
      <div className="events-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              mood={event.mood}
              location={event.location} // ✅ added location
            />
          ))
        ) : (
          <p className="text-white text-center mt-4">No events found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;

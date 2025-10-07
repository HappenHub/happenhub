// Home.jsx or wherever you render multiple EventCards
import React from "react";
import EventCard from "./EventCard";

const eventsData = [
  { id: 1, title: "Jazz Night", date: "10 Oct", mood: "Chill", location: "Mumbai" },
  { id: 2, title: "Tech Meetup", date: "12 Oct", mood: "Excited", location: "Delhi" },
  // add more events
];

function EventsList() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-4 p-4">
      {eventsData.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          date={event.date}
          mood={event.mood}
          location={event.location}
          eventId={event.id}
        />
      ))}
    </div>
  );
}

export default EventsList;

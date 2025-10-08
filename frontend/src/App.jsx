import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events/all")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 Welcome to HappenHub 🎉</h1>
      <h3>Upcoming Events</h3>

      {events.length === 0 ? (
        <p>No events found yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {events.map((event) => (
            <li key={event.id} style={{ margin: "10px 0" }}>
              <strong>{event.title}</strong> — {event.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

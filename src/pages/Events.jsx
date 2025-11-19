import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultEvents = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "2025-12-01",
    location: "Online",
    description: "Learn the basics of modern frontend development.",
  },
  {
    id: 2,
    title: "Cybersecurity Seminar",
    date: "2025-12-05",
    location: "Campus Hall A",
    description: "Introduction to cybersecurity concepts and best practices.",
  },
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) {
      setEvents(JSON.parse(stored));
    } else {
      setEvents(defaultEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title: form.title,
      date: form.date,
      location: form.location,
      description: form.description,
    };

    setEvents((prev) => [...prev, newEvent]);
    setForm({ title: "", date: "", location: "", description: "" });
  };

  return (
    <section className="page">
      <h2>Manage Events</h2>
      <div className="two-column">
        <div className="column">
          <h3>Create New Event</h3>
          <form className="form" onSubmit={handleCreateEvent}>
            <label>
              Title
              <input
                required
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Event title"
              />
            </label>

            <label>
              Date
              <input
                required
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </label>

            <label>
              Location
              <input
                required
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Event location"
              />
            </label>

            <label>
              Description
              <textarea
                required
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
                placeholder="Short description of the event"
              />
            </label>

            <button type="submit" className="btn primary">
              Add Event
            </button>
          </form>
        </div>

        <div className="column">
          <h3>Upcoming Events</h3>
          {events.length === 0 ? (
            <p>No events yet. Add one using the form.</p>
          ) : (
            <ul className="event-list">
              {events.map((event) => (
                <li key={event.id} className="event-card">
                  <h4>{event.title}</h4>
                  <p>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p>{event.description}</p>
                  <Link to={`/events/${event.id}`} className="btn secondary">
                    View &amp; Register
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
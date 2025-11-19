import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (!stored) return;

    const events = JSON.parse(stored);
    const found = events.find((ev) => String(ev.id) === String(id));
    setEvent(found || null);
  }, [id]);

  useEffect(() => {
    const storedRegs = localStorage.getItem("registrations");
    if (!storedRegs) return;

    const all = JSON.parse(storedRegs);
    const regsForEvent = all.filter((r) => String(r.eventId) === String(id));
    setRegistrations(regsForEvent);
  }, [id]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newReg = {
      eventId: id,
      name: form.name,
      email: form.email,
      time: new Date().toISOString(),
    };

    const storedRegs = localStorage.getItem("registrations");
    const all = storedRegs ? JSON.parse(storedRegs) : [];
    const updated = [...all, newReg];

    localStorage.setItem("registrations", JSON.stringify(updated));
    setRegistrations((prev) => [...prev, newReg]);
    setForm({ name: "", email: "" });
  };

  if (event === null) {
    return (
      <section className="page">
        <p>Event not found.</p>
        <button className="btn secondary" onClick={() => navigate("/events")}>
          Back to Events
        </button>
      </section>
    );
  }

  return (
    <section className="page">
      <Link to="/events" className="back-link">
        &larr; Back to Events
      </Link>
      <h2>{event.title}</h2>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>{event.description}</p>

      <div className="two-column">
        <div className="column">
          <h3>Register for this event</h3>
          <form className="form" onSubmit={handleRegister}>
            <label>
              Name
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </label>

            <label>
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </label>

            <button type="submit" className="btn primary">
              Register
            </button>
          </form>
        </div>

        <div className="column">
          <h3>Registrations</h3>
          {registrations.length === 0 ? (
            <p>No one has registered yet.</p>
          ) : (
            <ul className="registration-list">
              {registrations.map((reg, index) => (
                <li key={index} className="registration-card">
                  <p>
                    <strong>{reg.name}</strong>
                  </p>
                  <p>{reg.email}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
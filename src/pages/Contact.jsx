import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="page">
      <h2>Contact Us</h2>
      <p>
        Have questions about this event management app? Send a message using
        the form below.
      </p>

      <form className="form" onSubmit={handleSubmit}>
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

        <label>
          Message
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message..."
            rows={4}
          />
        </label>

        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="success-msg">
          Thank you! Your message has been recorded (demo only).
        </p>
      )}
    </section>
  );
};

export default Contact;
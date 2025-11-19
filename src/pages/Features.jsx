import React from "react";

const Features = () => {
  const features = [
    {
      title: "Create Events",
      text: "Add new events with title, date, location, and description.",
    },
    {
      title: "Event Listing",
      text: "See all upcoming events in a clean, responsive layout.",
    },
    {
      title: "Event Registration",
      text: "Users can register for an event with their name and email.",
    },
    {
      title: "LocalStorage Saving",
      text: "Events and registrations are stored in the browser.",
    },
    {
      title: "Responsive Design",
      text: "Works on phones, tablets, and desktops.",
    },
  ];

  return (
    <section className="page">
      <h2>Features</h2>
      <div className="cards-grid">
        {features.map((item, index) => (
          <article key={index} className="card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
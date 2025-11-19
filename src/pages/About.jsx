import React from "react";

const About = () => {
  return (
    <section className="page">
      <h2>About Eventify</h2>
      <p>
        Eventify is a simple frontend web application designed to demonstrate
        event management concepts: creating events, listing them, and allowing
        users to register.
      </p>
      <p>
        This project is built using ReactJS, JSX, CSS, and client-side
        JavaScript logic. All data is stored in the browser using{" "}
        <strong>localStorage</strong>, so it works without a backend server.
      </p>
      <p>
        The goal is to show how a modern single-page application can manage
        dynamic data while remaining responsive on both desktop and mobile
        devices.
      </p>
    </section>
  );
};

export default About;
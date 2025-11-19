import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="page home-page">
      <div className="hero">
        <h1>Plan, Manage, and Join Events Easily</h1>
        <p>
          Eventify helps you create events, manage details, and let users
          register in a few clicks.
        </p>
        <div className="hero-actions">
          <Link to="/events" className="btn primary">
            View Events
          </Link>
          <Link to="/features" className="btn secondary">
            See Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div id="home-page" className="home-page">
      <Navbar />

      <main id="home-main" className="home-main">
        <section id="home-hero" className="home-hero">
          <div id="home-hero-content" className="home-hero-content">
            <span id="home-hero-label" className="home-hero-label">ACADEMIA • INDUSTRY • STUDENTS</span>

            <h1 id="home-hero-title" className="home-hero-title">
              Bridging Academia and Industry.
              <span id="home-hero-title-a" className="home-hero-title-accent">
                Building Futures.
              </span>
            </h1>

            <p id="home-hero-description" className="home-hero-description">
              A unified platform for skill development, internships, placements,
              and collaboration between students, academicians and industries.
            </p>

            <div id="home-hero-actions" className="home-hero-actions">
              <Link id="home-get-started" className="home-primary-button" to="/register">
                Get Started
              </Link>
              <a id="home-learn-more" className="home-secondary-button" href="#services">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section id="home-features" className="home-features">
          <article id="feature-secure" className="home-feature-card">
            <span className="home-feature-number">01</span>
            <h3>Trusted & Secure</h3>
            <p>Keep profiles, assessments and applications organized in one place.</p>
          </article>

          <article id="feature-insights" className="home-feature-card">
            <span className="home-feature-number">02</span>
            <h3>Data Driven Insights</h3>
            <p>Understand skills and identify areas that need improvement.</p>
          </article>

          <article id="feature-collaborate" className="home-feature-card">
            <span className="home-feature-number">03</span>
            <h3>Collaborate & Grow</h3>
            <p>Connect students, academicians and industry partners.</p>
          </article>
        </section>

        <section id="services" className="home-services">
          <div id="services-heading" className="home-section-heading">
            <span>PLATFORM</span>
            <h2>Everything You Need, All in One Place</h2>
          </div>

          <div id="services-list" className="home-services-list">
            {[
              ["service-skill-assessment", "Skill Assessment", "Assess your skills and discover areas to grow."],
              ["service-learning", "Learning & Growth", "Access courses, certifications, and industry programs."],
              ["service-internships", "Internships", "Find and apply for internships that match your skills."],
              ["service-placements", "Placements", "Explore job opportunities and get placed."],
              ["service-collaborate", "Collaborate", "Connect with mentors, industries, and peers."],
              ["service-portfolio", "Digital Portfolio", "Showcase your skills, projects, and achievements."]
            ].map(([id, title, description]) => (
              <article id={id} className="home-service-card" key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="home-stats" className="home-stats">
          <div id="stat-students" className="home-stat"><strong>10K+</strong><span>Students</span></div>
          <div id="stat-institutions" className="home-stat"><strong>500+</strong><span>Institutions</span></div>
          <div id="stat-industries" className="home-stat"><strong>1K+</strong><span>Industry Partners</span></div>
          <div id="stat-opportunities" className="home-stat"><strong>5K+</strong><span>Opportunities</span></div>
        </section>
      </main>
    </div>
  );
};

export default Home;

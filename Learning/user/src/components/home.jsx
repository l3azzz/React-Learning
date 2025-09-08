import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <h2>MyApp</h2>
        </div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Build amazing things with our powerful tools and services</p>
          <div className="hero-buttons">
            <NavLink to="/login" className="btn-primary">
              Get Started
            </NavLink>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Performance</h3>
              <p>Lightning fast load times and smooth user experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Your data is protected with enterprise-grade security</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Ready</h3>
              <p>Works perfectly on all devices and screen sizes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

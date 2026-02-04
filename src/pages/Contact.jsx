import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Form submission will be connected to your backend/email service');
  };

  const instagramUrl = 'https://www.instagram.com/hornetoutdoors_tactical?igsh=MXh2aG8xN2VnZWJmeA==';

  return (
    <section className="contact-page">
      <div className="contact-header">
        <div className="badge badge--available">Get in Touch</div>
        <h1>We're Here to Help</h1>
        <p className="contact-header__subtitle">
          Have questions about our products or services? Our team is ready to assist you with
          expert advice and personalized recommendations.
        </p>
      </div>

      <div className="contact-layout">
        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="card">
            <h2>Send Us a Message</h2>
            <p className="text-muted">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button type="submit" className="btn btn--full">
                Send Message
              </button>

              <p className="form-note text-muted">
                * Form will be connected to email service or backend
              </p>
            </form>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="contact-sidebar">
          {/* Contact Methods */}
          <div className="card contact-info-card">
            <h3>Contact Information</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="contact-method__content">
                  <div className="contact-method__label">Email</div>
                  <a href="mailto:contact@hornetoutdoors.com" className="contact-method__value">
                    contact@hornetoutdoors.com
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="contact-method__content">
                  <div className="contact-method__label">Phone</div>
                  <a href="tel:+15551234567" className="contact-method__value">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="contact-method__content">
                  <div className="contact-method__label">Location</div>
                  <div className="contact-method__value">Louisiana, USA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="card contact-hours-card">
            <h3>Business Hours</h3>
            <div className="hours-list">
              <div className="hours-item">
                <span className="hours-day">Monday - Friday</span>
                <span className="hours-time">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Saturday</span>
                <span className="hours-time">10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Sunday</span>
                <span className="hours-time">Closed</span>
              </div>
            </div>
            <p className="hours-note text-muted">
              All times Central Standard Time (CST)
            </p>
          </div>

          {/* Social Media */}
          <div className="card contact-social-card">
            <h3>Follow Us</h3>
            <p className="text-muted">
              Stay connected for gear reviews, tips, and community updates
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@hornetoutdoors_tactical</span>
            </a>
          </div>

          {/* Quick Response */}
          <div className="response-badge">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <div>
              <div className="response-badge__title">Quick Response</div>
              <div className="response-badge__text">We typically respond within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

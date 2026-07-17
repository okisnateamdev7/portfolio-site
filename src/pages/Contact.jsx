import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      // Reset form after delay
      setTimeout(() => {
        setShowThankYou(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  if (showThankYou) {
    return (
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Thank You!</h2>
          <div className="contact-content">
            <div className="contact-form">
              <p>Your message has been sent successfully. I'll get back to you soon!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="How can I help you?"
                required
                disabled={isSubmitting}
              />
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <span>alex.morgan@example.com</span>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="contact-item">
              <span>🔗</span>
              <span>GitHub: alexmorgan-dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

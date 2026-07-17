import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

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
      <section className="contact relative overflow-hidden flex items-center min-h-[80vh]">
        <div className="container text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 text-success rounded-full">
            <Send className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Thank you for reaching out. Your message has been received successfully. I'll get back to you as soon as possible.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#4f46e5]/10 to-[#8b5cf6]/10 rounded-full blur-3xl animate-float" style={{ left: '5%', top: '20%' }}></div>
        <div className="w-[150px] h-[150px] bg-gradient-to-r from-[#8b5cf6]/8 to-[#06b6d4]/8 rounded-full blur-3xl animate-float-slow" style={{ right: '10%', bottom: '20%' }}></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
            <p className="text-gray-300 max-w-md">
              Whether you have an exciting project idea, a job opportunity, or just want to chat about technology, my inbox is always open.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary" />
                <span>alex.morgan@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/alexmorgan-dev" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface/30 hover:bg-primary/20 rounded-lg border border-border/50 hover:border-primary/50 text-gray-300 hover:text-white transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/alexmorgan-dev" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface/30 hover:bg-primary/20 rounded-lg border border-border/50 hover:border-primary/50 text-gray-300 hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-surface/30 rounded-xl border border-border/50 p-8 w-full max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-300">Message</label>
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
              <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
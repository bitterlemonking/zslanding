'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container-default">
        <div className="flex justify-center">
          <span className="component-tag">Get Started</span>
        </div>
        <div className="text-center mb-12">
          <h2 className="heading-2">Ready to Transform Your Content?</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Join thousands of creators and businesses already using Zero Shot Media
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-accent hover:bg-accent-dark text-primary font-bold rounded-lg transition-colors flex items-center gap-2">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg relative">
            <div>
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="form-input"
                required
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-4 w-4 text-accent focus:ring-accent border-neutral-300 rounded"
                  required
                />
              </div>
              <div className="ml-3">
                <label htmlFor="consent" className="text-sm text-body">
                  I agree to receive communications from Zero Shot Media. You can unsubscribe at any time. 
                  View our <a href="/privacy" className="text-accent hover:text-accent-dark hover:underline">Privacy Policy</a>.
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

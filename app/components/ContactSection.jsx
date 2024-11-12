'use client';
import React, { useState } from 'react';
import { MapPin, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formType, setFormType] = useState('creator'); // 'creator' or 'seller'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    tiktokHandle: '',
    invitationCode: '',
    shopName: '',
    website: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="container-default">
        <div className="text-center mb-12">
          <h2 className="heading-1">Want to learn more?</h2>
          <p className="text-body-light max-w-2xl mx-auto">
            If you are interested in partnering with us, fill out the application form below or use the button to schedule an intro call!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setFormType('creator')}
              className={`px-6 py-2 rounded-full ${formType === 'creator' ? 'bg-accent text-white' : 'bg-white/5 text-body-light'}`}
            >
              I'm a Creator
            </button>
            <button 
              onClick={() => setFormType('seller')}
              className={`px-6 py-2 rounded-full ${formType === 'seller' ? 'bg-accent text-white' : 'bg-white/5 text-body-light'}`}
            >
              I'm a Seller
            </button>
          </div>

          <button className="w-full py-3 mb-8 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
            Schedule an Intro Call
          </button>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-body-light">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="text-sm text-body-light">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-body-light">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                onChange={handleInputChange}
              />
            </div>

            {formType === 'creator' ? (
              <>
                <div>
                  <label className="text-sm text-body-light">Your TikTok Handle</label>
                  <input
                    type="text"
                    name="tiktokHandle"
                    placeholder="@YourTikTokUsername"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="text-sm text-body-light">Your Invitation Code</label>
                  <input
                    type="text"
                    name="invitationCode"
                    placeholder="ZEROSHOT100"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    onChange={handleInputChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="text-sm text-body-light">TikTok Shop / Brand Name</label>
                  <input
                    type="text"
                    name="shopName"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="text-sm text-body-light">Website (Optional)</label>
                  <input
                    type="url"
                    name="website"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}

            <div>
              <label className="text-sm text-body-light">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                Send
              </button>
            </div>
          </form>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-body-light">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Castro Valley, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:yddcreation@gmail.com" className="hover:text-accent">Email Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

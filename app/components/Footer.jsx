'use client';
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-dark py-12 border-t border-white/10">
      <div className="container-default">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Zero Shot Media</h3>
            <p className="text-sm text-body-light">
              AI-powered growth solutions for creators and e-commerce businesses
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#creators" className="text-sm text-body-light hover:text-accent">For Creators</a>
              </li>
              <li>
                <a href="#sellers" className="text-sm text-body-light hover:text-accent">For Sellers</a>
              </li>
              <li>
                <a href="#stories" className="text-sm text-body-light hover:text-accent">Success Stories</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-body-light hover:text-accent">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-body-light hover:text-accent">Contact</a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-body-light hover:text-accent">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-body-light">Castro Valley, CA</li>
              <li>
                <a href="mailto:yddcreation@gmail.com" className="text-sm text-body-light hover:text-accent">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-sm text-body-light">
            © {new Date().getFullYear()} Zero Shot Media. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm text-body-light hover:text-accent">Privacy Policy</a>
            <a href="/terms" className="text-sm text-body-light hover:text-accent">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-white/5 hover:bg-white/10 text-body-light"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
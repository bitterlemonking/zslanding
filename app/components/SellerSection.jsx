'use client';
import React from 'react';
import { Users, Radio, BarChart3, Store } from 'lucide-react';

const SellerSection = () => {
  return (
    <section id="sellers" className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="container-default">
        <div className="text-center mb-16">
          <span className="component-tag mb-4 inline-block">For Sellers</span>
          <h2 className="heading-1 mb-6">One-Stop Growth Solution</h2>
          <p className="text-body-light max-w-2xl mx-auto text-lg">
            Comprehensive services to scale your e-commerce business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card-highlight">
            <Users className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Creator Network</h3>
            <p className="text-body-light mb-4">
              Connect with our curated network of professional creators to amplify your brand
            </p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> AI-powered creator matching
              </li>
              <li className="text-body-light">
                <span>✓</span> Collaboration management
              </li>
              <li className="text-body-light">
                <span>✓</span> Results monitoring
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <Radio className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Live Streaming</h3>
            <p className="text-body-light mb-4">
              Turn viewers into customers with our professional live shopping solutions
            </p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Stream optimization
              </li>
              <li className="text-body-light">
                <span>✓</span> Real-time engagement
              </li>
              <li className="text-body-light">
                <span>✓</span> Conversion tracking
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <BarChart3 className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Smart Advertising</h3>
            <p className="text-body-light mb-4">
              AI-powered ad strategies to maximize your marketing budget
            </p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Smart bidding
              </li>
              <li className="text-body-light">
                <span>✓</span> Audience targeting
              </li>
              <li className="text-body-light">
                <span>✓</span> Performance analytics
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <Store className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Store Growth</h3>
            <p className="text-body-light mb-4">
              Full-service shop management to scale your online presence
            </p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Listing optimization
              </li>
              <li className="text-body-light">
                <span>✓</span> Growth strategy
              </li>
              <li className="text-body-light">
                <span>✓</span> Data insights
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
          >
            Schedule A Call Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
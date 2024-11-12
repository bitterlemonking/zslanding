'use client';
import React from 'react';
import { Video, Target, Coins, Radio } from 'lucide-react';

const CreatorSection = () => {
  return (
    <section id="creators" className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary">
      <div className="container-default">
        <div className="text-center mb-16">
          <span className="component-tag mb-4 inline-block">For Creators</span>
          <h2 className="heading-1 mb-6">What We Offer</h2>
          <p className="text-body-light max-w-2xl mx-auto text-lg">
            Join our elite creator network and unlock your growth potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card-highlight">
            <Video className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Professional Studio Support</h3>
            <p className="text-body-light mb-4">
              Access to state-of-the-art studio facilities and expert production team
            </p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Professional equipment
              </li>
              <li className="text-body-light">
                <span>✓</span> Technical assistance
              </li>
              <li className="text-body-light">
                <span>✓</span> Content planning
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <Target className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Growth Resources</h3>
            <p className="text-body-light mb-4">
              Exclusive access to platform resources and traffic boost opportunities
            </p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Official campaign access
              </li>
              <li className="text-body-light">
                <span>✓</span> Traffic boost support
              </li>
              <li className="text-body-light">
                <span>✓</span> Brand collaboration
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <Coins className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Revenue Optimization</h3>
            <p className="text-body-light mb-4">
              Strategic guidance to maximize your monetization opportunities
            </p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Income strategy
              </li>
              <li className="text-body-light">
                <span>✓</span> Performance analysis
              </li>
              <li className="text-body-light">
                <span>✓</span> Revenue tracking
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <Radio className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Live Streaming Training</h3>
            <p className="text-body-light mb-4">
              Comprehensive training and support for successful live streaming
            </p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Sales techniques
              </li>
              <li className="text-body-light">
                <span>✓</span> Audience engagement
              </li>
              <li className="text-body-light">
                <span>✓</span> Performance coaching
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

export default CreatorSection;
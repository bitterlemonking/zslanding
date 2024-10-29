'use client';
import React from 'react';
import { ShoppingBag, TrendingUp, Shield, BarChart } from 'lucide-react';

const SellerSection = () => {
  return (
    <section id="sellers" className="py-20">
      <div className="container-default">
        <div className="flex justify-center">
          <span className="component-tag">For E-commerce Sellers</span>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="heading-1">Scale Your Business with AI</h2>
          <p className="text-body-light max-w-2xl mx-auto">
            Powerful tools to boost your e-commerce performance and ROI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-highlight">
            <ShoppingBag className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Product Listings</h3>
            <p className="text-body-light mb-4">AI-powered listing optimization</p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> SEO-optimized descriptions
              </li>
              <li className="text-body-light">
                <span>✓</span> Auto-generated keywords
              </li>
              <li className="text-body-light">
                <span>✓</span> Multi-platform sync
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <TrendingUp className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Performance Analytics</h3>
            <p className="text-body-light mb-4">Real-time insights and tracking</p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Sales analytics
              </li>
              <li className="text-body-light">
                <span>✓</span> Competitor tracking
              </li>
              <li className="text-body-light">
                <span>✓</span> Market trends
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <Shield className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Brand Protection</h3>
            <p className="text-body-light mb-4">Safeguard your brand identity</p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Counterfeit detection
              </li>
              <li className="text-body-light">
                <span>✓</span> Price monitoring
              </li>
              <li className="text-body-light">
                <span>✓</span> Policy compliance
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <BarChart className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Growth Tools</h3>
            <p className="text-body-light mb-4">Scale your business efficiently</p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Inventory management
              </li>
              <li className="text-body-light">
                <span>✓</span> Pricing optimization
              </li>
              <li className="text-body-light">
                <span>✓</span> Marketing automation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
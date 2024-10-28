import React from 'react';

// 导入你新创建的组件
const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="logo">Zero Shot Media</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#creators">Creator Opportunities</a></li>
        <li><a href="#brands">Brand Solutions</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#success-stories">Success Stories</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </nav>
);

const HeroSection = () => (
  <section id="hero" className="hero">
    <div className="container">
      <h1>Empowering Brands & Creators through AI & Data-Driven Solutions</h1>
      <p>Your Gateway to Global Success in the Creator Economy</p>
      <div className="hero-buttons">
        <a href="#creators" className="button">Join as a Creator</a>
        <a href="#brands" className="button">Partner as a Brand</a>
      </div>
    </div>
  </section>
);

const ValueProposition = () => (
  <section id="value-proposition" className="value-proposition">
    <div className="container">
      <h2>Why Choose Zero Shot Media?</h2>
      <div className="features">
        <div className="feature">
          <h3>AI & Data-Driven Solutions</h3>
          <p>Automated and intelligent content creation systems, reducing production costs by 70%.</p>
        </div>
        <div className="feature">
          <h3>No Upfront Costs, Shared Growth</h3>
          <p>No initial investment required, profit-sharing based on performance, ensuring zero-risk partnerships.</p>
        </div>
        <div className="feature">
          <h3>Global Reach & Local Expertise</h3>
          <p>Global brand positioning with local influencer teams to ensure effective market adaptation.</p>
        </div>
      </div>
    </div>
  </section>
);

const CreatorsSection = () => (
  <section id="creators" className="creators">
    <div className="container">
      <h2>Creator Opportunities</h2>
      <div className="tracks">
        <div className="track">
          <h3>Base Track</h3>
          <p>Free training, AI tools, and support for content monetization.</p>
          <ul>
            <li>Follower Growth: 250%</li>
            <li>Content Interaction Rate: +180%</li>
            <li>Revenue Increase: +150%</li>
          </ul>
        </div>
        <div className="track">
          <h3>Brand Track</h3>
          <p>Multi-platform content distribution, brand partnerships, and IP monetization.</p>
          <ul>
            <li>Follower Growth: 400%</li>
            <li>Brand Partnership Revenue: +250%</li>
            <li>Content Impact: +200%</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const BrandSolutionsSection = () => (
  <section id="brands" className="brands">
    <div className="container">
      <h2>Brand Solutions</h2>
      <div className="features">
        <div className="feature">
          <h3>AI & Content Creation</h3>
          <p>Rapid content creation and optimization using AI systems.</p>
        </div>
        <div className="feature">
          <h3>Multi-Platform Reach</h3>
          <p>Support for major platforms including TikTok Shop, Instagram, YouTube, and more.</p>
        </div>
        <div className="feature">
          <h3>Supply Chain Advantages</h3>
          <p>Direct access to over 200 global factories, cost optimization, and inventory management.</p>
        </div>
      </div>
    </div>
  </section>
);

const SuccessStoriesSection = () => (
  <section id="success-stories" className="success-stories">
    <div className="container">
      <h2>Success Stories</h2>
      <div className="stories">
        <div className="story">
          <h3>Base Track Success</h3>
          <ul>
            <li>Follower Growth: 250%</li>
            <li>Content Interaction Rate: +180%</li>
            <li>Revenue Increase: +150%</li>
          </ul>
        </div>
        <div className="story">
          <h3>Brand Track Success</h3>
          <ul>
            <li>Follower Growth: 400%</li>
            <li>Brand Partnership Revenue: +250%</li>
            <li>Content Impact: +200%</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2>Contact Us</h2>
      <p>Ready to Take the Next Step?</p>
      <div className="contact-info">
        <p>Email: contact@zeroshotmedia.com</p>
        <p>Phone: +1-234-567-8900</p>
        <p>Address: San Francisco, CA</p>
      </div>
    </div>
  </section>
);

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <CreatorsSection />
      <BrandSolutionsSection />
      <SuccessStoriesSection />
      <ContactSection />
    </div>
  );
}

'use client';
import React from 'react';
import { Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Lisa Zhang",
      role: "Brand Owner",
      company: "BeautyGlow",
      content: "Their Creator Network is incredible. The AI matching helped us find the perfect creators for our brand, and our sales increased by 400% in just two months.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Content Creator",
      company: "TikTok Live Streamer",
      content: "The professional studio support and live streaming training transformed my career. My average viewer count went from 50 to 1,000+ per stream.",
      rating: 5
    },
    {
      name: "Jessica Wang",
      role: "E-commerce Director",
      company: "FashionNova",
      content: "Their Smart Advertising and Store Growth solutions revolutionized our TikTok Shop. The AI-powered strategies helped us achieve 7-figure monthly sales.",
      rating: 5
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
      <div className="bg-blur-effect top-0 right-0 w-1/3 h-1/3 bg-secondary-magenta/10"></div>
      <div className="bg-blur-effect bottom-0 left-0 w-1/4 h-1/4 bg-accent/10"></div>
      
      <div className="container-default relative">
        <div className="text-center mb-12">
          <span className="tag">Success Stories</span>
          <h2 className="heading-1">What Our Clients Say</h2>
          <p className="text-body-light max-w-2xl mx-auto">
            Real results from our AI-powered growth solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="card-highlight backdrop-blur-sm bg-white/5">
              <div className="flex gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary-yellow text-secondary-yellow" />
                ))}
              </div>
              <p className="text-body-light mb-6">{story.content}</p>
              <div>
                <div className="font-semibold text-white">{story.name}</div>
                <div className="text-sm text-body-light">{story.role}</div>
                <div className="text-sm text-accent">{story.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
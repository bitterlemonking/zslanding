'use client';
import React from 'react';
import { Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechGrowth",
      content: "Zero Shot Media transformed our content strategy. We've seen a 300% increase in engagement since using their AI tools.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Content Creator",
      company: "Creative Studios",
      content: "The quality and speed of content generation is unmatched. It's like having a full production team at your fingertips.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "E-commerce Manager",
      company: "Fashion Forward",
      content: "Our product videos now take minutes instead of days to create. The ROI has been incredible.",
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
            See how businesses and creators are transforming their content with AI
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
'use client';
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide for brands?",
      answer: "We offer comprehensive e-commerce growth solutions including creator partnerships, professional live streaming services, smart advertising management, and full store operations support. Our team helps you scale your business across all aspects of TikTok Shop."
    },
    {
      question: "How do you support content creators?",
      answer: "We provide creators with professional studio facilities, exclusive platform resources, monetization guidance, and comprehensive live streaming training. Our goal is to help creators build sustainable income streams and grow their audience."
    },
    {
      question: "What makes your live streaming service different?",
      answer: "Our live streaming service combines professional studio equipment, experienced technical teams, and proven sales strategies. We handle everything from content planning to performance optimization, allowing you to focus on engaging with your audience."
    },
    {
      question: "How long does it take to see results?",
      answer: "While results vary by project, most of our clients see significant improvements within the first month. We provide regular performance reports and continuously optimize strategies based on data-driven insights."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses from startups and small businesses to established brands. Our solutions are scalable and can be customized to meet your specific needs and budget. We're committed to growing with our clients."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple. Contact us through the form below, and our team will schedule a consultation to understand your needs and create a tailored growth strategy for your business."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="container-default">
        <div className="text-center mb-12">
          <span className="component-tag">FAQ</span>
          <h2 className="heading-1">Common Questions</h2>
          <p className="text-body-light max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 rounded-lg border border-white/10 overflow-hidden"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center cursor-pointer p-6 bg-white/5 hover:bg-white/10">
                <h3 className="font-semibold text-white text-lg">{faq.question}</h3>
                <Plus className={`w-5 h-5 text-accent transition-transform ${openIndex === index ? 'rotate-45' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="p-6 text-body-light bg-white/5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
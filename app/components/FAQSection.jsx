'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the AI video generation work?",
      answer: "Our AI system analyzes your text input and transforms it into professional videos using advanced machine learning algorithms. It selects appropriate visuals, transitions, and can even generate voice-overs to match your content."
    },
    {
      question: "What type of content can I create?",
      answer: "You can create a wide range of content including marketing videos, social media posts, product demonstrations, educational content, and more. Our AI supports multiple formats and styles."
    },
    {
      question: "How long does it take to generate content?",
      answer: "Most content is generated within minutes. Simple videos can be ready in under 5 minutes, while more complex projects might take up to 15 minutes, depending on length and complexity."
    },
    {
      question: "Can I customize the AI-generated content?",
      answer: "Yes, you have full control over customization. You can adjust styles, colors, fonts, add your brand elements, and make specific edits to any generated content."
    },
    {
      question: "What about content rights and ownership?",
      answer: "All content generated through our platform belongs to you. You receive full commercial usage rights for any content you create using our tools."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-neutral-50">
      <div className="container-default">
        <div className="text-center mb-12">
          <span className="tag">FAQ</span>
          <h2 className="heading-2">Frequently Asked Questions</h2>
          <p className="text-body max-w-2xl mx-auto">
            Everything you need to know about our AI-powered content creation platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-primary">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-neutral-400 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-neutral-100">
                  <p className="text-body">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
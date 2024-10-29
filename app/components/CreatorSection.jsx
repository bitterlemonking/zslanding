'use client';
import React from 'react';
import { Video, Image, Zap, Sparkles } from 'lucide-react';

const CreatorSection = () => {
  return (
    <section id="creators" className="py-20">
      <div className="container-default">
        <div className="flex justify-center">
          <span className="component-tag">For Content Creators</span>
        </div>
        <div className="text-center mb-12">
          <h2 className="heading-1">Unleash Your Creative Potential</h2>
          <p className="text-body-light max-w-2xl mx-auto">
            Advanced AI tools to transform your ideas into stunning content
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-highlight">
            <Video className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">AI Video Generation</h3>
            <p className="text-body-light mb-4">Transform text into engaging videos</p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Multiple style options
              </li>
              <li className="text-body-light">
                <span>✓</span> Custom voice-overs
              </li>
              <li className="text-body-light">
                <span>✓</span> Brand customization
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <Image className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Image Creation</h3>
            <p className="text-body-light mb-4">Generate unique visuals instantly</p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> High resolution output
              </li>
              <li className="text-body-light">
                <span>✓</span> Style consistency
              </li>
              <li className="text-body-light">
                <span>✓</span> Batch processing
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <Zap className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Quick Editing</h3>
            <p className="text-body-light mb-4">Edit content in seconds</p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> One-click enhancement
              </li>
              <li className="text-body-light">
                <span>✓</span> Smart cropping
              </li>
              <li className="text-body-light">
                <span>✓</span> Instant resizing
              </li>
            </ul>
          </div>

          <div className="card-highlight">
            <Sparkles className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-3">Style Transfer</h3>
            <p className="text-body-light mb-4">Apply unique styles to your content</p>
            <ul className="list-check">
              <li className="text-body-light">
                <span>✓</span> Preset style library
              </li>
              <li className="text-body-light">
                <span>✓</span> Custom style creation
              </li>
              <li className="text-body-light">
                <span>✓</span> Real-time preview
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
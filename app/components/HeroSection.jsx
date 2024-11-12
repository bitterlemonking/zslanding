'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16 bg-gradient-to-br from-primary via-primary-light to-secondary-magenta/30 relative overflow-hidden">
      <div className="bg-blur-effect top-0 right-0 w-1/3 h-1/3 bg-secondary-magenta-light/20"></div>
      <div className="bg-blur-effect bottom-0 left-0 w-1/4 h-1/4 bg-secondary-yellow/20"></div>
      
      <div className="container-default py-20 relative">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <span className="component-tag">AI-Powered Growth Expert</span>
          <h1 className="heading-1">
            We Help Creators <br className="hidden sm:block" />
            & Shops Grow
          </h1>
          <p className="text-large text-body-light mb-12">
            Serving US and global markets, we understand your challenges: contents creation, 
            profitability, ops, and risk in a changing market. Our tools and services will 
            help you grow with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('creators')}
              className="btn-primary text-sm flex items-center justify-center gap-2 border-2 border-primary hover:border-primary/80"
            >
              For Creators <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection('sellers')}
              className="btn-secondary text-sm flex items-center justify-center gap-2 border-2 border-primary hover:border-primary/80"
            >
              For Sellers <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="flex justify-center gap-8 mb-16">
            <div>
              <div className="stat-number text-secondary-yellow">1000+</div>
              <div className="stat-label">Content Creators</div>
            </div>
            <div>
              <div className="stat-number text-secondary-magenta">200+</div>
              <div className="stat-label">Brands</div>
            </div>
            <div>
              <div className="stat-number text-accent">99%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>

          {/* Platform Icons Section */}
          <div className="border-t border-gray-200/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-3 text-white/90 bg-white/5 rounded-full px-6 py-2.5">
                <Image 
                  src="/icons/tiktok.svg" 
                  alt="TikTok MCN Partner" 
                  width={24} 
                  height={24} 
                  className="fill-current"
                />
                <span className="text-sm font-medium">TikTok Official MCN Partner</span>
              </div>
              <div className="h-6 w-[1px] bg-white/20 hidden sm:block"></div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <span className="text-xs text-white/50 uppercase tracking-wider">Also Operate On</span>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-1">
                    <Image
                      src="/icons/instagram.svg"
                      alt="Instagram"
                      width={22}
                      height={22}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <span className="text-[10px] text-white/50">Instagram</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Image
                      src="/icons/youtube.svg"
                      alt="YouTube"
                      width={28}
                      height={28}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <span className="text-[10px] text-white/50">YouTube</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Image
                      src="/icons/facebook.svg"
                      alt="Facebook"
                      width={22}
                      height={22}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <span className="text-[10px] text-white/50">Facebook</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Image
                      src="/icons/amazon.svg"
                      alt="Amazon"
                      width={24}
                      height={24}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <span className="text-[10px] text-white/50">Amazon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
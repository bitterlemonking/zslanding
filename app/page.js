import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SellerSection from './components/SellerSection';
import CreatorSection from './components/CreatorSection';
import SuccessStories from './components/SuccessStories';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <SellerSection />
      <CreatorSection />
      <SuccessStories />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
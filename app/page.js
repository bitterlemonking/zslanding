import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CreatorSection from './components/CreatorSection';
import SellerSection from './components/SellerSection';
import SuccessStories from './components/SuccessStories';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <CreatorSection />
      <SellerSection />
      <SuccessStories />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
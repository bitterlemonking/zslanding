'use client';
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-white/10">
      <div className="container-default">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-semibold text-xl">
            Zero Shot Media
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#sellers" className="text-body-light hover:text-white">
              Sellers
            </Link>
            <Link href="#creators" className="text-body-light hover:text-white">
              Creators
            </Link>
            <Link href="#contact" className="text-body-light hover:text-white">
              Contact
            </Link>
            <Link 
              href="#contact" 
              className="btn-primary text-sm"
            >
              Join →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

'use client';
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Sellers', href: '#sellers' },
    { label: 'Creators', href: '#creators' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="container-default">
        <div className="flex items-center justify-between h-16">
          <div className="text-primary font-bold text-2xl uppercase">
            Zero Shot Media
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="text-neutral-600 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button className="btn-join flex items-center gap-1 text-base">
              Join <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleClick(item.href)}
                  className="text-neutral-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button className="btn-join flex items-center gap-1 text-base">
                Join <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

'use client';
import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <Image 
        src="/zslogo.svg"
        alt="Zero Shot Media Logo" 
        width={48}
        height={48}
        className="object-contain"
      />
      <span className="font-black text-2xl text-primary font-orbitron tracking-wider">
        ZERO SHOT MEDIA
      </span>
    </div>
  );
};

export default Logo; 
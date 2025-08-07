'use client';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] py-8 px-6">
      <div className="flex items-center h-full">
        {/* Logo container - vertically centered */}
        <div className="flex items-center h-full">
          <Image 
            src="/next.svg" 
            alt="Logo" 
            width={80} 
            height={60}
            className="h-auto object-contain"
          />
        </div>

        {/* Title - truly centered in remaining space */}
        <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
          <h1 className="text-2xl font-bold text-gray-800 inline-block">
            Aviation Academy
          </h1>
        </div>

        {/* Balance the flex layout */}
        <div className="ml-auto w-[80px]">
          {/* Optional: Add other header elements here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
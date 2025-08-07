'use client';

import Image from 'next/image';
import React from 'react';

const PhotoSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[500px]">
        <Image
          src="/placeholder.png"
          alt="Team Group"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default PhotoSection;
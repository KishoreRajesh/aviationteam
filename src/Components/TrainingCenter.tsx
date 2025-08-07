// src/Components/TrainingCenters.tsx
'use client';

import React from 'react';

const leftCenters = ['Delhi', 'Mumbai', 'Bangalore'];
const rightCenters = ['Chennai', 'Hyderabad', 'Kolkata'];

const TrainingCenters = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-stretch justify-center">
        {/* Left Section */}
        <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">North & West India</h3>
          <ul className="space-y-2 text-gray-700">
            {leftCenters.map((city, idx) => (
              <li key={idx}>{city}</li>
            ))}
          </ul>
        </div>

        {/* Vertical Line */}
        <div className="w-[4px] bg-black mx-4 md:block hidden" />

        {/* Right Section */}
        <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">South & East India</h3>
          <ul className="space-y-2 text-gray-700">
            {rightCenters.map((city, idx) => (
              <li key={idx}>{city}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrainingCenters;
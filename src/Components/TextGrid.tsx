'use client';

import React from 'react';

const items = [
  { title: 'Course_1', text: 'Basic course $100/-' },
  { title: 'Course_1', text: 'Beginner course $200/-' },
  { title: 'Course_1', text: 'Intermediate course $500/-' },
  { title: 'Course_1', text: 'Advanced course $1000/-' },
  { title: 'Course_1', text: 'Pilot course $2000/-' },
  { title: 'Course_1', text: 'Jet-Pilot course $10000/-' },
];

const TextGrid = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-3 grid-rows-2">
        {items.map((item, idx) => {
          const isLastCol = idx % 3 === 2;
          const isLastRow = idx >= 3;

          const borderClasses = [];

          if (!isLastCol) borderClasses.push('border-r-[4px]');
          if (idx < 3) borderClasses.push('border-b-[4px]');

          // Split text into description and cost
          const match = item.text.match(/(.+?) (\$\d+\/-)/);
          const description = match?.[1] || item.text;
          const cost = match?.[2] || '';

          return (
            <div
              key={idx}
              className={`p-6 border-black flex flex-col items-center justify-center gap-4 text-center ${borderClasses.join(
                ' '
              )}`}
            >
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">
                {description}{' '}
                <span className="font-semibold text-black">{cost}</span>
              </p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-md transform transition-transform duration-200 hover:scale-105">
                Get Course
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TextGrid;
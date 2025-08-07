'use client';

import React from 'react';

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <div className="bg-white text-center my-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800">{children}</h2>
    </div>
  );
};

export default Text;
'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const steps = [
  {
    title: 'Step 1: Fill Application Form',
    description: 'Complete the online application form with your personal and academic details.',
  },
  {
    title: 'Step 2: Submit Required Documents',
    description: 'Upload necessary documents like ID proof, academic transcripts, and photo.',
  },
  {
    title: 'Step 3: Entrance Exam',
    description: 'Appear for our online entrance test to assess your skills.',
  },
  {
    title: 'Step 4: Interview Round',
    description: 'Attend a short interview with our admissions team.',
  },
  {
    title: 'Step 5: Confirmation & Payment',
    description: 'Pay the course fee to confirm your seat.',
  },
  {
    title: 'Step 6: Get Started!',
    description: 'Receive your welcome kit and begin your learning journey.',
  },
];

const AdmissionSteps = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center gap-4">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            {/* Step Box */}
            <div className="bg-white w-full border border-gray-300 rounded-md px-6 py-4 shadow-sm">
              <button
                onClick={() => toggleStep(idx)}
                className="w-full flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-800">{step.title}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-gray-800" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-800" />
                )}
              </button>
              {openIndex === idx && (
                <div className="mt-3 text-gray-600 text-sm transition-all duration-200">
                  {step.description}
                </div>
              )}
            </div>

            {/* Vertical Arrow (not after last step) */}
            {idx < steps.length - 1 && (
              <div className="text-black text-xl">↓</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AdmissionSteps;
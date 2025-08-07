'use client';
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

interface PhotoCardProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  Role?: string;
  IQ?: string;
  DOB?: string;
  Skills?: string;
  Job?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  imageUrl = "/DSC_0316.jpg",
  title = "Fazil Ahmed",
  description = "One of the greatest mind of SMVEC , he always gives me insights about what is life",
  Role = "Final-Year-Don",
  IQ = "9999+",
  DOB = "24-12-2003",
  Skills = "Full Stack Developer, AI Enthusiast, Open Source Contributor",
  Job = "Zoho SDE-3"
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="perspective-1000 w-80 h-96 cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden border-border overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold drop-shadow-lg">{title}</h3>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-background border-border p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Role</span>
                <span className="text-sm text-foreground">{Role}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">IQ</span>
                <span className="text-sm text-foreground text-right">{IQ}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">DOB</span>
                <span className="text-sm text-foreground">{DOB}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Skills</span>
              <span className="text-sm text-foreground text-right">{Skills}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Job</span>
              <span className="text-sm text-foreground">{Job}</span>
            </div>
          </div>
        </Card>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default PhotoCard;
'use client';

import PostCard from '@/Components/ui/postcard';

const cards = [
  {
    title: "Aarav Mehta",
    imageUrl: "placeholder.png",
    description: "Backend developer with a passion for scalable systems.",
    Role: "Backend Engineer",
    IQ: "135",
    DOB: "12-03-1999",
    Skills: "Node.js, MongoDB, Docker",
    Job: "Amazon"
  },
  {
    title: "Sneha Kapoor",
    imageUrl: "placeholder.png",
    description: "UX designer focused on accessibility and design systems.",
    Role: "UX Designer",
    IQ: "140",
    DOB: "08-08-2001",
    Skills: "Figma, Adobe XD, HTML/CSS",
    Job: "Flipkart"
  },
  {
    title: "Rohan Verma",
    imageUrl: "placeholder.png",
    description: "Frontend lead who loves crafting responsive UIs.",
    Role: "Frontend Engineer",
    IQ: "125",
    DOB: "11-06-2000",
    Skills: "React, Next.js, Tailwind",
    Job: "Paytm"
  },
  
];

export default function HomePage() {
  return (
    <main className="bg-white flex flex-col items-center justify-center gap-6 p-4">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
          {cards.map((data, idx) => (
            <PostCard key={idx} {...data} />
          ))}
        </div>
      </div>
    </main>
  );
}
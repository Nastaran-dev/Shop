"use client";

import * as React from "react";
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon } from "lucide-react" 
const stories = [
  {
    id: 1,
    title: "All-round comfort",
    subtitle: "On stage with Josef Cruz",
    image1: "/images/z1.jpg",
    image2: "/images/z2.jpg",
  },
  {
    id: 2,
    title: "Wanderer",
    subtitle: "Let's go hiking with Riku Park",
    image1: "/images/m1.jpg",
    image2: "/images/m2.jpg",
  },
  {
    id: 3,
    title: "What do I wear?",
    subtitle: "Tim Stevens, the party look",
    image1: "/images/s1.jpg",
    image2: "/images/s2.jpg",
  },
];

function StoryCard({ story }: { story: (typeof stories)[0] }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer flex-1 min-w-0"
      style={{ minHeight: "520px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image 1 */}
      <img
        src={story.image1}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
        style={{
          opacity: hovered ? 0 : 1,
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      />

      {/* Image 2 */}
      <img
        src={story.image2}
        alt={`${story.title} alternate`}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(1.08)",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          opacity: hovered ? 0.9 : 0.7,
        }}
      />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3
          className="text-3xl font-black leading-tight mb-1 transition-transform duration-500"
          style={{
            fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          {story.title}
        </h3>
        <p
          className="text-sm text-gray-300 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0.75,
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          {story.subtitle}
        </p>

        {/* Read more - appears on hover */}
        <div
          className="mt-3 flex items-center gap-1 text-xs font-semibold text-white/80 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
          }}
        >
          Read story
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function CuratedStories() {
  return (
    <section className="w-full bg-[#111111] py-16 px-6 md:px-12 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between">  <h2
        className="text-white mb-10 leading-tight"
        style={{
          fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 900,
        }}
      >
        Curated stories for you
      </h2>
      <Button variant="outline">Shop All   <ArrowUpRightIcon /></Button>
     
        
      </div>
    

      {/* Cards Grid */}
      <div className="flex flex-col md:flex-row gap-4">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
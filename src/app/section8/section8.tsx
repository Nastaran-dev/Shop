"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: 1,
    label: "Kids",
    image: "/images/kids.jpg",
  },
  {
    id: 2,
    label: "Men",
    image: "/images/men.jpg",
  },
  {
    id: 3,
    label: "Women",
    image: "/images/women.jpg",
  },
];

function CategoryCard({ item }: { item: (typeof categories)[0] }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer flex-1"
      style={{ minHeight: "520px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      
      <img
        src={item.image}
        alt={item.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
        style={{
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      />

      
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          opacity: hovered ? 1 : 0.6,
        }}
      />

     
      <div className="absolute bottom-5 left-5">
        <span
          className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-full transition-all duration-500"
          style={{
            transform: hovered ? "translateY(-6px)" : "translateY(0)",
            display: "inline-block",
            boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.2)" : "none",
          }}
        >
          {item.label}
        </span>
      </div>
    </div>
  );
}

export function DiscoverMore() {
  return (
    <section className="w-full bg-[#e8e8e8] px-6 md:px-12 py-12 mt-16 rounded-2xl">
   
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-black leading-tight"
          style={{
            fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
          }}
        >
          Discover more
        </h2>

        <button className="flex items-center gap-1.5 text-sm font-semibold text-black hover:opacity-60 transition-opacity duration-200 group">
          <ArrowUpRight className="w-4 h-4" />
          Shop all
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-4">
        {categories.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
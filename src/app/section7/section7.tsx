"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMAGE_1 =
  "/images/sia.jpg";
const IMAGE_2 =
  "/images/sia2.jpg";

export function SaleBanner() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <section className="w-full bg-[#e8e8e8] px-6 py-6 mt-16 rounded-2xl">
      <div
        className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "460px" }}
      >
      
        <div
          className="relative overflow-hidden cursor-pointer"
          style={{ minHeight: "340px" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
         
          <img
            src={IMAGE_1}
            alt="Sale footwear"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
            style={{
              opacity: hovered ? 0 : 1,
              transform: hovered ? "scale(1.07)" : "scale(1)",
            }}
          />

       
          <img
            src={IMAGE_2}
            alt="Sale footwear alternate"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(1.07)",
            }}
          />
        </div>

      
        <div className="bg-[#111111] flex flex-col justify-center px-10 py-14 gap-6">
          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 900,
            }}
          >
            Save up
            <br />
            to 75%
          </h2>

          <p className="text-gray-300 text-base leading-relaxed max-w-xs">
            Our seasonal sale continues with lifestyle, running and gym
            footwear at up to 75% off.
          </p>

          <Button
            variant="outline"
            className="w-fit rounded-full border-white/30 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 px-6 py-5 text-base font-semibold"
          >
            <ArrowUpRight className="w-4 h-4" />
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}
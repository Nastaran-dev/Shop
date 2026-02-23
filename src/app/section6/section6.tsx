"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMAGE_1 =
  "/images/white.jpg";
const IMAGE_2 =
  "/images/white2.jpg";

export function SponsoredBanner() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <section className="w-full bg-[#1a1a1a] px-6 md:px-12 py-10 mt-16 rounded-2xl">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0">
        
       
        <div
          className="relative w-full md:w-1/2 overflow-hidden rounded-2xl cursor-pointer"
          style={{ aspectRatio: "4/3" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
         
          <img
            src={IMAGE_1}
            alt="Timeless footwear"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
            style={{
              opacity: hovered ? 0 : 1,
              transform: hovered ? "scale(1.07)" : "scale(1)",
            }}
          />

          {/* Image 2 */}
          <img
            src={IMAGE_2}
            alt="Timeless footwear alternate"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(1.07)",
            }}
          />

          {/* Subtle vignette */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 md:pl-16 flex flex-col gap-5">
          <p className="text-gray-400 text-sm tracking-wide">Sponsored*</p>

          <h2
            className="text-white leading-tight"
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
            }}
          >
            Discover a new
            <br />
            lifestyle with:{" "}
            <span className="font-light" style={{ fontWeight: 300 }}>
              Timeless footwear
            </span>
          </h2>

          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            Footwear that never gets out of style.
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
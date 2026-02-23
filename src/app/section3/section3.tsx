"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
const IMAGE_1 = "/images/blue.jpg"; 
const IMAGE_2 = "/images/blue2.jpg"; 

export default function FabrixHero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-6 font-sans">
      <div
        className="w-full max-w-6xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl"
        style={{ minHeight: "520px" }}
      >
      
        <div className="bg-[#111111] flex flex-col justify-center px-12 py-16 gap-6">
          <h1
            className="text-white leading-none tracking-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
            }}
          >
            Fabrix-
            <br />
            A36
          </h1>

          <p className="text-gray-300 text-base max-w-xs leading-relaxed">
            Tackle this season with the newest aerodynamic footwear.
          </p>

          <Button
            variant="outline"
            className="w-fit rounded-full border-white/40 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 px-6 py-5 text-base"
          >
            <ArrowUpRight className="w-4 h-4" />
            Shop Now
          </Button>
        </div>
        <div
          className="relative overflow-hidden cursor-pointer"
          style={{ background: "#c8dff5", minHeight: "400px" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={IMAGE_1}
            alt="Fabrix A36 - Blue Sneaker"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
            style={{
              opacity: hovered ? 0 : 1,
              transform: hovered ? "scale(1.08) translateX(-20px)" : "scale(1)",
            }}
          />

          <img
            src={IMAGE_2}
            alt="Fabrix A36 - Alternate View"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(1.08) translateX(20px)",
            }}
          />

          <div
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-black text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
            }}
          >
            Alternate View ✦
          </div>
        </div>
      </div>
    </section>
  );
}

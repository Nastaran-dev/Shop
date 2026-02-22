"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] rounded-2xl overflow-hidden bg-neutral-900 ">
      <div className="absolute inset-0">
        {/* Replace src with your actual shoe image */}
        <img
          src="/images/orange.jpg"
          alt="Fabrix-4000 Running Shoe"
          className="w-full h-full object-cover object-center"
        />
        {/* Left gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[600px] px-12 py-16 max-w-2xl">
        <h1
          className="text-white font-extrabold leading-none tracking-tight mb-4"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          Running
          <br />
          in the rain
        </h1>

        <p className="text-white/80 text-base mb-8 font-light">
          Tackle this season with the Fabrix-4000
        </p>

        <Button
          variant="secondary"
          size="lg"
          className="w-fit rounded-full px-6 py-3 bg-white text-black hover:bg-white/90 font-medium text-base gap-2 shadow-lg"
        >
          <ArrowUpRight className="w-5 h-5" />
          Shop Now
        </Button>
      </div>

      {/* Bottom-right floating chat widget */}
      <div className="absolute bottom-6 right-6 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 max-w-xs">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-neutral-300">
          {/* Avatar placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-600" />
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900 leading-tight">
            Need this customized?
          </p>
          <a
            href="#"
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors flex items-center gap-1"
          >
            See my offers <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
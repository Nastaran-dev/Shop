"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Fabrix A36",
    price: "$129",
    tag: "New",
    image1: "/images/blue.jpg",
    image2: "/images/blue2.jpg",
  },
  {
    id: 2,
    name: "Fabrix Pro",
    price: "$149",
    tag: "Hot",
    image1: "/images/pink.jpg",
    image2: "/images/pink2.jpg",
  },
  {
    id: 3,
    name: "Fabrix Lite",
    price: "$99",
    tag: "Sale",
    image1: "/images/orange.jpg",
    image2: "/images/orange2.jpg",
  },
  {
    id: 4,
    name: "Fabrix X1",
    price: "$179",
    tag: "Limited",
    image1: "/images/purple.jpg",
    image2: "/images/purple2.jpg",
  },
  {
    id: 5,
    name: "Fabrix Air",
    price: "$119",
    tag: "New",
    image1: "/images/green.jpg",
    image2: "/images/green2.jpg",
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-3">
    
        <span className="absolute top-3 left-3 z-10 bg-black text-white text-xs font-bold px-2.5 py-1 rounded-full tracking-wider">
          {product.tag}
        </span>

      
        <img
          src={product.image1}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out"
          style={{
            opacity: hovered ? 0 : 1,
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />

       
        <img
          src={product.image2}
          alt={`${product.name} alternate`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(1.07)",
          }}
        />

       
        <div
          className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm text-white text-sm font-semibold text-center py-3 transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(100%)",
          }}
        >
          + Add to Cart
        </div>
      </div>

    
      <div className="px-1">
        <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.price}</p>
      </div>
    </div>
  );
}

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
     
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-1">
            Trending Now
          </p>
          <h2
            className="text-4xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            Hot This Season 🔥
          </h2>
        </div>

        <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 border-b-2 border-black pb-0.5 hover:gap-3 transition-all duration-200 group">
          Shop All
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

    
      <div className="relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex -left-5 bg-black text-white border-black hover:bg-gray-800 hover:text-white" />
          <CarouselNext className="hidden sm:flex -right-5 bg-black text-white border-black hover:bg-gray-800 hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}
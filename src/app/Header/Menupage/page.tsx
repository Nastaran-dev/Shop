"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = ["Kids", "Men", "Women"] as const;
type Category = (typeof categories)[number];

const products = [
  {
    id: 1,
    name: "Fabrix-500",
    category: "Women" as Category,
    image: "/images/pink.jpg",
    hoverImage: "/images/pink2.jpg",
  },
  {
    id: 2,
    name: "Fabrix-A36",
    category: "Men" as Category,
    image: "/images/blue.jpg",
    hoverImage: "/images/blue2.jpg",
  },
  {
    id: 3,
    name: "Fabrix-SE640",
    category: "Men" as Category,
    image: "/images/white.jpg",
    hoverImage: "/images/white2.jpg",
  },
  {
    id: 4,
    name: "Fabrix-K12",
    category: "Kids" as Category,
    image: "/images/sia.jpg",
    hoverImage: "/images/sia2.jpg",
  },
  {
    id: 5,
    name: "Fabrix-W200",
    category: "Women" as Category,
    image: "/images/purple.jpg",
    hoverImage: "/images/purple2.jpg",
  },
  {
    id: 6,
    name: "Fabrix-M55",
    category: "Men" as Category,
    image: "/images/orange.jpg",
    hoverImage: "/images/orange2.jpg",
  },
  {
    id: 7,
    name: "Fabrix-M55",
    category: "Men" as Category,
    image: "/images/green.jpg",
    hoverImage: "/images/green2.jpg",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen px-8 py-12">
      <h1 className="text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">
        Products
      </h1>

      <div className="flex gap-3 mb-10">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant="outline"
            onClick={() =>
              setActiveCategory(activeCategory === cat ? "All" : cat)
            }
            className={`rounded-full px-5 py-2 text-sm font-medium border transition-all ${
              activeCategory === cat
                ? "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800 hover:text-white"
                : "bg-transparent text-neutral-700 border-neutral-400 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

function ProductCard({
  product,
}: {
  product: {
    id: number;
    name: string;
    image: string;
    hoverImage: string;
    category: string;
  };
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={product.image}
        alt={product.name}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      
      <img
        src={product.hoverImage}
        alt={`${product.name} alternate view`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 scale-125 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

    
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-400 -z-10" />

      
      <div className="absolute bottom-4 left-4">
        <Badge
          variant="secondary"
          className="bg-white/90 text-neutral-900 text-sm font-medium px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm"
        >
          {product.name}
        </Badge>
      </div>
    </div>
  );
}

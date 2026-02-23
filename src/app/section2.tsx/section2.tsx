"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Fabrix-500",
    color: "Rose Pink",
    price: "$129",
    tag: "New",
    image: "/images/pink.jpg",
    imageHover: "/images/pink2.jpg",
    bg: "from-rose-100 to-pink-50",
    href: "/products/fabrix-500",
  },
  {
    id: 2,
    name: "Fabrix-A36",
    color: "Ocean Blue",
    price: "$149",
    tag: "Hot",
    image: "/images/blue.jpg",
    imageHover: "/images/blue2.jpg",
    bg: "from-blue-900 to-blue-700",
    href: "/products/fabrix-a36",
  },
];

export default function NewArrivals() {
  return (
    <section className="w-full px-6 py-12 md:px-16 md:py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
          New arrivals
        </h2>
        <Button
          variant="ghost"
          asChild
          className="text-zinc-700 hover:text-zinc-900 font-medium gap-1 px-0"
        >
          <Link href="/shop">
            <ArrowUpRight className="w-4 h-4" />
            Shop all
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={product.href} className="group">
            <Card className="overflow-hidden border-0 shadow-none rounded-2xl bg-transparent">
              <CardContent className="p-0 relative">
                <div
                  className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${product.bg}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <img
                    src={product.imageHover}
                    alt={`${product.name} hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-10">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 backdrop-blur-sm text-zinc-900 font-semibold text-sm px-4 py-1.5 rounded-full shadow-sm"
                    >
                      {product.name}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

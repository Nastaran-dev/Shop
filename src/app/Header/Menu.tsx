"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Our products", href: "/Header/Menupage" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function NavMenu() {
  return (
    <nav className="w-full px-8 py-4">
      <NavigationMenu>
        {/* دسکتاپ */}
        <NavigationMenuList className="gap-4 hidden md:flex">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href={item.href}
                  className="text-neutral-700 hover:text-neutral-900 font-extrabold text-[17px]"
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

       
        <div className="md:hidden w-[85vw] absolute top-12 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between px-5 py-4 text-neutral-800 font-bold text-[16px] hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
              style={{ borderBottom: index !== navItems.length - 1 ? "1px solid #f0f0f0" : "none" }}
            >
              <span>{item.label}</span>
              <span className="text-neutral-400 text-lg">›</span>
            </Link>
          ))}
        </div>
      </NavigationMenu>
    </nav>
  );
}
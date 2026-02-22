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
  { label: "Our products", href: "/Header/Product" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function NavMenu() {
  return (
    <nav className="w-full   px-8 py-4">
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href={item.href}
                  className=" text-neutral-700 hover:text-neutral-900  font-extrabold text-[17px]"
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
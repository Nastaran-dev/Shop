import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Shop: [
    { label: "Our products", href: "/products" },
    { label: "License", href: "/license" },
  ],
  Company: [
    { label: "About Fabrix", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Follow: [
    { label: "Instagram", href: "https://instagram.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white px-12 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
         
          <div className="flex-shrink-0">
            <span className="text-3xl font-extrabold tracking-widest uppercase">
              Fabrix
            </span>
          </div>

         
          <div className="flex flex-wrap gap-16">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-4 min-w-[120px]">
                <p className="text-white font-semibold text-base">{section}</p>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-neutral-800" />

      
        <p className="text-neutral-500 text-sm">
          Powered by{" "}
          <Link
            href="https://webflow.com"
            target="_blank"
            className="text-neutral-400 underline underline-offset-2 hover:text-white transition-colors"
          >
            Webflow
          </Link>
        </p>
      </div>
    </footer>
  );
}
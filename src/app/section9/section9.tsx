"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function NewsletterSection() {
  const [preference, setPreference] = React.useState("mens");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="w-full bg-[#dce6e2] px-6 md:px-16 py-20 mt-16 rounded-2xl mb-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

        <div className="flex-1 flex flex-col gap-5">
          <h2
            className="text-black leading-tight"
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
            }}
          >
            Deals & drops
            <br />
            <span style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>
              Straight to Your Inbox
            </span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed max-w-sm">
            Sign up for our newsletter to receive exclusive discounts, new
            product updates, and plenty of inspiration.
          </p>
        </div>

        <div className="flex-1 w-full bg-[#f0f0ee] rounded-2xl p-8 flex flex-col gap-7 shadow-sm">
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-gray-800">
              Your email address
            </Label>
            <Input
              type="email"
              placeholder="janedoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#e4e4e2] border-none rounded-xl h-12 text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-black"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm font-semibold text-gray-800">Preferences</p>
              <p className="text-sm text-gray-500">What interests you most?</p>
            </div>

            <RadioGroup
              value={preference}
              onValueChange={setPreference}
              className="flex flex-col gap-2.5"
            >
              {[
                { value: "mens", label: "Men's fashion" },
                { value: "womens", label: "Women's fashion" },
                { value: "kids", label: "Kids fashion" },
                { value: "deals", label: "Deals" },
              ].map((item) => (
                <div key={item.value} className="flex items-center gap-3">
                  <RadioGroupItem
                    value={item.value}
                    id={item.value}
                    className="border-gray-400 text-black"
                  />
                  <Label
                    htmlFor={item.value}
                    className="text-sm text-gray-700 cursor-pointer font-normal"
                  >
                    {item.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 h-12 text-base font-semibold"
          >
            {submitted ? "✓ Subscribed!" : "Sign up"}
          </Button>
        </div>
      </div>
    </section>
  );
}
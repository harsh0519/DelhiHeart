// components/OfferSlider.tsx
"use client";
import { useState } from "react";
import { OfferCard } from "./OfferCard";

export const OfferSlider = ({ offers }: { offers: any[] }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + offers.length) % offers.length);
  const next = () => setCurrent((prev) => (prev + 1) % offers.length);

  return (
    <section className="py-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
      <div className="flex items-center justify-center gap-4">
        <button onClick={prev} className="text-3xl">←</button>
        <OfferCard {...offers[current]} />
        <button onClick={next} className="text-3xl">→</button>
      </div>
    </section>
  );
};

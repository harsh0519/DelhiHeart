"use client";

import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";

export const Banner = ({ images }: { images: any[] }) => {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500">No banner images found.</div>;
  }

  return (
    <section className="w-full py-8">
      <div className="max-w-4xl mx-auto">
        <img
          src={urlFor(images[index]).width(800).url()}
          alt={`Slide ${index + 1}`}
          className="rounded-xl w-full object-cover"
        />
        {/* Optional: next/prev buttons */}
      </div>
    </section>
  );
};

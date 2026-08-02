"use client";

import { useState } from "react";

export default function Gallery({
  images,
  image_url,
}: {
  images: string[];
  image_url: string;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const allImages = [image_url, ...images.filter((img) => img !== image_url)];
  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-square rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center overflow-hidden">
        <img
          src={process.env.NEXT_PUBLIC_API_URL + images[activeImg]}
          alt={"product image"}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* fallback icon */}
        <svg
          className="w-20 h-20 text-zinc-300"
          viewBox="0 0 80 80"
          fill="currentColor"
        >
          <rect x="8" y="34" width="16" height="12" rx="3" />
          <rect x="24" y="28" width="8" height="24" rx="2" />
          <rect x="32" y="36" width="16" height="8" rx="2" />
          <rect x="48" y="28" width="8" height="24" rx="2" />
          <rect x="56" y="34" width="16" height="12" rx="3" />
        </svg>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {allImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`aspect-square rounded-xl border bg-zinc-50 flex items-center justify-center transition-all overflow-hidden ${
              activeImg === i
                ? "border-blue-500 border-2"
                : "border-zinc-200 hover:border-zinc-400"
            }`}
          >
            <img
              src={process.env.NEXT_PUBLIC_API_URL + img}
              alt={`product ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

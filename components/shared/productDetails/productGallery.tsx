"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  tags?: string[];
};

export default function ProductGallery({ images, tags }: Props) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  if (!activeImage) return null;

  return (
    <div>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-xl bg-neutral-900">
        {tags?.includes("Fresh") && (
          <span className="absolute left-4 top-4 rounded-md bg-[rgb(188,172,118)] px-3 py-1 text-xs font-semibold text-black">
            Fresh
          </span>
        )}

        {tags?.includes("Sale") && (
          <span className="absolute left-4 top-12 rounded-md border border-[rgb(188,172,118)] bg-black px-3 py-1 text-xs font-semibold text-white">
            Sale
          </span>
        )}

        <Image
          src={activeImage}
          alt="Product image"
          width={600}
          height={700}
          priority
          className="w-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3">
        {images.map((img, i) => {
          const active = img === activeImage;
          return (
            <button
              key={i}
              onClick={() => setActiveImage(img)}
              className={`overflow-hidden rounded-md border transition
                ${
                  active
                    ? "border-[rgb(188,172,118)]"
                    : "border-neutral-700 hover:border-[rgb(188,172,118)]"
                }`}
            >
              <Image src={img} alt="" width={80} height={100} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

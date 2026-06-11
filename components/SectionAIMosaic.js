"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const LEFT_CAROUSELS = {
  tall: [
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300",
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300",
  ],
  large: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400",
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400",
  ],
  smallLeft: [
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=300",
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300",
    "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=300",
  ],
  smallRight: [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300",
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=300",
  ],
};

const TITLE_STYLE = {
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
  fontSize: "43.2523px",
  lineHeight: "45.415px",
  fontWeight: 400,
  letterSpacing: "normal",
  color: "#333333",
};

const LABEL_STYLE = {
  fontFamily:
    '"SF Pro Display", -apple-system, BlinkMacSystemFont, Arial, sans-serif',
  fontSize: "13.3084px",
  lineHeight: "16.6355px",
  fontWeight: 400,
  letterSpacing: "normal",
  color: "#6b7280",
};

const RIGHT_CAROUSELS = {
  mediumLeft: [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300",
  ],
  mediumRight: [
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300",
  ],
  tall: [
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
    "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=400",
  ],
};

function CarouselCard({ images, interval, className, startDelay = 0 }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(startDelay === 0);

  useEffect(() => {
    if (startDelay > 0) {
      const delayId = setTimeout(() => setVisible(true), startDelay);
      return () => clearTimeout(delayId);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!visible) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval, visible]);

  return (
    <div className={`relative overflow-hidden rounded-2xl shrink-0 ${className}`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="320px"
        />
      ))}
    </div>
  );
}

function ColumnLabel({ text }) {
  return (
    <p className="flex items-center gap-1.5 mb-6 m-0 p-0" style={LABEL_STYLE}>
      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
      {text}
    </p>
  );
}

export default function SectionAIMosaic() {
  return (
    <section
      id="section-4"
      className="section-ai-mosaic bg-gray-50 dark:bg-gray-800 px-4 md:px-12 py-16"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200 dark:md:divide-gray-700">
        {/* Colonne gauche — AI Product Shots */}
        <div className="px-0 md:pr-10 pb-12 md:pb-0">
          <ColumnLabel text="AI Product Shots" />

          <div className="flex gap-3 overflow-visible">
            <CarouselCard
              images={LEFT_CAROUSELS.tall}
              interval={2500}
              className="h-64 w-24 -ml-4"
            />
            <div className="flex flex-col gap-3">
              <CarouselCard
                images={LEFT_CAROUSELS.large}
                interval={2500}
                className="h-64 w-80"
                startDelay={400}
              />
              <div className="flex gap-3">
                <CarouselCard
                  images={LEFT_CAROUSELS.smallLeft}
                  interval={2500}
                  className="h-48 w-36"
                  startDelay={800}
                />
                <CarouselCard
                  images={LEFT_CAROUSELS.smallRight}
                  interval={2500}
                  className="h-48 w-36"
                  startDelay={1200}
                />
              </div>
            </div>
          </div>

          <h2 className="mt-8 m-0 p-0">
            <span className="block" style={TITLE_STYLE}>
              Your product, new
            </span>
            <span className="block" style={TITLE_STYLE}>
              scenes on demand.
            </span>
          </h2>
        </div>

        {/* Colonne droite — AI Video Production */}
        <div className="px-0 md:pl-10 pt-12 md:pt-0">
          <ColumnLabel text="AI Video Production" />

          <div className="flex gap-3 overflow-visible items-stretch">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <CarouselCard
                  images={RIGHT_CAROUSELS.mediumLeft}
                  interval={3000}
                  className="h-48 w-36"
                  startDelay={500}
                />
                <CarouselCard
                  images={RIGHT_CAROUSELS.mediumRight}
                  interval={3000}
                  className="h-48 w-36"
                  startDelay={1000}
                />
              </div>
            </div>
            <CarouselCard
              images={RIGHT_CAROUSELS.tall}
              interval={3000}
              className="w-80 h-[28.75rem] -mr-4"
              startDelay={1500}
            />
          </div>

          <h2 className="mt-8 m-0 p-0">
            <span className="block" style={TITLE_STYLE}>
              Campaign-ready
            </span>
            <span className="block" style={TITLE_STYLE}>
              content in minutes.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

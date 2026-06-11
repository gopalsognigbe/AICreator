"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  {
    number: "01",
    title: ["Upload your", "product."],
    features: ["■ 10+ style presets", "■ Multiple formats"],
    subtitle: [
      "Store your products,",
      "assets and brand",
      "in one place.",
    ],
    bgClass: "section-6-bg-0",
  },
  {
    number: "02",
    title: ["AI creates", "options."],
    features: ["■ Concept variations", "■ Multiple directions"],
    subtitle: [
      "Use AI to create",
      "new visuals, scenes",
      "and campaigns.",
    ],
    bgClass: "section-6-bg-1",
  },
  {
    number: "03",
    title: ["Pick the", "best one."],
    features: ["■ Side-by-side view", "■ Easy download"],
    subtitle: [
      "Pick the versions",
      "you love from all",
      "the generations.",
    ],
    bgClass: "section-6-bg-2",
  },
];

const STYLE_IMAGES = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=200",
];

const PICK_IMAGES = [
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400",
];

function Spinner({ className = "w-8 h-8" }) {
  return (
    <svg
      className={`animate-spin text-white ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

function SimulatedNavbar() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 md:px-8 py-5">
      <div className="grid grid-cols-2 gap-[3px] w-9 h-9 shrink-0">
        <span className="bg-black text-white font-black text-[10px] flex items-center justify-center leading-none">
          A
        </span>
        <span className="bg-black text-white font-black text-[10px] flex items-center justify-center leading-none">
          I
        </span>
        <span className="bg-white/40" />
        <span className="bg-black" />
        <span className="bg-black" />
        <span className="bg-white/40" />
        <span className="bg-white/40" />
        <span className="bg-black" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 bg-neutral-900/90 backdrop-blur-sm rounded-full p-1.5">
        <div className="flex items-center gap-2.5 px-4 py-2">
          <span className="flex flex-col gap-[5px]">
            <span className="block w-4 h-[1.5px] bg-white rounded-full" />
            <span className="block w-4 h-[1.5px] bg-white rounded-full" />
            <span className="block w-3 h-[1.5px] bg-white rounded-full" />
          </span>
          <span className="text-white text-sm font-medium">Menu</span>
        </div>
        <span className="flex items-center justify-center w-10 h-10 text-base">
          ☀️
        </span>
        <span className="flex items-center justify-center min-w-[48px] h-10 px-3 text-white text-xs font-medium tabular-nums border border-white/20 rounded-full">
          0%
        </span>
      </div>

      <button
        type="button"
        className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full shrink-0"
      >
        Get started
      </button>
    </nav>
  );
}

function SlideCard({ slide, active }) {
  return (
    <div
      className={`transition-all duration-700 ease-in-out ${
        active
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none absolute inset-x-0 bottom-0"
      }`}
    >
      {slide === 0 && (
        <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md p-5 md:p-6">
          <p className="text-white text-sm font-medium m-0">Adjust style</p>
          <p className="text-white/60 text-xs mt-1 mb-4">Styles</p>
          <div className="flex gap-3 justify-center overflow-x-auto pb-1">
            {STYLE_IMAGES.map((src, i) => (
              <div key={src} className="relative shrink-0">
                <div
                  className={`absolute top-2 left-2 w-3 h-3 rounded-full border border-white/80 ${
                    i === 1 ? "bg-orange-500 border-orange-500" : "bg-transparent"
                  }`}
                />
                <div className="relative w-20 h-32 rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={`Style ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {slide === 1 && (
        <div className="mx-auto max-w-3xl flex flex-col md:flex-row gap-3 justify-center items-center">
          <div className="relative w-36 md:w-44 h-48 rounded-xl overflow-hidden shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300"
              alt="Processing product"
              fill
              className="object-cover"
              sizes="176px"
            />
            <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
              <Spinner className="w-3 h-3" />
              <span className="text-white text-[10px]">Processing...</span>
            </div>
          </div>
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="w-36 md:w-44 h-48 rounded-xl bg-white/20 flex items-center justify-center shrink-0"
            >
              <Spinner />
            </div>
          ))}
        </div>
      )}

      {slide === 2 && (
        <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md p-4 md:p-5">
          <div className="flex gap-3 justify-center overflow-x-auto">
            {PICK_IMAGES.map((src) => (
              <div
                key={src}
                className="relative w-32 md:w-40 h-56 rounded-xl overflow-hidden shrink-0"
              >
                <Image
                  src={src}
                  alt="Generated product"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <button
                    type="button"
                    className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center"
                    aria-label="Delete"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-neutral-500"
                    >
                      <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center"
                    aria-label="Download"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SectionScrollPin() {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const sectionTop = el.offsetTop;
      const sectionHeight = el.offsetHeight;
      const scrolled = window.scrollY - sectionTop;
      const scrollable = sectionHeight - window.innerHeight;

      if (scrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolled / scrollable));

      if (progress < 0.33) setActiveSlide(0);
      else if (progress < 0.66) setActiveSlide(1);
      else setActiveSlide(2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slide = SLIDES[activeSlide];

  return (
    <section
      id="section-6"
      ref={containerRef}
      className="section-scroll-pin"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-[80vh] md:h-screen overflow-hidden transition-all duration-700 ease-in-out">
        {/* Backgrounds */}
        {SLIDES.map((s, i) => (
          <div
            key={s.number}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${s.bgClass} ${
              activeSlide === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="relative z-10 h-full flex flex-col text-white">
          <SimulatedNavbar />

          <span className="absolute top-20 md:top-8 right-4 md:right-12 text-4xl md:text-6xl lg:text-8xl font-bold text-white/20 leading-none pointer-events-none transition-all duration-700">
            {slide.number}
          </span>

          <div className="flex-1 flex flex-col px-4 md:px-12 pt-4 pb-8 min-h-0">
            {/* Titre */}
            <div className="transition-all duration-700 ease-in-out">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-light leading-tight m-0">
                {slide.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-12 border-t border-white/20 transition-all duration-700">
              <p className="text-sm text-white/70 py-4 md:pr-4 md:border-r border-b md:border-b-0 border-white/20 m-0">
                {slide.features[0]}
              </p>
              <p className="text-sm text-white/70 py-4 md:pl-4 m-0">
                {slide.features[1]}
              </p>
            </div>

            {/* Sous-titre */}
            <div className="mt-6 transition-all duration-700">
              {slide.subtitle.map((line) => (
                <p
                  key={line}
                  className="text-sm md:text-base text-white/80 font-light m-0 leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Bouton centré */}
            <div className="flex-1 flex items-center justify-center min-h-[80px]">
              <button
                type="button"
                className="bg-white text-black dark:bg-white dark:text-black rounded-full px-8 py-3 text-sm font-medium transition-all duration-700"
              >
                Get started
              </button>
            </div>

            {/* UI Card */}
            <div className="relative min-h-[200px] md:min-h-[220px]">
              {[0, 1, 2].map((i) => (
                <SlideCard key={i} slide={i} active={activeSlide === i} />
              ))}
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6 pb-4">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-700 ease-in-out ${
                    activeSlide === i ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

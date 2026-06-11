"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ORBITAL_IMAGES = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=120&h=120&fit=crop",
];

const MENU_LINKS = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Exemples", href: "#exemples" },
  { label: "Contact", href: "#contact" },
];

const KEYWORDS = [
  "Fashion",
  "Street style",
  "Ads",
  "Stories",
  "Product shots",
  "Lifestyle",
  "E-commerce",
  "Campaigns",
  "Lookbook",
  "Social media",
  "Catalog",
  "Editorial",
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent =
        docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <section
      id="section-1"
      className="hero-section relative h-screen overflow-hidden bg-white"
    >
      {/* Navbar fixe */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-5">
        <a href="#" className="hero-logo flex-shrink-0" aria-label="AICreator">
          <div className="grid grid-cols-2 gap-[3px] w-9 h-9">
            <span className="bg-black text-white font-black text-[10px] flex items-center justify-center leading-none">
              A
            </span>
            <span className="bg-black text-white font-black text-[10px] flex items-center justify-center leading-none">
              I
            </span>
            <span className="bg-neutral-300" />
            <span className="bg-black" />
            <span className="bg-black" />
            <span className="bg-neutral-300" />
            <span className="bg-neutral-300" />
            <span className="bg-black" />
          </div>
        </a>

        <div className="hero-pill absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur-sm rounded-full p-1.5">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block w-4 h-[1.5px] bg-white rounded-full" />
              <span className="block w-4 h-[1.5px] bg-white rounded-full" />
              <span className="block w-3 h-[1.5px] bg-white rounded-full" />
            </span>
            <span className="text-white text-sm font-medium">Menu</span>
          </button>

          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-base"
            aria-label={darkMode ? "Mode clair" : "Mode sombre"}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <span className="flex items-center justify-center min-w-[48px] h-10 px-3 text-white text-xs font-medium tabular-nums border border-white/20 rounded-full">
            {scrollPercent}%
          </span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            className="hero-account hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-neutral-300 hover:border-neutral-400 transition-colors"
            aria-label="Mon compte"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-600"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
            </svg>
          </button>

          <button
            type="button"
            className="hero-cta bg-black text-white dark:bg-white dark:text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 dark:hover:bg-gray-200 transition-colors"
          >
            Get started
          </button>
        </div>
      </nav>

      {/* Menu fullscreen */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-8 text-white text-2xl w-12 h-12 flex items-center justify-center hover:opacity-60 transition-opacity"
            aria-label="Fermer le menu"
          >
            ✕
          </button>
          <ul className="flex flex-col items-center gap-10">
            {MENU_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-4xl font-medium tracking-tight hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Zone orbitale + upload */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[560px] h-[560px] flex items-center justify-center">
          <div className="absolute inset-0 orbital-ring">
            {ORBITAL_IMAGES.map((src, i) => {
              const angle = i * 45;
              return (
                <div
                  key={src}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: 120,
                    height: 120,
                    marginLeft: -60,
                    marginTop: -60,
                    transform: `rotate(${angle}deg) translateY(-220px)`,
                  }}
                >
                  <div className="orbital-counter w-[120px] h-[120px]">
                    <Image
                      src={src}
                      alt={`Modèle ${i + 1}`}
                      width={120}
                      height={120}
                      className="rounded-[28px] object-cover w-[120px] h-[120px] shadow-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center w-[100px] h-[100px] rounded-xl border border-dashed border-neutral-300 bg-white cursor-pointer hover:border-neutral-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-400 mb-1.5"
              aria-hidden="true"
            >
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
            <p className="text-[9px] text-neutral-400 text-center px-2 leading-tight">
              Upload or drop your assets
            </p>
          </div>
        </div>
      </div>

      {/* Headline — bas gauche, hors du cercle orbital */}
      <div className="absolute bottom-8 left-6 md:left-10 z-10 pointer-events-none max-w-[220px]">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-[1]">
          <span className="hero-headline-1 block text-black">Your products,</span>
          <span className="hero-headline-2 block text-neutral-400">
            instantly re-imagined.
          </span>
        </h1>
      </div>

      {/* Copyright — bas centre */}
      <p className="hero-copyright absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-xs text-neutral-400 tracking-wide pointer-events-none">
        ©2026
      </p>

      {/* Panorama mots-clés — droite centre, défilement vertical avec fondu */}
      <div className="keywords-vertical-mask absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-10 h-[132px] w-max overflow-hidden pointer-events-none">
        <div className="keywords-vertical-track flex flex-col items-end gap-2">
          {[...KEYWORDS, ...KEYWORDS].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="hero-keyword flex-shrink-0 px-4 py-1.5 text-xs text-neutral-500 border border-neutral-200 rounded-full bg-white/80 backdrop-blur-sm whitespace-nowrap"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

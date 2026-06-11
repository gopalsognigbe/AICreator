"use client";

import { useState, useEffect } from "react";

const BANDS = [
  {
    words: [
      "Generates Images",
      "Designs Ads",
      "Shoots Products",
      "Builds Campaigns",
      "Creates Content",
    ],
    interval: 3000,
    startDelay: 0,
    textClassName:
      "text-3xl md:text-5xl lg:text-6xl font-light text-black dark:text-white",
  },
  {
    words: [
      "Boosts Your Sales",
      "Saves Your Time",
      "Cuts Your Costs",
      "Scales Your Brand",
      "Grows Your Reach",
    ],
    interval: 3500,
    startDelay: 500,
    textClassName:
      "text-3xl md:text-5xl lg:text-6xl font-light text-gray-400 dark:text-gray-500",
  },
  {
    words: [
      "No Photographer",
      "No Studio Needed",
      "No Design Skills",
      "No Agency Fees",
      "No Waiting Time",
    ],
    interval: 4000,
    startDelay: 1000,
    textClassName:
      "text-3xl md:text-5xl lg:text-6xl font-light text-gray-300 dark:text-gray-400",
    noBorder: true,
  },
];

function WordBand({
  words,
  interval,
  startDelay = 0,
  textClassName,
  noBorder = false,
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(startDelay === 0);

  useEffect(() => {
    if (startDelay > 0) {
      const delayId = setTimeout(() => setActive(true), startDelay);
      return () => clearTimeout(delayId);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!active) return;

    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 500);
    }, interval);

    return () => clearInterval(id);
  }, [words.length, interval, active]);

  return (
    <div
      className={`section-5-band flex items-center overflow-hidden h-1/3 min-h-[120px] px-4 md:px-12 ${
        noBorder ? "" : "border-b border-gray-200 dark:border-gray-700"
      }`}
    >
      <p
        className={`section-5-word m-0 leading-none transition-opacity duration-500 ease-in-out ${textClassName} ${
          visible ? "section-5-word-visible" : "opacity-0"
        }`}
      >
        {words[index]}
      </p>
    </div>
  );
}

export default function SectionMarquee() {
  return (
    <section
      id="section-5"
      className="section-marquee bg-white dark:bg-gray-900 min-h-screen flex flex-col md:flex-row"
    >
      {/* Colonne gauche — 25% */}
      <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
        <div className="sticky top-0 h-auto md:h-screen flex flex-col justify-between py-16 px-4 md:px-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight m-0">
            AI that
          </h2>
          <button
            type="button"
            className="section-5-cta self-start bg-black text-white dark:bg-white dark:text-black rounded-full px-6 py-3 text-sm font-medium mt-8 md:mt-0"
          >
            Get started
          </button>
        </div>
      </div>

      {/* Colonne droite — 75% */}
      <div className="w-full md:w-3/4 flex flex-col min-h-0 md:min-h-screen">
        {BANDS.map((band) => (
          <WordBand
            key={band.words.join("-")}
            words={band.words}
            interval={band.interval}
            startDelay={band.startDelay}
            textClassName={band.textClassName}
            noBorder={band.noBorder}
          />
        ))}
      </div>
    </section>
  );
}

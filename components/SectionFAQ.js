"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "What can AICreator generate for my brand?",
    answer:
      "AICreator generates professional product photos, lifestyle shots, social media ads, and campaign visuals — all powered by AI. No photographer, no studio, no waiting.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Just upload a photo of your product. Our AI handles the rest — backgrounds, lighting, models, and scenes. You'll have results in minutes.",
  },
  {
    question: "Will the visuals match my brand identity?",
    answer:
      "Yes. You can define your brand colors, style presets, and visual tone. Every generation follows your brand guidelines to stay consistent across all assets.",
  },
  {
    question: "Do I own the content AICreator generates?",
    answer:
      "Absolutely. All generated images and videos are 100% yours. You can use them commercially across any channel without restrictions.",
  },
  {
    question: "How fast do I get my results?",
    answer:
      "Most generations are ready in under 60 seconds. Batch campaigns with multiple variations typically complete in 2 to 5 minutes.",
  },
  {
    question: "Does this replace my creative team?",
    answer:
      "It supercharges them. AICreator handles the repetitive, time-consuming visual production so your team can focus on strategy and creativity.",
  },
];

export default function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="section-7"
      className="section-faq bg-white dark:bg-gray-900 px-4 md:px-16 py-16 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Colonne gauche — label */}
        <div className="lg:w-1/4 shrink-0">
          <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest lg:sticky lg:top-8 m-0">
            FAQs
          </p>
        </div>

        {/* Colonne droite — contenu */}
        <div className="lg:w-3/4 flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight mb-16 m-0">
            <span className="block">Not boring answers.</span>
            <span className="block">Real ones here.</span>
          </h2>

          <div className="border-b border-gray-200 dark:border-gray-700">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="border-t border-gray-200 dark:border-gray-700"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left bg-transparent border-0 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-normal text-black dark:text-white">
                      {item.question}
                    </span>
                    <span
                      className={`text-2xl text-gray-400 dark:text-gray-500 shrink-0 transition-all duration-300 ease-in-out group-hover:text-black dark:group-hover:text-white ${
                        isOpen ? "rotate-0" : ""
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-base text-gray-500 dark:text-gray-400 mt-4 mb-6 max-w-2xl leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

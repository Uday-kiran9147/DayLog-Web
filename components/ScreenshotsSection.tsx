import React from "react";
import Image from "next/image";
import { SparklesIcon } from "./Icons";

export function ScreenshotsSection() {
  const screenshots = [
    {
      title: "Guided Daily Reflection",
      tag: "Evening Ritual",
      description:
        "4-question reflection interface with top priority accountability and persistent focus timer pill.",
      src: "/screenshots/reflection-screen.png",
      alt: "DayLog Reflection Screen",
    },
    {
      title: "Domain & Work Tracking",
      tag: "Customization",
      description:
        "Select your work domains (Developer, Designer, Creator, Student) and customize focus cards.",
      src: "/screenshots/categories-screen.png",
      alt: "DayLog Category Tracking Screen",
    },
    {
      title: "Manage Categories Bottom Sheet",
      tag: "Quick Start Chips",
      description:
        "Search categories, toggle active chips, and configure quick-start shortcuts for fast timer launch.",
      src: "/screenshots/manage-categories.png",
      alt: "DayLog Manage Categories Screen",
    },
  ];

  return (
    <section id="screenshots" className="py-20 md:py-28 bg-[#181512] border-y border-[#2d2720]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d97736]/15 border border-[#d97736]/30 text-[#d97736] text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Visual Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed for Clarity &amp; Flow
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Warm terracotta accents, tactile Material 3 cards, and zero friction.
          </p>
        </div>

        {/* 3 Screenshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {screenshots.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-[#1e1b18] border border-[#332d26] rounded-3xl p-6 shadow-md hover:shadow-xl transition-all group hover:border-[#c85a32]/40"
            >
              {/* Natural Screenshot Image (Without artificial CSS shell) */}
              <div className="relative w-full aspect-[430/890] max-w-[280px] mb-6 drop-shadow-2xl group-hover:scale-[1.03] transition-transform duration-300">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>

              {/* Text Meta */}
              <div className="text-center space-y-2 w-full">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#d97736]/15 text-[#d97736] text-xs font-bold font-mono">
                  {s.tag}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

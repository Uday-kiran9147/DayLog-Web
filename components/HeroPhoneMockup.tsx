"use client";

import React, { useState } from "react";
import Image from "next/image";

export function HeroPhoneMockup() {
  const [activeScreen, setActiveScreen] = useState<"reflection" | "categories" | "manage">("reflection");

  const screens = [
    {
      id: "reflection" as const,
      label: "Reflection Journal",
      src: "/screenshots/reflection-screen.png",
      alt: "DayLog 4-Question Daily Reflection and Focus Timer",
      subtitle: "Daily Reflection & Active Timer",
    },
    {
      id: "categories" as const,
      label: "What You Track",
      src: "/screenshots/categories-screen.png",
      alt: "DayLog Category Tracking setup",
      subtitle: "Domain & Work Focus Cards",
    },
    {
      id: "manage" as const,
      label: "Manage Chips",
      src: "/screenshots/manage-categories.png",
      alt: "DayLog Manage Categories Bottom Sheet",
      subtitle: "Quick Start Chips & Tags",
    },
  ];

  const current = screens.find((s) => s.id === activeScreen) || screens[0];

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] select-none">
      {/* Background Terracotta & Sage Ambient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#c85a32]/25 via-[#5b8266]/20 to-[#c85a32]/15 rounded-[52px] blur-2xl opacity-80 animate-pulse -z-10" />

      {/* Screen Switcher Pills */}
      <div className="flex items-center justify-center gap-1.5 p-1 bg-[#231f1c]/90 dark:bg-[#1f1b17] border border-[#3d362e] rounded-2xl mb-3 shadow-lg backdrop-blur-md">
        {screens.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveScreen(s.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeScreen === s.id
                ? "bg-[#c85a32] text-white shadow-md shadow-[#c85a32]/30 scale-[1.02]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Natural Screenshot Image (Contains its own native device frame) */}
      <div className="relative w-full aspect-[430/890] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain transition-opacity duration-300"
          priority
          sizes="(max-width: 400px) 100vw, 360px"
        />
      </div>

      {/* Floating Badge (Mini timer pill matching app aesthetic) */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-[#faf6f0] dark:bg-[#231f1c] border border-[#c85a32]/40 rounded-2xl p-2.5 shadow-xl shadow-black/20 flex items-center justify-between text-xs backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c85a32] animate-ping" />
          <span className="font-mono font-bold text-[#c85a32]">00:02:14</span>
          <span className="text-slate-600 dark:text-slate-300 font-medium truncate max-w-[130px]">
            Design Marketing Assets
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#c85a32]/10 text-[#c85a32] font-semibold text-[10px]">
          Active Focus
        </span>
      </div>
    </div>
  );
}

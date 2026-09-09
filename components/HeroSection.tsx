import React from "react";
import Image from "next/image";
import { DownloadButtons } from "./DownloadButtons";
import { HeroPhoneMockup } from "./HeroPhoneMockup";
import { SparklesIcon, ShieldCheckIcon, TimerIcon, BookOpenIcon, CheckIcon } from "./Icons";

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background Gradients & Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10">
        <div className="absolute top-[-80px] left-1/4 w-[450px] h-[450px] bg-[#c85a32]/15 rounded-full blur-[130px]" />
        <div className="absolute top-[-40px] right-1/4 w-[450px] h-[450px] bg-[#5b8266]/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1e1b18] border border-[#e6dcce] dark:border-[#332d26] shadow-sm text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              <Image
                src="/daylog-icon_v8.png"
                alt="DayLog Icon"
                width={20}
                height={20}
                className="rounded-md"
              />
              <span className="font-bold text-[#c85a32]">DayLog</span>
              <span className="text-slate-400">•</span>
              <span>100% Offline-First Focus &amp; Journal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#231f1c] dark:text-[#f6f0e6] tracking-tight leading-[1.1]">
              Focus with intention. <br />
              <span className="bg-gradient-to-r from-[#c85a32] via-[#d97736] to-[#5b8266] bg-clip-text text-transparent">
                Reflect with clarity.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A minimalist focus timer and 4-question daily reflection journal designed to help you stay productive and compound habits—with zero cloud lock-in, zero accounts, and complete privacy.
            </p>

            {/* Store Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <DownloadButtons />
            </div>

            {/* Key Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#e6dcce] dark:border-[#2d2720] text-xs font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#c85a32]/20 text-[#c85a32] flex items-center justify-center shrink-0">
                  <CheckIcon className="w-2.5 h-2.5" />
                </div>
                <span>Intuitive Focus Timer</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#5b8266]/20 text-[#5b8266] flex items-center justify-center shrink-0">
                  <CheckIcon className="w-2.5 h-2.5" />
                </div>
                <span>4-Question Reflection</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-600/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <CheckIcon className="w-2.5 h-2.5" />
                </div>
                <span>Zero Cloud Lock-in</span>
              </div>
            </div>

          </div>

          {/* Right Phone Mockup (Interactive with Real Screenshots) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import { DownloadButtons } from "./DownloadButtons";
import { HeroPhoneMockup } from "./HeroPhoneMockup";
import { CheckIcon } from "./Icons";

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#141210]">
      {/* Background Gradients & Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10">
        <div className="absolute top-[-80px] left-1/4 w-[450px] h-[450px] bg-[#c85a32]/20 rounded-full blur-[130px]" />
        <div className="absolute top-[-40px] right-1/4 w-[450px] h-[450px] bg-[#5b8266]/20 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1e1b18] border border-[#332d26] shadow-sm text-xs sm:text-sm font-medium text-slate-300">
              <Image
                src="/daylog-icon_v8.png"
                alt="DayLog Icon"
                width={20}
                height={20}
                className="rounded-md"
              />
              <span className="font-bold text-[#d97736]">DayLog</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-200 font-semibold">100% Offline-First Focus &amp; Journal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Focus with intention. <br />
              <span className="bg-gradient-to-r from-[#d97736] via-[#ea8c47] to-[#75a082] bg-clip-text text-transparent">
                Reflect with clarity.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A minimalist focus timer and 4-question daily reflection journal designed to help you stay productive and compound habits—with zero cloud lock-in, zero accounts, and complete privacy.
            </p>

            {/* Store Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <DownloadButtons />
            </div>

            {/* Key Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#2d2720] text-xs font-semibold text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#c85a32]/25 text-[#d97736] flex items-center justify-center shrink-0">
                  <CheckIcon className="w-3 h-3" />
                </div>
                <span>Intuitive Focus Timer</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#5b8266]/25 text-[#75a082] flex items-center justify-center shrink-0">
                  <CheckIcon className="w-3 h-3" />
                </div>
                <span>4-Question Reflection</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500/25 text-amber-400 flex items-center justify-center shrink-0">
                  <CheckIcon className="w-3 h-3" />
                </div>
                <span>Zero Cloud Lock-in</span>
              </div>
            </div>

          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}

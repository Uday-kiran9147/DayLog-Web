import React from "react";
import { DownloadButtons } from "./DownloadButtons";
import { StarIcon, SparklesIcon, ShieldCheckIcon } from "./Icons";

export function CtaSection() {
  return (
    <section id="download" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow & accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c85a32]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-gradient-to-tr from-[#231f1c] via-[#1a1714] to-[#2b2520] border border-[#3e3730] p-8 sm:p-12 md:p-16 text-center shadow-2xl relative text-white">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c85a32]/20 border border-[#c85a32]/40 text-[#d97736] text-xs font-bold uppercase tracking-wider mb-6">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Available on iOS & Android</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto mb-6">
            Take control of your focus and daily growth with DayLog today.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Join thousands of developers, students, and writers who practice intentional deep work and daily reflection.
          </p>

          <div className="flex justify-center mb-8">
            <DownloadButtons />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-6 border-t border-[#3e3730]">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <div className="flex text-amber-400">
                <StarIcon className="w-4 h-4 fill-amber-400" />
                <StarIcon className="w-4 h-4 fill-amber-400" />
                <StarIcon className="w-4 h-4 fill-amber-400" />
                <StarIcon className="w-4 h-4 fill-amber-400" />
                <StarIcon className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-slate-200">5.0 Star Offline Experience</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              <span>100% Offline-First • Zero Cloud Lock-in</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

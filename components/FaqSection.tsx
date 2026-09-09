"use client";

import React, { useState } from "react";
import { ChevronDownIcon, SparklesIcon } from "./Icons";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes DayLog different from typical habit or journaling apps?",
      a: "DayLog combines a distraction-free focus timer with a structured 4-question evening reflection. Unlike cloud-heavy apps, DayLog has zero accounts, zero telemetry, and stores 100% of your data locally in an embedded on-device database.",
    },
    {
      q: "How does the 4-question reflection and priority integration work?",
      a: "Each evening, DayLog prompts you with four high-impact questions: (1) What did you accomplish? (2) What slowed you down? (3) What did you improve or learn? (4) What is your top priority for tomorrow? When you open tomorrow's log, yesterday's priority automatically appears so you stay accountable.",
    },
    {
      q: "How does automatic category detection work in the Focus Timer?",
      a: "When you type task names like 'Refactor auth controller' or 'LeetCode dynamic programming' or 'Draft newsletter', DayLog intelligently detects categories like Development, DSA, Writing, or Design and suggests quick-launch chips based on your past activity.",
    },
    {
      q: "How can I backup or migrate my DayLog data to another phone?",
      a: "Navigate to Settings → Data Portability. You can export your entire database (sessions, task logs, and reflections) into a clean, human-readable JSON file. You can import or restore this file on any new device in seconds.",
    },
    {
      q: "Does DayLog support both Dark Mode and Light Mode?",
      a: "Yes. DayLog features a warm terracotta and sage green palette crafted with Material 3. It automatically adapts to your system preferences or lets you manually switch between Light and Dark themes seamlessly.",
    },
    {
      q: "Do daily reminders work when I am offline?",
      a: "Yes. DayLog schedules local notifications (like the 9:00 PM reflection reminder) directly via your operating system alarm manager. They require zero internet connectivity and automatically adjust to your local timezone and daylight saving time.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c85a32]/10 border border-[#c85a32]/30 text-[#c85a32] text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231f1c] dark:text-[#f6f0e6] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Everything you need to know about DayLog, focus sessions, and offline security.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-[#e6dcce] dark:border-[#332d26] bg-white dark:bg-[#1e1b18] hover:border-[#c85a32]/40 transition-colors overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-[#231f1c] dark:text-[#f6f0e6]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#f6f0e6] dark:bg-[#28231e] flex items-center justify-center text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#c85a32]" : ""
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-[#f0e8dc] dark:border-[#28231e]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

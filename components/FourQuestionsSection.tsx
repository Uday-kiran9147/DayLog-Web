import React from "react";
import { BookOpenIcon, SparklesIcon, CheckIcon, ArrowRightIcon } from "./Icons";

export function FourQuestionsSection() {
  const questions = [
    {
      num: "01",
      question: "What did you accomplish today?",
      purpose: "Celebrate meaningful output and completed focus blocks.",
      example: "Finalized the self-serve subscription upgrade workflow with Stripe webhooks and fixed a critical database race condition.",
      color: "border-[#c85a32]/30 bg-[#c85a32]/5",
      badgeColor: "bg-[#c85a32] text-white",
    },
    {
      num: "02",
      question: "What slowed you down or blocked progress?",
      purpose: "Identify distractions, context switches, and blockers to eliminate tomorrow.",
      example: "Context-switching between ad-hoc customer emails and core backend logic during midday. Need to batch communications.",
      color: "border-[#5b8266]/30 bg-[#5b8266]/5",
      badgeColor: "bg-[#5b8266] text-white",
    },
    {
      num: "03",
      question: "What did you improve or learn?",
      purpose: "Compound your daily knowledge into long-term personal mastery.",
      example: "Discovered that indexing composite foreign keys on the session table shaved ~180ms off query latency.",
      color: "border-amber-600/30 bg-amber-600/5",
      badgeColor: "bg-amber-600 text-white",
    },
    {
      num: "04",
      question: "What is your top priority for tomorrow?",
      purpose: "Surface automatically in tomorrow's journal to keep you accountable.",
      example: "Record the launch video and submit build 1.4 to App Store TestFlight.",
      color: "border-indigo-600/30 bg-indigo-600/5",
      badgeColor: "bg-indigo-600 text-white",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f5efe6]/60 dark:bg-[#181512] border-y border-[#e6dcce] dark:border-[#2d2720] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c85a32]/10 border border-[#c85a32]/30 text-[#c85a32] text-xs font-bold uppercase tracking-wider">
            <BookOpenIcon className="w-3.5 h-3.5" />
            <span>Structured Reflection Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#231f1c] dark:text-[#f6f0e6] tracking-tight">
            The 4-Question Daily Method
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            No blank page paralysis. DayLog guides your evening wrap-up with four high-leverage prompts crafted for builders and deep thinkers.
          </p>
        </div>

        {/* 4 Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {questions.map((q, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border ${q.color} backdrop-blur-sm transition-all hover:scale-[1.01] flex flex-col justify-between shadow-sm`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono ${q.badgeColor}`}>
                    Prompt {q.num}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {q.purpose}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#231f1c] dark:text-[#f6f0e6]">
                  {q.question}
                </h3>

                <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#231f1c]/90 border border-black/5 dark:border-white/5 shadow-inner">
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    Real Log Example:
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
                    &ldquo;{q.example}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accountability callout */}
        <div className="mt-10 p-6 rounded-2xl bg-[#c85a32]/10 border border-[#c85a32]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c85a32] text-white flex items-center justify-center shrink-0 shadow-md">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#231f1c] dark:text-[#f6f0e6]">
                Yesterday&apos;s Priority Integration
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Today&apos;s journal automatically surfaces yesterday&apos;s planned priorities to keep your accountability loop unbroken.
              </p>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-xl bg-[#c85a32] text-white text-xs font-bold shrink-0">
            Automatic & Offline
          </span>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import {
  TerminalIcon,
  GraduationCapIcon,
  PaletteIcon,
  ShieldCheckIcon,
  CheckIcon,
  SparklesIcon,
} from "./Icons";

export function TargetAudienceSection() {
  const audiences = [
    {
      title: "Software Engineers & Indie Hackers",
      icon: TerminalIcon,
      accent: "text-[#c85a32]",
      bgAccent: "bg-[#c85a32]/10 border-[#c85a32]/20",
      description:
        "Track coding sprints, debug sessions, and side project milestones. Auto-detects Development, Tech, and System Architecture categories.",
      tags: ["#Development", "#SideProjects", "#DSA", "#Debugging"],
    },
    {
      title: "Students & Lifelong Learners",
      icon: GraduationCapIcon,
      accent: "text-[#5b8266]",
      bgAccent: "bg-[#5b8266]/10 border-[#5b8266]/20",
      description:
        "Structure study blocks for certifications, exams, reading, and research without notifications interrupting your focus flow.",
      tags: ["#SystemDesign", "#Reading", "#Learning", "#Algorithms"],
    },
    {
      title: "Writers, Designers & Creators",
      icon: PaletteIcon,
      accent: "text-amber-600 dark:text-amber-400",
      bgAccent: "bg-amber-600/10 border-amber-600/20",
      description:
        "Carve out distraction-free creative blocks for UI/UX drafting, writing articles, video editing, and marketing campaigns.",
      tags: ["#Creative", "#Design", "#Writing", "#Content"],
    },
    {
      title: "Deep Work & Privacy Seekers",
      icon: ShieldCheckIcon,
      accent: "text-emerald-600 dark:text-emerald-400",
      bgAccent: "bg-emerald-600/10 border-emerald-600/20",
      description:
        "Zero accounts, zero logins, zero telemetry. Your data stays 100% on your device with clean JSON backups you control.",
      tags: ["#DeepWork", "#100%Offline", "#ZeroCloud", "#PrivacyFirst"],
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5b8266]/10 border border-[#5b8266]/30 text-[#5b8266] text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Target Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#231f1c] dark:text-[#f6f0e6] tracking-tight">
            Crafted for High-Output Creators
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Whether you&apos;re shipping code, writing your next chapter, or preparing for interviews, DayLog is your frictionless focus ally.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#1e1b18] border border-[#e6dcce] dark:border-[#332d26] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.bgAccent} border flex items-center justify-center ${item.accent} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#231f1c] dark:text-[#f6f0e6]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-[#f0e8dc] dark:border-[#2d2720]">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-[#f6f0e6] dark:bg-[#28231e] text-[10px] font-mono font-medium text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

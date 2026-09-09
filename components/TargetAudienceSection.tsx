import React from "react";
import {
  TerminalIcon,
  GraduationCapIcon,
  PenToolIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "./Icons";

export function TargetAudienceSection() {
  const audiences = [
    {
      title: "Software Engineers & Indie Hackers",
      icon: TerminalIcon,
      accent: "text-[#d97736]",
      bgAccent: "bg-[#d97736]/15 border-[#d97736]/30",
      description:
        "Track coding sprints, debug sessions, and side project milestones. Auto-detects Development, Tech, and System Architecture categories.",
      tags: ["#Development", "#SideProjects", "#DSA", "#Debugging"],
    },
    {
      title: "Students & Lifelong Learners",
      icon: GraduationCapIcon,
      accent: "text-[#75a082]",
      bgAccent: "bg-[#75a082]/15 border-[#75a082]/30",
      description:
        "Structure study blocks for certifications, exams, reading, and research without notifications interrupting your focus flow.",
      tags: ["#SystemDesign", "#Reading", "#Learning", "#Algorithms"],
    },
    {
      title: "Writers, Designers & Creators",
      icon: PenToolIcon,
      accent: "text-amber-400",
      bgAccent: "bg-amber-400/15 border-amber-400/30",
      description:
        "Carve out distraction-free creative blocks for UI/UX drafting, writing articles, video editing, and marketing campaigns.",
      tags: ["#Creative", "#Design", "#Writing", "#Content"],
    },
    {
      title: "Deep Work & Privacy Seekers",
      icon: ShieldCheckIcon,
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-400/15 border-emerald-400/30",
      description:
        "Zero accounts, zero logins, zero telemetry. Your data stays 100% on your device with clean JSON backups you control.",
      tags: ["#DeepWork", "#100%Offline", "#ZeroCloud", "#PrivacyFirst"],
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#141210]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5b8266]/15 border border-[#5b8266]/30 text-[#75a082] text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Target Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Crafted for High-Output Creators
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
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
                className="p-6 rounded-3xl bg-[#1e1b18] border border-[#332d26] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-[#c85a32]/40"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.bgAccent} border flex items-center justify-center ${item.accent} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-[#2d2720]">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-[#28231e] text-[10px] font-mono font-medium text-slate-300"
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

import React from "react";
import {
  TimerIcon,
  BookOpenIcon,
  BarChartIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  BellIcon,
  PaletteIcon,
  SparklesIcon,
} from "./Icons";

export function FeatureSection() {
  const features = [
    {
      title: "Intuitive Focus Timer",
      badge: "Deep Work",
      description:
        "Start, pause, resume, and log dedicated focus sessions with a clean, distraction-free timer. Includes smart suggestions to quickly relaunch recent tasks and automatic category detection as you type.",
      icon: TimerIcon,
      accent: "text-[#d97736]",
      bgAccent: "bg-[#d97736]/15 border-[#d97736]/30",
    },
    {
      title: "Structured Daily Journal",
      badge: "Accountability",
      description:
        "Four-question guided reflection covering wins, blockers, key learnings, and tomorrow's top priority. Automatically surfaces yesterday's planned priority to keep your momentum unbroken.",
      icon: BookOpenIcon,
      accent: "text-[#75a082]",
      bgAccent: "bg-[#75a082]/15 border-[#75a082]/30",
    },
    {
      title: "Insightful Charts & Analytics",
      badge: "Trends",
      description:
        "Visualize your productive hours with daily focus bar charts, weekly domain breakdowns (Software, Design, Writing, Deep Work), and top focus area distribution at a glance.",
      icon: BarChartIcon,
      accent: "text-amber-400",
      bgAccent: "bg-amber-400/15 border-amber-400/30",
    },
    {
      title: "100% Private & Offline-First",
      badge: "Zero Tracking",
      description:
        "Zero accounts, zero logins, and zero cloud lock-in. All task logs and reflections stay strictly on your device inside a lightning-fast local embedded database.",
      icon: ShieldCheckIcon,
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-400/15 border-emerald-400/30",
    },
    {
      title: "Data Portability & Local Backups",
      badge: "Full Ownership",
      description:
        "Export your complete database (tasks, sessions, reflections) into clean, human-readable JSON files anytime. Restore or migrate to a new phone in seconds with native file picker support.",
      icon: DatabaseIcon,
      accent: "text-cyan-400",
      bgAccent: "bg-cyan-400/15 border-cyan-400/30",
    },
    {
      title: "Timezone-Aligned Daily Reminders",
      badge: "Offline Cron",
      description:
        "Gentle local 9:00 PM wrap-up notifications to prompt your evening reflection. Fully offline notification scheduling that respects device timezones and daylight saving time.",
      icon: BellIcon,
      accent: "text-rose-400",
      bgAccent: "bg-rose-400/15 border-rose-400/30",
    },
    {
      title: "Terracotta & Sage Material 3",
      badge: "Material Design",
      description:
        "Warm terracotta & sage green aesthetic crafted with Material 3 principles. Complete Dark Mode and Light Mode support that seamlessly adapts to your device preferences.",
      icon: PaletteIcon,
      accent: "text-purple-400",
      bgAccent: "bg-purple-400/15 border-purple-400/30",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative bg-[#141210]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d97736]/15 border border-[#d97736]/30 text-[#d97736] text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything you need for intentional deep work.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            DayLog blends a distraction-free focus timer with an evening reflection ritual—grounded in complete digital privacy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#1e1b18] border border-[#332d26] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-[#c85a32]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl ${feature.bgAccent} border flex items-center justify-center ${feature.accent} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold font-mono px-2.5 py-1 rounded-full bg-[#28231e] text-slate-300">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

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
      accent: "text-[#c85a32]",
      bgAccent: "bg-[#c85a32]/10 border-[#c85a32]/25",
    },
    {
      title: "Structured Daily Journal",
      badge: "Accountability",
      description:
        "Four-question guided reflection covering wins, blockers, key learnings, and tomorrow's top priority. Automatically surfaces yesterday's planned priority to keep your momentum unbroken.",
      icon: BookOpenIcon,
      accent: "text-[#5b8266]",
      bgAccent: "bg-[#5b8266]/10 border-[#5b8266]/25",
    },
    {
      title: "Insightful Charts & Analytics",
      badge: "Trends",
      description:
        "Visualize your productive hours with daily focus bar charts, weekly domain breakdowns (Software, Design, Writing, Deep Work), and top focus area distribution at a glance.",
      icon: BarChartIcon,
      accent: "text-amber-600 dark:text-amber-400",
      bgAccent: "bg-amber-600/10 border-amber-600/25",
    },
    {
      title: "100% Private & Offline-First",
      badge: "Zero Tracking",
      description:
        "Zero accounts, zero logins, and zero cloud lock-in. All task logs and reflections stay strictly on your device inside a lightning-fast local embedded database.",
      icon: ShieldCheckIcon,
      accent: "text-emerald-600 dark:text-emerald-400",
      bgAccent: "bg-emerald-600/10 border-emerald-600/25",
    },
    {
      title: "Data Portability & Local Backups",
      badge: "Full Ownership",
      description:
        "Export your complete database (tasks, sessions, reflections) into clean, human-readable JSON files anytime. Restore or migrate to a new phone in seconds with native file picker support.",
      icon: DatabaseIcon,
      accent: "text-cyan-600 dark:text-cyan-400",
      bgAccent: "bg-cyan-600/10 border-cyan-600/25",
    },
    {
      title: "Timezone-Aligned Daily Reminders",
      badge: "Offline Cron",
      description:
        "Gentle local 9:00 PM wrap-up notifications to prompt your evening reflection. Fully offline notification scheduling that respects device timezones and daylight saving time.",
      icon: BellIcon,
      accent: "text-rose-600 dark:text-rose-400",
      bgAccent: "bg-rose-600/10 border-rose-600/25",
    },
    {
      title: "Terracotta & Sage Material 3",
      badge: "Material Design",
      description:
        "Warm terracotta & sage green aesthetic crafted with Material 3 principles. Complete Dark Mode and Light Mode support that seamlessly adapts to your device preferences.",
      icon: PaletteIcon,
      accent: "text-purple-600 dark:text-purple-400",
      bgAccent: "bg-purple-600/10 border-purple-600/25",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c85a32]/10 border border-[#c85a32]/30 text-[#c85a32] text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#231f1c] dark:text-[#f6f0e6] tracking-tight">
            Everything you need for intentional deep work.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
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
                className="p-8 rounded-3xl bg-white dark:bg-[#1e1b18] border border-[#e6dcce] dark:border-[#332d26] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl ${feature.bgAccent} border flex items-center justify-center ${feature.accent} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold font-mono px-2.5 py-1 rounded-full bg-[#f6f0e6] dark:bg-[#28231e] text-slate-700 dark:text-slate-300">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#231f1c] dark:text-[#f6f0e6] mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
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

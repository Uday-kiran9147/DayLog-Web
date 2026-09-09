"use client";

import React, { useState } from "react";
import {
  BookOpenIcon,
  SmileIcon,
  CalendarIcon,
  ShieldCheckIcon,
  CheckIcon,
  SparklesIcon,
} from "./Icons";

export function AppPreviewSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      id: "journal",
      title: "Daily Journal",
      icon: BookOpenIcon,
      heading: "Write without friction or clutter.",
      description:
        "Quickly record whatever is on your mind. DayLog automatically timestamps your entries, structures them by day, and lets you attach tags and mood indicators.",
      bullets: [
        "Fast one-tap quick notes",
        "Tag categorization (#Work, #Health, #Ideas)",
        "Daily reflection prompts",
      ],
      previewContent: {
        badge: "Journal View",
        color: "from-indigo-500/20 to-purple-500/20",
        entries: [
          { time: "09:00 AM", title: "Morning Planning", body: "3 key priorities for today: finish project, 30 min run, call family.", tag: "Focus" },
          { time: "02:30 PM", title: "Breakthrough moment", body: "Solved the architecture challenge by decoupling the event stream.", tag: "Work" },
          { time: "09:15 PM", title: "Evening Reflection", body: "Grateful for quiet evening reading and tea.", tag: "Gratitude" },
        ],
      },
    },
    {
      id: "analytics",
      title: "Mood Analytics",
      icon: SmileIcon,
      heading: "Understand patterns in your mental well-being.",
      description:
        "Discover what days and activities trigger positive energy or stress. DayLog turns your daily inputs into clean visual charts and monthly summaries.",
      bullets: [
        "7-day and 30-day mood curves",
        "Activity vs. Mood correlation metrics",
        "Habit streak milestones",
      ],
      previewContent: {
        badge: "Mood Heatmap & Stats",
        color: "from-pink-500/20 to-rose-500/20",
        stats: [
          { label: "Average Mood", val: "4.8 / 5.0", change: "+12% this week" },
          { label: "Current Streak", val: "14 Days", change: "Personal best!" },
          { label: "Top Trigger", val: "Outdoor Runs", change: "95% positive" },
        ],
      },
    },
    {
      id: "calendar",
      title: "Calendar & Search",
      icon: CalendarIcon,
      heading: "Never lose a precious memory or idea.",
      description:
        "Jump directly to any date in the interactive calendar view. Instant full-text search helps you find notes from months ago in milliseconds.",
      bullets: [
        "Color-coded calendar mood matrix",
        "Lightning-fast offline search",
        "Export logs as PDF, JSON, or TXT",
      ],
      previewContent: {
        badge: "Calendar Matrix",
        color: "from-cyan-500/20 to-blue-500/20",
        calendarDays: [
          "Mon: 😊", "Tue: ⚡", "Wed: 🧘", "Thu: ✨", "Fri: 🥳", "Sat: 🌿", "Sun: 🌙"
        ],
      },
    },
    {
      id: "privacy",
      title: "Privacy First",
      icon: ShieldCheckIcon,
      heading: "Your data stays yours. Always.",
      description:
        "We believe journals are deeply private. DayLog stores your logs locally on your device, with optional biometric FaceID / Fingerprint locking.",
      bullets: [
        "On-device encrypted database",
        "Biometric app lock (FaceID / TouchID)",
        "Zero server trackers analyzing your logs",
      ],
      previewContent: {
        badge: "Security Vault",
        color: "from-emerald-500/20 to-teal-500/20",
        vaultStatus: "Status: Encrypted (AES-256) • Biometrics Armed",
      },
    },
  ];

  const current = tabs[activeTab];

  return (
    <section id="preview" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Interactive Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See DayLog in Action
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Intuitive navigation, minimalist interface, and powerful insights tailored for daily use.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          {/* Left Text Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
              <span>{current.previewContent.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {current.heading}
            </h3>
            <p className="text-slate-400 text-base leading-relaxed">
              {current.description}
            </p>
            <div className="space-y-3 pt-2">
              {current.bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Simulated Screen */}
          <div className="lg:col-span-6">
            <div
              className={`rounded-2xl p-6 border border-slate-700/60 bg-gradient-to-br ${current.previewContent.color} backdrop-blur-md shadow-inner min-h-[320px] flex flex-col justify-center`}
            >
              {activeTab === 0 && (
                <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                  <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">
                    Live Journal Feed Preview
                  </p>
                  {current.previewContent.entries?.map((entry, eIdx) => (
                    <div key={eIdx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs">
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span className="font-semibold text-slate-200">{entry.title}</span>
                        <span className="text-indigo-400">{entry.time}</span>
                      </div>
                      <p className="text-slate-300">{entry.body}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 1 && (
                <div className="space-y-4 bg-slate-900/90 p-5 rounded-xl border border-slate-800">
                  <p className="text-xs font-semibold text-pink-400 uppercase tracking-wide">
                    Weekly Mood Analytics
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {current.previewContent.stats?.map((stat, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-center">
                        <p className="text-[11px] text-slate-400">{stat.label}</p>
                        <p className="text-base font-bold text-white mt-1">{stat.val}</p>
                        <p className="text-[10px] text-emerald-400 mt-0.5">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  {/* Visual Bar chart */}
                  <div className="pt-2">
                    <div className="flex items-end justify-between h-16 px-2 gap-2 border-b border-slate-800 pb-1">
                      <div className="w-full bg-indigo-500/40 rounded-t h-[60%]" />
                      <div className="w-full bg-indigo-500/60 rounded-t h-[75%]" />
                      <div className="w-full bg-indigo-500/80 rounded-t h-[90%]" />
                      <div className="w-full bg-indigo-500 rounded-t h-[100%]" />
                      <div className="w-full bg-indigo-500/70 rounded-t h-[80%]" />
                      <div className="w-full bg-indigo-500/90 rounded-t h-[95%]" />
                      <div className="w-full bg-purple-500 rounded-t h-[100%]" />
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-500 pt-1">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-3 bg-slate-900/90 p-5 rounded-xl border border-slate-800 text-center">
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                    September 2026 Calendar Mood
                  </p>
                  <div className="grid grid-cols-7 gap-1.5 pt-2">
                    {current.previewContent.calendarDays?.map((d, dIdx) => (
                      <div key={dIdx} className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11px]">
                        {d}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 pt-2">
                    Tap any day to view notes, recordings, and media instantly.
                  </p>
                </div>
              )}

              {activeTab === 3 && (
                <div className="space-y-4 bg-slate-900/90 p-6 rounded-xl border border-slate-800 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Biometric Vault Armed</h4>
                  <p className="text-xs text-slate-300">
                    {current.previewContent.vaultStatus}
                  </p>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Zero third-party tracking on personal logs. Export or delete your entire history at any time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

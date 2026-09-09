import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheckIcon, LockIcon, ArrowRightIcon, DatabaseIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Privacy Policy — DayLog Focus Timer & Journal",
  description:
    "Privacy Policy for DayLog mobile app. Learn how your data is 100% offline-first, stored locally on your device with zero cloud accounts, and how Google AdMob ads work.",
};

export default function PrivacyPage() {
  const lastUpdated = "September 9, 2026";

  return (
    <div className="py-16 md:py-24 bg-[#faf7f2] dark:bg-[#141210]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-4 border-b border-[#e6dcce] dark:border-[#2d2720] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5b8266]/10 border border-[#5b8266]/30 text-[#5b8266] text-xs font-bold">
            <ShieldCheckIcon className="w-3.5 h-3.5" />
            <span>100% Offline-First Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#231f1c] dark:text-[#f6f0e6] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Last Updated: <span className="text-[#231f1c] dark:text-slate-200 font-bold">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          
          {/* Summary Box */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#1e1b18] border border-[#e6dcce] dark:border-[#332d26] space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-[#c85a32] font-bold text-base">
              <LockIcon className="w-5 h-5" />
              <span>Our Zero-Cloud Privacy Commitment</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              DayLog is engineered on a strict <strong>100% offline-first</strong> philosophy. We require <strong>zero accounts or logins</strong>. All your focus sessions, category configurations, daily reflection logs, and task histories stay strictly on your physical device in an embedded local database.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#231f1c] dark:text-[#f6f0e6]">
              1. Information Handling &amp; Local Storage
            </h2>
            <p>
              When you use the DayLog mobile application:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <strong className="text-[#231f1c] dark:text-slate-200">Focus Sessions &amp; Tasks:</strong> Saved locally on your device. We do not have servers to receive or store your tasks or focus logs.
              </li>
              <li>
                <strong className="text-[#231f1c] dark:text-slate-200">Daily Reflection Entries:</strong> The answers to your 4 reflection questions are stored exclusively in your local database.
              </li>
              <li>
                <strong className="text-[#231f1c] dark:text-slate-200">Data Portability &amp; Backups:</strong> When you export your data, a standard JSON file is generated locally and handed directly to your device&apos;s native file picker. We never see or hold copies of your backups.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#231f1c] dark:text-[#f6f0e6]">
              2. Third-Party Advertising (Google AdMob)
            </h2>
            <p>
              To support continuous updates and maintain DayLog as a free application, we display advertisements provided by <strong>Google AdMob</strong>.
            </p>
            <p>
              Google AdMob may automatically collect non-personal device information according to Google&apos;s Privacy Policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Device identifier (e.g. Google Advertising ID or Apple IDFA)</li>
              <li>General location / IP address</li>
              <li>Ad interaction, performance metrics, and crash diagnostics</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400">
              AdMob does not have access to your personal journal texts or timer logs. Learn more at{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noreferrer"
                className="text-[#c85a32] underline hover:text-[#b84f29]"
              >
                Google Privacy &amp; Terms
              </a>.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#231f1c] dark:text-[#f6f0e6]">
              3. Device Permissions &amp; Offline Notifications
            </h2>
            <p>
              DayLog requests minimal device permissions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <strong className="text-[#231f1c] dark:text-slate-200">Notifications:</strong> Used strictly to schedule your local 9:00 PM evening wrap-up reminder. Handled completely on-device without remote push servers.
              </li>
              <li>
                <strong className="text-[#231f1c] dark:text-slate-200">Storage / File Access:</strong> Used only when you initiate a manual JSON backup export or file import.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#231f1c] dark:text-[#f6f0e6]">
              4. Data Deletion
            </h2>
            <p>
              Because your data is strictly local:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>You can reset or clear all logs inside App Settings → Clear Data at any time.</li>
              <li>Uninstalling the app immediately deletes all stored data and SQLite database files from your device.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-[#e6dcce] dark:border-[#2d2720] pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#231f1c] dark:text-[#f6f0e6]">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or DayLog:
            </p>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1e1b18] border border-[#e6dcce] dark:border-[#332d26] inline-block shadow-sm">
              <p className="text-[#231f1c] dark:text-[#f6f0e6] font-bold">DayLog Privacy Desk</p>
              <p className="text-[#c85a32] text-sm mt-0.5">Email: thehustler.dev@gmail.com</p>
            </div>
          </section>

        </div>

        {/* Bottom nav */}
        <div className="mt-12 pt-6 border-t border-[#e6dcce] dark:border-[#2d2720] flex justify-between items-center text-sm">
          <Link href="/" className="text-[#c85a32] hover:underline font-semibold">
            ← Back to Home
          </Link>
          <Link href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-[#c85a32] flex items-center gap-1 font-semibold">
            <span>Read Terms of Service</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

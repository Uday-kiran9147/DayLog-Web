import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Terms of Service — DayLog Focus Timer & Journal",
  description: "Terms and conditions for using DayLog mobile application.",
};

export default function TermsPage() {
  const lastUpdated = "September 9, 2026";

  return (
    <div className="py-16 md:py-24 bg-[#141210]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-4 border-b border-[#2d2720] pb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">
            Last Updated: <span className="text-white font-bold">{lastUpdated}</span>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By installing, downloading, or using the <strong>DayLog</strong> mobile application or visiting our website, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              2. App Use &amp; Local Ownership
            </h2>
            <p>
              DayLog provides an offline-first focus timer and 4-question reflection journal. You maintain 100% ownership over all logs, data, and reflections created within the app. Because data is stored locally, you are responsible for maintaining backups using the built-in JSON export feature.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              3. Advertisements
            </h2>
            <p>
              DayLog integrates Google AdMob for in-app banner/interstitial advertisements. Advertising is subject to Google&apos;s ad policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              4. Disclaimers
            </h2>
            <p className="text-slate-300">
              The application is provided &quot;AS IS&quot; without warranties of any kind. DayLog is a self-reflection and productivity tool and does not provide professional medical, health, or psychological therapy services.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#2d2720] pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              5. Contact
            </h2>
            <p>
              For legal inquiries or questions regarding these terms, reach out to:
            </p>
            <p className="text-[#d97736] font-bold">thehustler.dev@gmail.com</p>
          </section>

        </div>

        {/* Bottom nav */}
        <div className="mt-12 pt-6 border-t border-[#2d2720] flex justify-between items-center text-sm">
          <Link href="/" className="text-[#d97736] hover:underline font-semibold">
            ← Back to Home
          </Link>
          <Link href="/privacy" className="text-slate-400 hover:text-white flex items-center gap-1 font-semibold">
            <span>Read Privacy Policy</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CodeIcon, CheckIcon, ExternalLinkIcon, ShieldCheckIcon } from "./Icons";

export function AdMobInstructionCard() {
  const [copied, setCopied] = useState(false);
  const snippet = "google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0";

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#e6dcce] dark:border-[#332d26] bg-white dark:bg-[#1e1b18] p-6 sm:p-8 md:p-10 shadow-lg">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#f0e8dc] dark:border-[#2d2720]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c85a32]/10 text-[#c85a32] text-xs font-bold mb-2">
                <ShieldCheckIcon className="w-3.5 h-3.5" />
                <span>Google AdMob Integration</span>
              </div>
              <h3 className="text-2xl font-bold text-[#231f1c] dark:text-[#f6f0e6]">
                Google AdMob app-ads.txt Hosting
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                This website is configured to host your authorized seller verification file for AdMob crawler validation.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/app-ads.txt"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-[#231f1c] text-white hover:bg-[#1a1714] text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <ExternalLinkIcon className="w-3.5 h-3.5" />
                <span>Open /app-ads.txt</span>
              </Link>
            </div>
          </div>

          {/* Code snippet display */}
          <div className="mt-6 space-y-4">
            <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">
              Current File Syntax in <code className="text-[#c85a32] bg-[#f6f0e6] dark:bg-[#28231e] px-1.5 py-0.5 rounded font-mono">public/app-ads.txt</code>:
            </p>

            <div className="relative rounded-2xl bg-[#141210] border border-[#2d2720] p-4 font-mono text-xs text-[#d97736] flex items-center justify-between overflow-x-auto shadow-inner">
              <code>{snippet}</code>
              <button
                onClick={handleCopy}
                className="ml-4 px-3 py-1.5 rounded-lg bg-[#231f1c] hover:bg-[#2c2723] text-slate-200 text-xs font-sans font-bold shrink-0 flex items-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <CodeIcon className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick 3-step setup guide */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#faf7f2] dark:bg-[#231f1c] border border-[#e6dcce] dark:border-[#2d2720] space-y-1.5">
                <span className="font-bold text-[#c85a32] text-sm">1. Replace ID</span>
                <p className="text-slate-600 dark:text-slate-400">
                  Update <code className="text-slate-800 dark:text-slate-200 font-mono">pub-XXXXXXXXXXXXXXXX</code> in <code className="text-slate-800 dark:text-slate-200 font-mono">public/app-ads.txt</code> with your Google AdMob Publisher ID.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf7f2] dark:bg-[#231f1c] border border-[#e6dcce] dark:border-[#2d2720] space-y-1.5">
                <span className="font-bold text-[#5b8266] text-sm">2. Link Store URL</span>
                <p className="text-slate-600 dark:text-slate-400">
                  Add this website domain to your Google Play Console &amp; Apple App Store Connect developer listing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf7f2] dark:bg-[#231f1c] border border-[#e6dcce] dark:border-[#2d2720] space-y-1.5">
                <span className="font-bold text-amber-600 dark:text-amber-400 text-sm">3. Automatic Crawl</span>
                <p className="text-slate-600 dark:text-slate-400">
                  Google AdMob crawlers check <code className="text-slate-800 dark:text-slate-200 font-mono">/app-ads.txt</code> automatically within 24 hours to verify app inventory.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

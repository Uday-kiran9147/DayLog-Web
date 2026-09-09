import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon, CodeIcon } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5efe6] dark:bg-[#141210] border-t border-[#e6dcce] dark:border-[#2d2720] text-slate-600 dark:text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/daylog-icon_v8.png"
                alt="DayLog App Icon"
                width={32}
                height={32}
                className="rounded-xl shadow-sm"
              />
              <span className="text-xl font-black tracking-tight text-[#231f1c] dark:text-[#f6f0e6]">
                DayLog
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm text-sm leading-relaxed">
              A minimalist, privacy-first focus timer and 4-question daily reflection journal. 100% offline-first with zero accounts and zero telemetry.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <span>Crafted with</span>
              <HeartIcon className="w-3.5 h-3.5 text-[#c85a32] fill-[#c85a32]" />
              <span>in warm terracotta &amp; sage green.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[#231f1c] dark:text-[#f6f0e6] font-bold text-xs tracking-wider uppercase">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#features"
                  className="hover:text-[#c85a32] transition-colors"
                >
                  Features &amp; Focus Timer
                </Link>
              </li>
              <li>
                <Link
                  href="/#screenshots"
                  className="hover:text-[#c85a32] transition-colors"
                >
                  App Screenshots
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#c85a32] transition-colors"
                >
                  FAQ &amp; Offline Storage
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-[#c85a32] transition-colors"
                >
                  Help Desk &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Links */}
          <div className="space-y-3">
            <h4 className="text-[#231f1c] dark:text-[#f6f0e6] font-bold text-xs tracking-wider uppercase">
              Legal &amp; Privacy
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#c85a32] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#c85a32] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-[#c85a32] transition-colors"
                >
                  Help Desk &amp; Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e6dcce] dark:border-[#2d2720] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} DayLog App. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-700 dark:hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-700 dark:hover:text-slate-300">
              Terms
            </Link>
            <Link href="/support" className="hover:text-slate-700 dark:hover:text-slate-300">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

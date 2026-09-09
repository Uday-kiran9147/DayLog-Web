"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MenuIcon,
  CloseIcon,
  SmartphoneIcon,
  CodeIcon,
} from "./Icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#faf7f2]/90 dark:bg-[#141210]/90 border-b border-[#e6dcce]/80 dark:border-[#2d2720] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/daylog-icon_v8.png"
              alt="DayLog App Icon"
              width={40}
              height={40}
              className="rounded-2xl shadow-md group-hover:scale-105 transition-transform"
              priority
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#231f1c] dark:text-[#f6f0e6] group-hover:text-[#c85a32] transition-colors">
                DayLog
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium -mt-1">
                Focus Timer & Journal
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/#features"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#c85a32] dark:hover:text-[#c85a32] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#screenshots"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#c85a32] dark:hover:text-[#c85a32] transition-colors"
            >
              Screenshots
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#c85a32] dark:hover:text-[#c85a32] transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#c85a32] dark:hover:text-[#c85a32] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#c85a32] dark:hover:text-[#c85a32] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#c85a32] dark:hover:text-[#c85a32] transition-colors"
            >
              Support
            </Link>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download"
              className="px-4 py-2 rounded-xl bg-[#c85a32] hover:bg-[#b84f29] text-white text-sm font-bold shadow-md shadow-[#c85a32]/25 hover:shadow-[#c85a32]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <SmartphoneIcon className="w-4 h-4" />
              <span>Get the App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-[#f3ece1] dark:hover:bg-[#1f1b17] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e6dcce] dark:border-[#2d2720] bg-[#faf7f2]/95 dark:bg-[#181512]/95 px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#f3ece1] dark:hover:bg-[#1e1b18] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#screenshots"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#f3ece1] dark:hover:bg-[#1e1b18] transition-colors"
          >
            Screenshots
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#f3ece1] dark:hover:bg-[#1e1b18] transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#f3ece1] dark:hover:bg-[#1e1b18] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#f3ece1] dark:hover:bg-[#1e1b18] transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/support"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#f3ece1] dark:hover:bg-[#1e1b18] transition-colors"
          >
            Support & Help
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-[#c85a32] text-white font-bold shadow-md"
            >
              Get the App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

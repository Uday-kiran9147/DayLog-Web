"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MailIcon, CheckIcon, ShieldCheckIcon, SparklesIcon, CodeIcon, DatabaseIcon } from "@/components/Icons";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Question",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 bg-[#faf7f2] dark:bg-[#141210]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c85a32]/10 border border-[#c85a32]/30 text-[#c85a32] text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Support &amp; Community</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#231f1c] dark:text-[#f6f0e6] tracking-tight">
            How can we help you?
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Find answers to common troubleshooting questions or message the DayLog team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Troubleshooting Guides */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#1e1b18] border border-[#e6dcce] dark:border-[#332d26] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#c85a32]/10 text-[#c85a32] flex items-center justify-center">
                <MailIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#231f1c] dark:text-[#f6f0e6]">Email Support</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We typically respond within 24 business hours to help resolve any issues.
              </p>
              <a
                href="mailto:thehustler.dev@gmail.com"
                className="inline-block text-[#c85a32] font-bold text-sm hover:underline"
              >
                thehustler.dev@gmail.com
              </a>
            </div>

            {/* Quick Solutions */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#1e1b18] border border-[#e6dcce] dark:border-[#332d26] space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-[#231f1c] dark:text-[#f6f0e6]">Quick Solutions</h3>
              
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#f6f0e6] dark:bg-[#231f1c] border border-[#e6dcce] dark:border-[#2d2720]">
                  <p className="font-bold text-[#231f1c] dark:text-slate-200">How to Export JSON Backup</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Open Settings → Data Portability → Tap &quot;Export JSON&quot; and save to Files or Google Drive.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#f6f0e6] dark:bg-[#231f1c] border border-[#e6dcce] dark:border-[#2d2720]">
                  <p className="font-bold text-[#231f1c] dark:text-slate-200">9:00 PM Notifications Not Arriving</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Ensure battery optimization exceptions are enabled for DayLog in Android/iOS settings.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#f6f0e6] dark:bg-[#231f1c] border border-[#e6dcce] dark:border-[#2d2720]">
                  <p className="font-bold text-[#231f1c] dark:text-slate-200">Restoring Data to New Phone</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Settings → Data Portability → &quot;Import JSON&quot; and pick your saved backup file.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#1e1b18] border border-[#e6dcce] dark:border-[#332d26] shadow-md">
              <h2 className="text-2xl font-bold text-[#231f1c] dark:text-[#f6f0e6] mb-2">Send a Message</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                Have a feature idea, question, or bug report? Let us know.
              </p>

              {submitted ? (
                <div className="p-8 rounded-3xl bg-[#5b8266]/10 border border-[#5b8266]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#5b8266]/20 text-[#5b8266] flex items-center justify-center mx-auto">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#231f1c] dark:text-[#f6f0e6]">Message Received!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Thank you! We will get back to you at{" "}
                    <span className="text-[#5b8266] font-bold">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", category: "General Question", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-[#231f1c] text-white hover:bg-[#1a1714] text-xs font-bold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex"
                        className="w-full px-4 py-2.5 rounded-2xl bg-[#faf7f2] dark:bg-[#141210] border border-[#e6dcce] dark:border-[#2d2720] text-[#231f1c] dark:text-[#f6f0e6] text-sm focus:outline-none focus:border-[#c85a32]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-2xl bg-[#faf7f2] dark:bg-[#141210] border border-[#e6dcce] dark:border-[#2d2720] text-[#231f1c] dark:text-[#f6f0e6] text-sm focus:outline-none focus:border-[#c85a32]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Topic</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#faf7f2] dark:bg-[#141210] border border-[#e6dcce] dark:border-[#2d2720] text-[#231f1c] dark:text-[#f6f0e6] text-sm focus:outline-none focus:border-[#c85a32]"
                    >
                      <option>General Question</option>
                      <option>Bug Report</option>
                      <option>Feature Request</option>
                      <option>Data Backup / JSON Import</option>
                      <option>Privacy Question</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you need help with..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#faf7f2] dark:bg-[#141210] border border-[#e6dcce] dark:border-[#2d2720] text-[#231f1c] dark:text-[#f6f0e6] text-sm focus:outline-none focus:border-[#c85a32] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-[#c85a32] hover:bg-[#b84f29] text-white font-bold text-sm shadow-md shadow-[#c85a32]/25 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    Send Support Request
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

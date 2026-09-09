import React from "react";
import { AppleStoreIcon, GooglePlayIcon } from "./Icons";

interface DownloadButtonsProps {
  className?: string;
  appleUrl?: string;
  googleUrl?: string;
}

export function DownloadButtons({
  className = "",
  appleUrl = "#download",
  googleUrl = "#download",
}: DownloadButtonsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${className}`}>
      {/* App Store Button */}
      <a
        href={appleUrl}
        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#231f1c] hover:bg-[#1a1714] text-white border border-[#3e3730] shadow-md hover:shadow-[#c85a32]/10 hover:border-[#c85a32]/50 hover:scale-[1.02] active:scale-[0.98] transition-all group"
      >
        <AppleStoreIcon className="w-6 h-6 text-white fill-white group-hover:text-[#c85a32] transition-colors" />
        <div className="text-left">
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none">
            Download on the
          </p>
          <p className="text-base font-bold text-white leading-tight">
            App Store
          </p>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href={googleUrl}
        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#231f1c] hover:bg-[#1a1714] text-white border border-[#3e3730] shadow-md hover:shadow-[#c85a32]/10 hover:border-[#c85a32]/50 hover:scale-[1.02] active:scale-[0.98] transition-all group"
      >
        <GooglePlayIcon className="w-6 h-6 text-white fill-white group-hover:text-[#c85a32] transition-colors" />
        <div className="text-left">
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none">
            GET IT ON
          </p>
          <p className="text-base font-bold text-white leading-tight">
            Google Play
          </p>
        </div>
      </a>
    </div>
  );
}

import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { FourQuestionsSection } from "@/components/FourQuestionsSection";
import { FeatureSection } from "@/components/FeatureSection";
import { ScreenshotsSection } from "@/components/ScreenshotsSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="relative">
      {/* 1. Hero Section with Interactive Screen Preview */}
      <HeroSection />

      {/* 2. Target Audience (Developers, Students, Creators, Deep Thinkers) */}
      <TargetAudienceSection />

      {/* 3. The 4-Question Daily Reflection Method */}
      <FourQuestionsSection />

      {/* 4. Core Features Grid */}
      <FeatureSection />

      {/* 5. Real Screenshot Gallery Tour */}
      <ScreenshotsSection />

      {/* 6. FAQ Section */}
      <FaqSection />

      {/* 7. Bottom Download CTA */}
      <CtaSection />
    </div>
  );
}

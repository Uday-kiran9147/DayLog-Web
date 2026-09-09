# DayLog — Minimalist Focus Timer & Daily Reflection Journal

A Next.js website for the **DayLog** mobile app (iOS & Android) with the warm **Terracotta & Sage Green** Material 3 aesthetic, showcasing real app screens and hosting the Google AdMob `app-ads.txt` file for developer authorization.

---

## 🎨 Design & Aesthetic
- **Warm Terracotta & Sage Green Theme**: Crafted with Material 3 styling tokens, tactile card elevation, and smooth dark/light mode support.
- **Real App Screenshots**: Displays actual screenshots of the Reflection Journal, Work & Domain Tracking, and Manage Categories bottom sheet.
- **The 4-Question Reflection Method**: Showcases the daily prompts and yesterday's priority integration.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm run start
```

---

## 📱 Google AdMob `app-ads.txt` Setup

Google AdMob requires an `app-ads.txt` file hosted on your developer website root domain to verify app ownership and prevent ad fraud.

### Step 1: Update Your Publisher ID
Open `public/app-ads.txt` and replace `pub-XXXXXXXXXXXXXXXX` with your actual AdMob Publisher ID:
```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```
> **Where to find your Publisher ID**:
> 1. Sign in to your [Google AdMob Account](https://admob.google.com).
> 2. Go to **Settings** > **Account Information** > **Publisher ID** (format: `pub-1234567890123456`).

### Step 2: Deploy to Your Domain
Deploy this Next.js project to your host (Vercel, Netlify, Cloudflare Pages, VPS, etc.) and connect your custom domain (e.g., `https://daylog.app`).

### Step 3: Link Your Website in App Stores
1. **Google Play Console**:
   - Go to **Store presence** > **Store settings**.
   - Under **Website**, enter your domain (e.g. `https://daylog.app`).
2. **Apple App Store Connect**:
   - Go to your App > **App Information**.
   - Set **Marketing URL** or **Support URL** to your domain.

### Step 4: Verify in AdMob
1. Go to **AdMob Console** > **Apps** > **app-ads.txt**.
2. AdMob will crawl `https://yourdomain.com/app-ads.txt` automatically within 24 hours.

---

## 📂 Project Structure

```
daylog_web/
├── app/
│   ├── app-ads.txt/
│   │   └── route.ts             # Route handler ensuring text/plain MIME type
│   ├── privacy/
│   │   └── page.tsx             # Privacy Policy (100% offline DB, AdMob, permissions)
│   ├── terms/
│   │   └── page.tsx             # Terms of Service
│   ├── support/
│   │   └── page.tsx             # Help desk, FAQ, JSON backup guide, contact form
│   ├── layout.tsx               # SEO metadata, fonts, Navbar & Footer
│   ├── page.tsx                 # Main Landing Page
│   └── globals.css              # Warm terracotta & sage Material 3 theme
├── components/
│   ├── Navbar.tsx               # Header with brand badge and store links
│   ├── Footer.tsx               # Footer with legal and app-ads.txt links
│   ├── HeroSection.tsx          # Hero header with store badges
│   ├── HeroPhoneMockup.tsx      # Phone bezel with screenshot switcher
│   ├── TargetAudienceSection.tsx# Built for developers, students, creators
│   ├── FourQuestionsSection.tsx # The 4-question daily reflection breakdown
│   ├── FeatureSection.tsx       # 7 core capabilities grid
│   ├── ScreenshotsSection.tsx   # Real screenshot gallery tour
│   ├── AdMobInstructionCard.tsx # Developer guide for app-ads.txt
│   ├── FaqSection.tsx           # Collapsible FAQ accordion
│   ├── CtaSection.tsx           # Download CTA banner
│   ├── DownloadButtons.tsx      # App Store & Google Play buttons
│   └── Icons.tsx                # Zero-dependency SVG icons
└── public/
    ├── app-ads.txt              # Google AdMob verification file
    ├── robots.txt               # Crawler instructions (allows AdsBot-Google)
    └── screenshots/             # Real DayLog app screenshots
        ├── reflection-screen.png
        ├── categories-screen.png
        └── manage-categories.png
```

# Ipsita Producer Group — Official Handicrafts Catalogue Website

> **Our Tradition. Our Pride.**  
> Authentic Tribal Jewellery & Handicrafts from Dhenkanal, Odisha, India.  
> Operating under the **Subhadra Shakti Initiative** of the Government of Odisha • Udyam: **UDYAM-OD-09-0050793**

---

## 🏛️ Verified Business Information

| Detail | Official Record |
| :--- | :--- |
| **Enterprise Name** | Ipsita Producer Group |
| **Tagline** | Our Tradition. Our Pride. |
| **Business Category** | Tribal Jewellery & Handicrafts |
| **Origin & Heritage** | Dhenkanal, Odisha, India |
| **Contact Phone** | `7751890401` (`+91 77518 90401`) |
| **WhatsApp Direct** | `+91 77518 90401` (`https://wa.me/917751890401`) |
| **Official Address** | Vill-Adipura, Po-Marthapur, Ps-Bhuban, Via-Kamakhyanagar, Dist-Dhenkanal, State-Odisha, PIN 759023 |
| **Udyam Registration** | `UDYAM-OD-09-0050793` |
| **Government Initiative**| Subhadra Shakti Initiative, Government of Odisha |
| **Exhibition Showcase** | Two-Day Showcase at AKAMA College Trade Fair & State Expos |

*All enterprise details, phone numbers, addresses, and registration numbers are authentic and strictly based on the official Product & Stall Requirement Document (PRD). No email addresses, social media links, or false prices have been fabricated.*

---

## 🎨 Artisan Aesthetic & Brand Design

- **Ivory (`#F7F2E9`)**: Warm canvas background reminiscent of raw handloom cotton and parchment.
- **Earth Brown (`#493126`)**: Deep heritage shade of clay pottery and aged wood.
- **Terracotta (`#A75D3B`)**: Rich earthen accent of Odisha's fired temple tiles and adivasi wall pigments.
- **Antique Gold (`#B69760`)**: Gleam of Dhokra brass casting, bell metal, and sacred temple surahi.
- **Soft Beige (`#E9DDCC`)**: Warm neutral border tone for artisan cards and display frames.
- **Charcoal (`#24211F`)**: High-contrast, accessible typography color for readable long-form storytelling.
- **Traditional Motifs**: Traditional Odishan tribal diamond-chevron divider bands, mandala flourishes, and frame ornaments.

---

## 📦 Four Product Collections

1. **Tribal Necklaces & Jewellery**: Beaded, metal, and pendant necklaces in traditional tribal designs, displayed on vertical hanging lines.
2. **Brass & Metal Handicrafts**: Handcrafted figurines, sacred surahi/kalash, lamps, bells, and decorative pieces in brass and bell metal.
3. **Framed Tribal Art & Wall Décor**: Framed folk and tribal artworks, clocks, and wall panels in a range of sizes with protective glass.
4. **Gifting & Souvenir Pieces**: Small ornaments, pendants, miniature frames, and keepsakes suitable for gifting and college trade fair visitors.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS with custom artisan color tokens
- **Icons**: Lucide React
- **Data Architecture**: Local typed catalogue file (`src/data/products.ts`) — Zero paid database required
- **Static Generation (SSG)**: All product routes pre-rendered with `generateStaticParams`
- **SEO & Meta**: Complete OpenGraph, Twitter Cards, `sitemap.xml`, `robots.txt`

---

## 📁 Project Structure

```text
ipsita-producer-group/
├── public/
│   └── images/                       # Authentic product & stall photography
│       ├── ipsita_brand_banner.png   # High-res official brand banner with seals
│       ├── ipsita_logo.png           # Brand emblem badge
│       ├── ipsita_stall_exhibition.png # Actual exhibition stall photograph
│       ├── crop_tribal_necklaces.png # Authentic necklaces collection photo
│       ├── crop_brass_handicrafts.png# Authentic brass collection photo
│       ├── crop_framed_art.png       # Authentic framed art collection photo
│       ├── crop_gifting_souvenirs.png# Authentic gifting collection photo
│       ├── detail_*.png              # Individual authentic product detail crops
│       └── subhadra_shakti_badge.png # Official initiative emblem
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Global layout with SEO, navigation, footer & WhatsApp
│   │   ├── page.tsx                  # Home page (Hero, Collections, Featured, Stall, Story)
│   │   ├── collections/
│   │   │   ├── page.tsx              # Collections overview with Suspense wrapper
│   │   │   ├── CollectionsClient.tsx # Client-side search, category tabs & material filters
│   │   │   └── [slug]/
│   │   │       ├── page.tsx          # Dynamic SSG product page with metadata
│   │   │       └── ProductDetailClient.tsx # Rich image gallery, specifications & enquiry
│   │   ├── our-story/
│   │   │   └── page.tsx              # Group heritage, Dhenkanal origin, Subhadra Shakti, PRD roles
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact page with address, phone & WhatsApp enquiry form
│   │   ├── sitemap.ts                # Automatic SEO sitemap generator
│   │   ├── robots.ts                 # Automatic robots.txt generator
│   │   ├── not-found.tsx             # Artisan 404 error page
│   │   └── globals.css               # Tailwind styling & traditional scrollbars
│   ├── components/
│   │   ├── Navbar.tsx                # Header with badges, mobile drawer & direct links
│   │   ├── Footer.tsx                # Enterprise footer with Udyam verification & full address
│   │   ├── ProductCard.tsx           # Reusable product card with image, category, and CTAs
│   │   ├── WhatsAppButton.tsx        # Direct click-to-chat with URL encoding & phone formatting
│   │   ├── ContactForm.tsx           # Interactive enquiry form opening verified WhatsApp chat
│   │   ├── SearchAndFilter.tsx       # Live search bar, category pills, material filters & sorting
│   │   └── DecorativeMotif.tsx       # Reusable SVG tribal borders, mandalas, and badges
│   ├── data/
│   │   ├── business.ts               # Verified business constants and PRD stall objectives
│   │   ├── categories.ts             # 4 main categories with display techniques
│   │   └── products.ts               # Complete typed product catalogue records
│   └── types/
│       └── index.ts                  # TypeScript models (Product, Category, FilterState)
├── tailwind.config.js                # Custom palette (ivory, earth, terracotta, gold, beige)
├── next.config.mjs                   # Next.js configuration
├── tsconfig.json                     # TypeScript strict configuration
└── package.json                      # Dependencies and build scripts
```

---

## 🛠️ Local Installation & Development

### Prerequisites
- Node.js 18.17+ or 20.x
- npm or pnpm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Validation
```bash
npm run build
npm run start
```
This pre-renders all 23 static pages including all product routes, `sitemap.xml`, and `robots.txt`.

---

## 🌐 Free-Tier Deployment Guide

The website is engineered to run seamlessly on 100% free hosting platforms without any paid databases or external server costs.

### Deploy to Vercel (Recommended — 2 Minutes)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Ipsita Producer Group catalogue website"
   git remote add origin https://github.com/<your-username>/ipsita-producer-group.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect as **Next.js**.
5. Click **"Deploy"**. The site will be live on a free `.vercel.app` domain with free SSL!

### Deploy to Netlify
1. Connect your repository at [netlify.com](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `.next`
4. Click **Deploy Site**.

---

## 📱 WhatsApp Click-To-Chat Integration

- **Verified Business Phone**: `7751890401`
- **International API Format**: `https://wa.me/917751890401`
- **Prefilled Messages**:
  - **General Inquiries**: Pre-composed greeting introducing the customer to Ipsita Producer Group.
  - **Product Inquiries**: Automatically encodes the specific product name, product code, and category.
  - **Contact Form**: Composes a structured customer inquiry (Name, Phone, Category, Specific Design, Purpose, Notes) and opens WhatsApp directly without storing fake data in unverified databases.

---

## ✅ Quality & Verification Checklist

- [x] Accurate business details: Name, Tagline, Phone, Dhenkanal Village Address, Udyam No (`UDYAM-OD-09-0050793`), Subhadra Shakti Initiative.
- [x] Zero invented emails, fake reviews, fake social icons, or fake availability claims.
- [x] Authentic photography: Real stall photograph and genuine product crops extracted from official PRD.
- [x] Responsive design tested across mobile, tablet, and desktop viewports.
- [x] Accessible navigation: ARIA attributes, semantic HTML elements, keyboard-friendly drawer and filters.
- [x] Full catalogue functionality: Category filters, text search, material filters, and A-Z / featured sorting.
- [x] Pre-rendered static routes (SSG) for all product slugs (`/collections/[slug]`).
- [x] Automated `sitemap.xml` and `robots.txt` generation.
- [x] Custom artisan 404 page (`not-found.tsx`).
- [x] Production build passes with 0 errors across 23 static pages.


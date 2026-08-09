# Project Plan: Al-Nadi Construction Materials Co.
**شركة النادي لمواد البناء**

**Industry:** Construction Materials & Hardware eCommerce  
**Location:** Arar, Saudi Arabia  

## Project Goal
Build a premium bilingual (Arabic & English) construction materials website that:
- Looks modern and premium (Gold/Dark aesthetic).
- Supports RTL perfectly for Arabic-first layout.
- Showcases thousands of products.
- Allows quotation requests and BOQ uploads.
- Enables WhatsApp ordering directly from product pages.
- Improves Google ranking via optimized SEO and JSON-LD.
- Generates local leads and serves as a highly scalable eCommerce platform.

## Tech Stack
- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, next-intl
- **Backend:** Next.js Server Actions, Sanity CMS (Headless CMS for Products/Categories)

---

## Completed Implementation Phases

### ✅ Phase 1: Project Scaffolding & Infrastructure
- Initialize Next.js 15 project (TypeScript, Tailwind, App Router).
- Install core dependencies (`next-intl`, `framer-motion`, `sanity`, `lucide-react`).
- Configure i18n (`next-intl`) and routing for `/ar` and `/en`.
- Configure Tailwind RTL plugin and design tokens.
- Set up base folder structure and layout architecture.

### ✅ Phase 2: Design System & Global Components
- Implement UI primitives (`Button`, `Card`, `Input`, `Accordion`, `Sheet`).
- Implement global layouts (Navbar with Mobile Menu, Footer, LocaleSwitcher).
- Apply RTL CSS logical properties.
- Global WhatsApp floating button for easy contact.

### ✅ Phase 3: Core Pages
- **Home Page**: Hero Section, Featured Categories, Popular Products, Testimonials, Brands Carousel, Stats, FAQ.
- **About Page**: Mission, Vision, and company history.
- **Contact Page**: Interactive map, contact details, and contact form.
- **FAQ Page**: Expandable accordion questions.
- **Categories & Brands Pages**: Indexing all available categories and brands.

### ✅ Phase 4: eCommerce Features
- **Product Listing Page**: Advanced filtering (by category, brand, price, in-stock) via Sidebar/Sheet.
- **Product Detail Page**: Image gallery, pricing, stock status, and technical specifications table.
- **Quotation Request Flow**: Dynamic multi-step form to upload Excel/PDF Bills of Quantities (BOQ) and request custom bulk pricing.
- **WhatsApp Order Integration**: 1-click checkout sending exact product SKUs and names to the sales team via WhatsApp.

### ✅ Phase 5: CMS & Admin
- **Configure Sanity Studio**: Setup embedded Sanity Studio at `/studio` for full inventory management.
- **Data Models**: Created schemas for `Product`, `Category`, and `Brand`.
- **Localization**: Ensured CMS supports bilingual inputs (Title Ar/En, Description Ar/En).

### ✅ Phase 6: SEO & Performance
- **Metadata and JSON-LD**: Dynamically generated SEO tags and Schema.org LocalBusiness data.
- **Sitemap and robots.txt**: Auto-generating routes for Google indexing.
- **Image Optimization**: Migrated all heavy imagery to `next/image` for perfect Core Web Vitals and LCP scores.
- **Font Optimization**: Configured Next.js Google Fonts (`Tajawal`, `Cairo`, `Inter`) to load locally without blocking render.

### ✅ Phase 7: Testing & Deployment
- **QA Checks**: Resolved all TypeScript, `shadcn/ui`, and hydration errors.
- **Production Build**: Verified 100% stable `npm run build` with 0 errors.
- **Ready for Deployment**: App is completely ready to be hosted on Vercel with environment variables for Sanity.

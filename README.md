# Z.E DIGITAL TECH - Professional Company Website

> **Official website for Z.E DIGITAL TECH SHPK** - Professional IT services company based in Albania, serving globally.

🌐 **Live Site**: [zedigital.tech](https://zedigital.tech) *(to be deployed)*

---

## 🎯 Project Overview

**Company**: Z.E DIGITAL TECH SHPK  
**Registration Number (NUIS)**: M52231011N  
**Registered**: October 31, 2025  
**Legal Form**: SHPK (Limited Liability Company)  
**Location**: Tiranë, Albania

### Business Services
1. **Software Development** - Custom web & mobile applications
2. **AI Solutions** - Machine learning, automation, intelligent chatbots
3. **Technology Consulting** - Digital transformation & architecture
4. **Digital Marketing** - SEO, social media, content strategies
5. **Design Services** - UI/UX, branding, graphic design
6. **Training & Education** - Workshops & corporate tech training

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ (recommended: 20+)
- **npm** or **yarn**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/ezekaj/ze-digital-tech.git
cd ze-digital-tech

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) in your browser.

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15** (App Router) - React framework with SSR
- **TypeScript 5.7** - Type-safe development
- **React 19** - Latest React features

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Internationalization
- **next-intl** - i18n for Next.js (English + Albanian)

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation

---

## 📁 Project Structure

```
ze-digital-tech/
├── app/
│   ├── [locale]/                    # Localized routes
│   │   ├── (marketing)/            # Marketing pages group
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── services/           # Services pages
│   │   │   ├── about/              # About/Company page
│   │   │   ├── portfolio/          # Portfolio page
│   │   │   └── contact/            # Contact page
│   │   └── layout.tsx              # Locale layout
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
│
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── layout/                     # Layout components (Header, Footer)
│   └── sections/                   # Page sections (Hero, Stats, etc.)
│
├── config/
│   ├── site.ts                     # Site configuration
│   └── services.ts                 # Services data
│
├── i18n/
│   ├── routing.ts                  # i18n routing config
│   └── request.ts                  # i18n request handler
│
├── messages/
│   ├── en.json                     # English translations
│   └── sq.json                     # Albanian translations
│
├── lib/
│   └── utils.ts                    # Utility functions
│
└── public/                         # Static assets (images, logos, etc.)
```

---

## 🌍 Multilingual Support

The website is fully bilingual:

- **English** (`/en/*`) - Primary language for international clients
- **Albanian** (`/sq/*`) - Secondary language for local market

### Language Switching
- Automatic detection based on browser language
- Manual switcher in header
- SEO-friendly URLs with locale prefix
- Hreflang tags for search engines

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🎨 Design System

### Colors
- **Primary**: Professional blue (`#0ea5e9`) - Technology, trust
- **Accent**: Emerald green (`#10b981`) - Growth, innovation
- **Neutral**: Slate grays - Modern, professional

### Typography
- **Headings**: Poppins (font-heading)
- **Body**: Inter (font-sans)

### Components
- Glassmorphism effects (subtle, professional)
- Smooth animations with Framer Motion
- Responsive design (mobile-first)
- Accessibility compliant (WCAG 2.1 AA)

---

## 📄 Pages

### ✅ Implemented
1. **Homepage** (`/`)
   - Hero section with company value proposition
   - Statistics showcase
   - Services grid (6 services)
   - CTA section

### 🚧 To Be Implemented
2. **Services** (`/services/*`)
   - Overview page
   - 6 dedicated service pages

3. **About/Company** (`/about`)
   - Company story
   - Registration details
   - Team information
   - Office location

4. **Portfolio** (`/portfolio`)
   - Project showcase
   - Case studies
   - Client testimonials

5. **Contact** (`/contact`)
   - Contact form
   - Office information
   - Multiple contact methods

---

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
# Email Service (future)
EMAIL_API_KEY=your_api_key_here
EMAIL_FROM=contact@zedigital.tech

# Analytics (future)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Site Configuration

Edit `config/site.ts` to update:
- Company information
- Contact details
- Social media links
- Team members

---

## 🚀 Deployment

### Recommended: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Alternative: Manual Build

```bash
# Build
npm run build

# The output is in .next/ directory
# Deploy .next/ folder to your hosting provider
```

---

## 📊 SEO Features

- ✅ Server-side rendering (SSR)
- ✅ Metadata generation
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Robots.txt
- 🚧 Dynamic sitemap (to be implemented)
- 🚧 Structured data (Schema.org)

---

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Alt text for images
- Color contrast compliance (WCAG 2.1 AA)

---

## 📞 Company Information

**Z.E DIGITAL TECH SHPK**  
Registration Number: M52231011N  
Registered: October 31, 2025

**Address**:  
Rruga Hamdi Sina, Nr. Pasurie 151/69+1-25/2  
Ap. 23 Shk 1, Sauk, Farke  
Tiranë, Albania

**Team**:
- **Elvi Zekaj** - Owner & Founder
- **Elsa Zekaj** - Administrator (Term: Oct 2025 - Oct 2030)

---

## 📝 License

© 2025 Z.E DIGITAL TECH SHPK. All rights reserved.

---

## 🤝 Contributing

This is a company website project. For suggestions or issues, please contact the development team.

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**


# Elvi Zekaj - Personal Portfolio

A modern, interactive portfolio website showcasing skills, experience, and projects as a Full-Stack Developer. Built with cutting-edge technologies and featuring a sophisticated glassmorphism design system.

🌐 **Live Demo**: [https://zedigital.tech](https://zedigital.tech)

## ✨ Features

- **📱 Multi-Page Navigation**: Clean mobile-inspired bottom navigation with dedicated routes for each section
- **🌓 Dark/Light Theme Toggle**: Seamless theme switching with Apple-inspired light mode and enhanced dark mode
- **🎭 Framer Motion Animations**: Scroll-triggered animations with accessibility support and reduced motion preferences
- **🎨 Glassmorphism Design**: Modern glass-effect UI with backdrop blur and translucent elements
- **📱 Responsive Design**: Optimized for all device sizes with mobile-first approach
- **⚡ Modern Tech Stack**: Built with React 19, TypeScript, and Tailwind CSS
- **🚀 Fast Performance**: Powered by Vite with optimized build and deployment
- **📧 Contact Form**: Functional contact form with validation and email integration
- **🔗 Real GitHub Projects**: Showcases actual GitHub repositories with live links
- **♿ Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🛠️ Technology Stack

- **Frontend**: React 19.1.0, TypeScript 5.7.2
- **Routing**: React Router DOM 7.6.2
- **Animations**: Framer Motion 12.18.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Design System**: Multi-page layout with theme-aware components
- **Deployment**: GitHub Pages with custom domain (zedigital.tech)
- **CI/CD**: GitHub Actions for automated testing and deployment
- **Package Manager**: npm

## 🚀 Quick Start

**Prerequisites:** Node.js (v16 or higher)

1. **Clone the repository**:
   ```bash
   git clone git@github.com:ezekaj/elvi.git
   cd elvi
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   ```bash
   # Create .env.local file for any API keys (currently not required)
   echo "GEMINI_API_KEY=your_api_key_here" > .env.local
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- **`npm run dev`**: Start development server with hot reload
- **`npm run build`**: Build for production (outputs to `dist/`)
- **`npm run preview`**: Preview production build locally
- **`npm run deploy`**: Build and deploy to GitHub Pages

## 🏗️ Project Structure

```
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── animations/          # Animation components (Framer Motion)
│   │   ├── BottomNavigation.tsx # Mobile-inspired navigation
│   │   ├── ThemeToggle.tsx      # Dark/light theme switcher
│   │   └── AnimationToggle.tsx  # Animation control toggle
│   ├── contexts/                # React contexts
│   │   ├── ThemeContext.tsx     # Theme state management
│   │   └── AnimationContext.tsx # Animation preferences
│   ├── hooks/                   # Custom React hooks
│   │   ├── useThemeStyles.ts    # Theme-aware styling
│   │   └── useScrollToTop.ts    # Scroll management
│   ├── config/                  # Configuration files
│   │   └── animations.ts        # Animation variants and settings
│   └── pages/                   # Route components
│       ├── WelcomePage.tsx      # Landing page with hero section
│       ├── AboutPage.tsx        # About section with profile
│       ├── ProjectsPage.tsx     # GitHub projects showcase
│       ├── SkillsPage.tsx       # Skills and certifications
│       ├── ExperiencePage.tsx   # Work experience timeline
│       └── ContactPage.tsx      # Contact form and information
├── public/                      # Static assets and favicons
│   ├── assets/images/           # Portfolio images
│   ├── CNAME                    # Custom domain configuration
│   └── 404.html                 # SPA routing fallback
├── App.tsx                      # Main app with routing and providers
├── index.tsx                    # Application entry point
├── index.html                   # HTML template with enhanced SEO
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── .github/workflows/          # GitHub Actions CI/CD
    ├── deploy.yml              # Automated deployment
    └── ci.yml                  # Continuous integration
```

## 🎯 Portfolio Sections

### 🏠 Welcome Page
- Hero section with animated introduction
- Tech stack showcase with glassmorphism cards
- Quick navigation to all portfolio sections
- Animated statistics and call-to-action buttons

### 📋 About Page
- Professional introduction with profile photo
- Personal journey and development philosophy
- Key strengths and problem-solving approach
- Animated profile cards with glassmorphism effects

### 📁 Projects Page
- Real GitHub project showcases with live links
- Interactive project cards with hover effects
- Technology stack badges for each project
- Featured project spotlight with detailed descriptions

### 🛠️ Skills Page
- Categorized technical skills with progress indicators
- Professional certifications with status badges
- Tools and technologies grid layout
- Theme-aware skill category colors

### 💼 Experience Page
- Interactive timeline with hackathon experiences
- Educational background from 42 School
- Career statistics with animated counters
- Professional development milestones

### 📞 Contact Page
- Functional contact form with validation
- Multiple contact methods (email, Discord, GitHub)
- Service offerings and availability information
- FAQ section with common questions

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages with a custom domain using GitHub Actions. Every push to the `main` branch triggers:

1. **Quality Checks**: TypeScript compilation and security audit
2. **Automated Build**: Vite builds the production-ready application
3. **Bundle Analysis**: Size verification and optimization checks
4. **Deployment**: Automatic deployment to GitHub Pages
5. **Custom Domain**: Live updates at [https://zedigital.tech](https://zedigital.tech)

### Custom Domain Configuration
- **Domain**: zedigital.tech (configured via Namecheap)
- **DNS**: A records pointing to GitHub Pages IPs
- **SSL**: Automatic HTTPS certificate provisioning
- **CNAME**: Custom domain routing for SPA functionality

## 🔧 Development Workflow

1. **Clone and setup** the repository locally
2. **Install dependencies** with `npm install`
3. **Start development** with `npm run dev`
4. **Make changes** and test locally
5. **Commit changes** with descriptive messages
6. **Push to main branch** - deployment happens automatically
7. **Verify deployment** at [https://zedigital.tech](https://zedigital.tech)

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome! Feel free to:
- Open issues for bugs or suggestions
- Submit pull requests for improvements
- Share feedback on design or functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎨 Design Features

- **Glassmorphism**: Modern glass-effect UI with backdrop blur
- **Theme System**: Comprehensive dark/light mode with Apple-inspired design
- **Animations**: Scroll-triggered Framer Motion animations with accessibility support
- **Typography**: Inter, Space Grotesk, and JetBrains Mono font families
- **Color Palette**: Cyan/purple accent colors with professional gradients
- **Mobile-First**: Responsive design optimized for all screen sizes

## 🙏 Acknowledgments

- **Design Inspiration**: Apple's design language and modern portfolio trends
- **Technology Stack**: React, TypeScript, Vite, and Framer Motion communities
- **Icons**: Heroicons for beautiful, consistent iconography
- **Fonts**: Google Fonts for typography excellence
- **Hosting**: GitHub Pages for reliable deployment

---

**Built with ❤️ by Elvi Zekaj | Portfolio showcasing real projects and skills**

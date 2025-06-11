# Elvi Zekaj - Personal Portfolio

A modern, interactive portfolio website showcasing my skills, experience, and projects as an IT Specialist & Software Developer.

🌐 **Live Demo**: [https://ezekaj.github.io/elvi/](https://ezekaj.github.io/elvi/)

## ✨ Features

- **🖥️ Interactive Desk Interface**: Navigate through different sections with an engaging 3D-style desk enhanced with Liquid Glass effects
- **📱 Responsive Design**: Optimized for all device sizes and screen resolutions with adaptive animations
- **🎨 Apple Liquid Glass Design**: Sophisticated glassmorphism effects inspired by Apple's design language
- **✨ Advanced Micro-interactions**: Subtle hover effects, shimmer animations, and micro-bounces throughout
- **🌟 Floating Particles**: Ambient animated particles for enhanced visual depth
- **⚡ Modern Tech Stack**: Built with React 19, TypeScript, and Tailwind CSS with advanced CSS effects
- **🚀 Fast Performance**: Powered by Vite with optimized animations running at 60fps
- **🔧 API Integration**: Configured with Gemini API for enhanced functionality
- **📄 Enhanced Timeline Components**: Interactive work experience and education timelines with glass morphism
- **🎯 Premium Project Showcase**: Dynamic project cards with gradient effects and sophisticated interactions
- **🎭 Advanced Animation System**: Custom keyframe animations with staggered timing and easing functions
- **🎨 Dynamic Gradients**: Responsive gradient text and background effects that react to user interaction

## 🛠️ Technology Stack

- **Frontend**: React 19.1.0, TypeScript 5.7.2
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS with custom Liquid Glass effects and advanced CSS animations
- **Design System**: Apple Liquid Glass inspired glassmorphism with backdrop-filter effects
- **Icons**: Heroicons integration with enhanced micro-interactions
- **Animations**: Custom keyframe animations with cubic-bezier easing and staggered timing
- **Deployment**: GitHub Pages with GitHub Actions
- **API**: Gemini API integration
- **Package Manager**: npm
- **Performance**: Hardware-accelerated animations with 60fps optimization

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
   # Create .env.local file
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
├── components/
│   ├── InteractiveDesk.tsx    # Main navigation desk component
│   └── InteractiveProject.tsx # Project showcase cards
├── constants.tsx              # App constants and data
├── types.ts                  # TypeScript type definitions
├── App.tsx                   # Main application component
├── index.tsx                 # Application entry point
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── package.json             # Dependencies and scripts
└── .github/workflows/       # GitHub Actions CI/CD
    └── deploy.yml           # Automated deployment workflow
```

## 🎯 Portfolio Sections

### 📋 About Me
Professional introduction with personal photo and key strengths highlighting problem-solving skills and dedication to continuous improvement.

### 💼 Work Experience
Interactive timeline showcasing professional experience with:
- Role details and responsibilities
- Company information and locations
- Time periods and achievements
- Animated timeline connectors

### 🎓 Education & Training
Comprehensive education history including:
- Degree information and institutions
- Training programs and certifications
- External links to institution websites
- Timeline-based presentation

### 🛠️ Skills
Organized skill showcase featuring:
- Technical skills categorization
- Proficiency levels
- Interactive hover effects
- Grid-based responsive layout

### 📁 Projects
Dynamic project portfolio with:
- Interactive project cards
- Detailed project descriptions
- Technology stack information
- Live demo and repository links

### 📞 Contact
Professional contact section with:
- Direct email integration
- Social media links (GitHub, LinkedIn)
- Call-to-action for collaboration

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers:

1. **Automated Build**: Vite builds the production-ready application
2. **Quality Checks**: TypeScript compilation and build verification
3. **Deployment**: Automatic deployment to GitHub Pages
4. **Live Updates**: Changes are reflected at [https://ezekaj.github.io/elvi/](https://ezekaj.github.io/elvi/)

## 🔧 Development Workflow

1. **Make changes** to your local code
2. **Test locally** with `npm run dev`
3. **Commit changes** with descriptive messages
4. **Push to main branch** - deployment happens automatically
5. **Verify deployment** at the live URL

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome! Feel free to:
- Open issues for bugs or suggestions
- Submit pull requests for improvements
- Share feedback on design or functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Original Repository**: Built upon the foundation from the original `elvi` repository
- **Design Inspiration**: Modern portfolio design principles
- **Technology Stack**: Thanks to the React, TypeScript, and Vite communities
- **Icons**: Heroicons for beautiful, consistent iconography

---

**Built with ❤️ by Elvi Zekaj**

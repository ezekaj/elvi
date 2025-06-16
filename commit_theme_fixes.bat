@echo off
cd /d "C:\Users\User\OneDrive\Desktop\protfolio"
git add .
git commit -m "Fix theme switching on Projects, Experience, and Contact pages - Updated ProjectsPage.tsx to use theme-aware styling from useThemeStyles hook - Updated ExperiencePage.tsx to use theme-aware styling from useThemeStyles hook - Updated ContactPage.tsx to use theme-aware styling from useThemeStyles hook - All three pages now properly respond to light/dark mode toggle - Fixed hardcoded dark mode classes with dynamic theme classes - All text, backgrounds, cards, and UI elements now adapt to selected theme - Theme persistence works correctly when navigating between these pages - Styling matches the same light mode design implemented on working pages - Bundle size: 274.90 kB (82.71 kB gzipped) with 52 modules"
git push origin main
echo Theme fixes committed and pushed successfully!
pause

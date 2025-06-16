Set-Location "C:\Users\User\OneDrive\Desktop\protfolio"
git add .
git commit -m "Fix theme switching on Projects, Experience, and Contact pages

FIXED THEME ISSUES:
✅ Updated ProjectsPage.tsx to use theme-aware styling from useThemeStyles hook
✅ Updated ExperiencePage.tsx to use theme-aware styling from useThemeStyles hook  
✅ Updated ContactPage.tsx to use theme-aware styling from useThemeStyles hook
✅ All three pages now properly respond to light/dark mode toggle
✅ Fixed hardcoded dark mode classes with dynamic theme classes
✅ All text, backgrounds, cards, and UI elements now adapt to selected theme
✅ Theme persistence works correctly when navigating between these pages
✅ Styling matches the same light mode design implemented on working pages

TECHNICAL CHANGES:
- Imported useThemeStyles hook in all three pages
- Replaced hardcoded bg-slate-900, text-white, bg-slate-800 classes
- Added dynamic pageBackground, textPrimary, textSecondary, accent styling
- Updated card components to use theme-aware card and cardHover classes
- Applied getSkillColors() for consistent skill category theming
- Updated form inputs to use theme-aware input styling
- Applied sectionBackground for consistent section styling

TESTING VERIFIED:
- Projects page: https://ezekaj.github.io/elvi/projects ✅
- Experience page: https://ezekaj.github.io/elvi/experience ✅  
- Contact page: https://ezekaj.github.io/elvi/contact ✅
- Theme toggle works on all pages ✅
- Theme persistence across navigation ✅
- Light mode styling matches design system ✅

Bundle size: 274.90 kB (82.71 kB gzipped) with 52 modules"

git push origin main
Write-Host "Theme fixes committed and pushed successfully!" -ForegroundColor Green

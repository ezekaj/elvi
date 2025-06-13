# Image Assets Directory

## Required Images

### zekaj-logo.svg
**Location**: `public/assets/images/zekaj-logo.svg`

**Description**: Company logo featuring a modern Z letter design with gradient colors and decorative elements.

**Specifications**:
- Format: SVG (vector graphics with transparency)
- Size: 200x200px viewBox for crisp display at any scale
- Usage: Header logo in navigation bar
- Alt text: "Zekaj Technologies Logo - Modern dotted sphere design representing innovation and technology solutions"

**Responsive Sizing**:
- Mobile: 48x48px (w-12 h-12)
- Desktop: 56x56px (w-14 h-14)

**Performance Notes**:
- SVG format provides perfect scaling and small file size
- Built-in gradient effects match brand colors (#4299e1, #38b2ac)
- Vector format ensures crisp display on all screen densities

### IMG_2898.png
**Location**: `public/assets/images/IMG_2898.png`

**Description**: Professional profile photo for the About section.

**Specifications**:
- Format: PNG (with transparency support)
- Current size: ~5MB (needs optimization)
- Display size: 160x160px (w-40 h-40)
- Usage: About section profile image
- Alt text: "Elvi Zekaj - Professional portrait"

**Optimization Notes**:
- Large file size may impact loading performance
- Recommended: Compress to under 500KB while maintaining quality
- Consider WebP format for better compression
- Ensure image is properly cropped and centered

## Instructions

1. Ensure `zekaj-logo.svg` and `IMG_2898.png` are in this directory (`public/assets/images/`)
2. Logo SVG provides automatic scaling and transparency
3. Profile image should be optimized for web performance
4. Test responsive behavior on both mobile and desktop viewports
5. Verify images load correctly on GitHub Pages deployment

## Integration Details

The logo is integrated into the header with:
- Liquid Glass visual effects
- Responsive sizing
- Hover animations (micro-bounce)
- Proper accessibility (descriptive alt text)
- Performance optimizations (lazy loading ready)

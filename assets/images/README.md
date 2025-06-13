# Image Assets Directory

## Required Images

### Zekaj.png
**Location**: `public/assets/images/Zekaj.png`

**Description**: Company logo featuring a modern dotted sphere design with "ZEKAJ TECHNOLOGIES" text below.

**Specifications**:
- Format: PNG (with transparency)
- Recommended size: 200x200px minimum for crisp display
- Usage: Header logo in navigation bar
- Alt text: "Zekaj Technologies Logo - Modern dotted sphere design representing innovation and technology solutions"

**Responsive Sizing**:
- Mobile: 48x48px (w-12 h-12)
- Desktop: 56x56px (w-14 h-14)

**Performance Notes**:
- Image should be optimized for web (compressed but maintaining quality)
- PNG format preserves transparency for logo overlay effects
- Vite will automatically optimize the image during build process

## Instructions

1. Place the `Zekaj.png` file in this directory (`public/assets/images/`)
2. Ensure the image has a transparent background for best integration
3. The image will be automatically referenced by the header component
4. Test responsive behavior on both mobile and desktop viewports

## Integration Details

The logo is integrated into the header with:
- Liquid Glass visual effects
- Responsive sizing
- Hover animations (micro-bounce)
- Proper accessibility (descriptive alt text)
- Performance optimizations (lazy loading ready)

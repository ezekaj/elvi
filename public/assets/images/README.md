# Image Assets Directory

## Required Images

### zekaj.png
**Location**: `public/assets/images/zekaj.png`

**Description**: Company logo featuring a modern dotted sphere design with "ZEKAJ TECHNOLOGIES" text below.

**Specifications**:
- Format: PNG (with transparency)
- Recommended size: 200x200px minimum for crisp display
- Usage: Header logo in navigation bar
- Alt text: "Zekaj Technologies Logo - Modern dotted sphere design representing innovation and technology solutions"

### profile.png
**Location**: `public/assets/images/profile.png`

**Description**: Professional portrait photo for the About section.

**Specifications**:
- Format: PNG (recommended) or JPG
- Recommended size: 400x400px minimum for crisp display
- Usage: Profile picture in About section
- Alt text: "Elvi Zekaj - Professional portrait"

**Responsive Sizing**:
- Mobile: 48x48px (w-12 h-12)
- Desktop: 56x56px (w-14 h-14)

**Profile Image Sizing**:
- Display size: 160x160px (w-40 h-40)
- Recommended upload: 400x400px minimum for crisp display
- Aspect ratio: 1:1 (square)

**Performance Notes**:
- Images should be optimized for web (compressed but maintaining quality)
- PNG format preserves transparency for logo overlay effects
- JPG format acceptable for profile photos
- Vite will automatically optimize images during build process

## Instructions

1. Place the `zekaj.png` file in this directory (`public/assets/images/`)
2. Place the `profile.png` file in this directory (`public/assets/images/`)
3. Ensure the logo has a transparent background for best integration
4. Profile image should be square (1:1 aspect ratio) for best results
5. Images will be automatically referenced by their respective components
6. Test responsive behavior on both mobile and desktop viewports

## Integration Details

The logo is integrated into the header with:
- Liquid Glass visual effects
- Responsive sizing
- Hover animations (micro-bounce)
- Proper accessibility (descriptive alt text)
- Performance optimizations (lazy loading ready)

# Rito's Portfolio — Professional Design & Development Showcase

A production-ready, high-performance portfolio website built with React 18, Vite, TypeScript, Tailwind CSS v3, and Framer Motion. Features a stunning hero section with video backgrounds, smooth animations, responsive design, and accessibility best practices.

## 🎯 Features

- **Hero Section** with dynamic video backgrounds and crossfade switching
- **Projects Showcase** displaying design and development work
- **About Section** with skills, experience, and certifications
- **Contact Section** with social links and direct messaging
- **Responsive Design** for mobile, tablet, and desktop (max-width breakpoints)
- **Smooth Animations** using Framer Motion with spring easing
- **Live Clock** in navigation showing current time
- **Mobile Menu** with CSS Grid smooth expand/collapse
- **Video Preloading** from CloudFront with fallback to original URLs
- **Accessibility** with semantic HTML, ARIA labels, and keyboard navigation
- **Reduced Motion** support for users with motion preferences

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16.x or higher
- **npm** or **yarn**

### Installation

```bash
# 1. Extract the zip file and navigate to the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will open at `http://localhost:5173` with hot module reloading.

## 🏗 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Fixed navigation with clock and mobile menu
│   └── VideoBackground.tsx  # Video preloading and crossfade
├── sections/
│   ├── Hero.tsx            # Full-screen hero with video switcher
│   ├── Projects.tsx        # Project grid with cards
│   ├── About.tsx           # Skills, experience, certifications
│   └── Contact.tsx         # Social links and CTA
├── hooks/
│   └── useRevealAnimation.ts # IntersectionObserver for scroll reveals
├── App.tsx                  # Main app component with routing
├── main.tsx                 # Entry point
└── index.css               # Global styles and animations

public/
└── (static assets)

index.html                   # HTML with Figtree font loading
tailwind.config.js          # Custom breakpoints and animations
vite.config.ts              # Vite configuration
tsconfig.json               # TypeScript configuration
```

## 📱 Responsive Breakpoints

Tailwind is configured with **max-width based breakpoints** to align with your design spec:

- **Mobile**: max 809.98px
- **Tablet (md-tablet)**: min 810px, max 1199.98px
- **Desktop**: 1200px+

All components are fully responsive and tested across device sizes.

## 🎨 Customization

### Colors & Accent
The primary accent color is pink (`#F598F2`). To change it:

1. **Tailwind config**: Search for `#F598F2` references
2. **CSS**: Update in `src/index.css`
3. **Components**: Look for accent color props

### Fonts
Figtree (400, 500, 600) is loaded from Google Fonts in `index.html`. To change:

1. Update the font link in `index.html`
2. Modify `tailwind.config.js` fontFamily

### Videos
The hero section uses CloudFront video URLs. To replace them:

1. Open `src/sections/Hero.tsx`
2. Update the `videos` array with your own URLs
3. Or use local video files via `/public`

### Content
All text is editable directly in the component files:
- Hero intro in `src/sections/Hero.tsx`
- Projects in `src/sections/Projects.tsx`
- Experience in `src/sections/About.tsx`
- Contact info in `src/sections/Contact.tsx`

## ⚡ Performance Optimization

### Video Preloading
Videos are preloaded as blobs on component mount for instant playback. The system:
- Fetches all videos in parallel
- Creates object URLs for efficient memory usage
- Falls back to original URLs if preloading fails

### Code Splitting
Vite automatically code-splits by route for optimal loading.

### Image & Asset Optimization
- Use `public/` folder for static assets
- Consider WebP for images with PNG fallback
- Optimize videos before uploading to CDN

## 🔧 Build & Deploy

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

This creates an optimized bundle in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Type Check
```bash
npm run lint
```

Runs `tsc --noEmit` to catch TypeScript errors before build.

## 📦 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

### Docker
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🎬 Animations

All animations use the spring easing curve: `cubic-bezier(0.16, 1, 0.3, 1)`

### Key Animations
- **revealUp**: Text/elements slide up with fade
- **revealRight**: CTA/paragraphs slide right with fade
- **dotPulse**: Pulsing availability indicator (1.6s)
- **videoFadeIn**: Video crossfade transition (1.2s)

### Custom CSS Variables
```css
--ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
```

## ♿ Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- `prefers-reduced-motion` respected
- Alt text and `aria-hidden` on decorative elements
- Live region updates for time display

## 🐛 Troubleshooting

### Videos not playing?
- Check CloudFront URLs are accessible
- Verify CORS is enabled on your CDN
- Check browser console for CORS errors

### Mobile menu not working?
- Ensure viewport meta tag is in `index.html`
- Check browser window width <= 809.98px

### Animations not smooth?
- Verify `prefers-reduced-motion` is not set
- Check for GPU acceleration (`will-change` in DevTools)
- Clear browser cache

### TypeScript errors?
- Run `npm run lint` to check
- Ensure React version is pinned to 18.x

## 📚 Tech Stack

- **React** 18.2.0
- **Vite** 4.4.0
- **TypeScript** 5.1.0
- **Tailwind CSS** 3.3.0
- **Framer Motion** 10.16.4
- **Lucide React** 0.263.1 (icons)

## ⚠️ Important Notes

### React Version
Keep React at **v18.x** when using Framer Motion (v19 has peer dependency conflicts).

### Tailwind Version
Use **Tailwind v3** for classic `tailwind.config.js` fontFamily overrides (v4 may have breaking changes).

### Type Safety
Run `npx tsc --noEmit` before deployment to catch type errors early.

## 📝 License

This portfolio is a personal project. Feel free to use as a template, but update all content with your own information.

## 💬 Questions?

For issues or questions:
1. Check the browser console for errors
2. Verify all configuration in `tailwind.config.js` and `vite.config.ts`
3. Ensure dependencies are installed: `npm install`
4. Clear cache: `rm -rf node_modules dist package-lock.json` then `npm install`

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

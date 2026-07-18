# 🚀 Quick Start Guide

Get your portfolio running in 3 minutes.

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Start Development Server
```bash
npm run dev
```

The site opens at **http://localhost:5173** with hot reloading.

## Step 3: Start Customizing!

### Update Your Info
- **`src/sections/Hero.tsx`** — Change intro text and CTA
- **`src/sections/Projects.tsx`** — Add your projects
- **`src/sections/About.tsx`** — Add your skills and experience
- **`src/sections/Contact.tsx`** — Update contact info
- **`src/components/Navbar.tsx`** — Change email address

### Replace Videos
Edit the `videos` array in `src/sections/Hero.tsx`:
```tsx
const videos = [
  {
    id: 0,
    title: 'YOUR VIDEO NAME',
    url: 'https://your-video-url.mp4', // ← Replace with your URL
  },
  // ...
]
```

### Change Colors
Search for `#F598F2` (pink accent) throughout the codebase and replace with your brand color.

## Step 4: Build for Production
```bash
npm run build
```

Creates optimized files in `dist/` folder ready to deploy.

## 📤 Deploy

### Vercel (1-click)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages
- Push to GitHub
- Enable Pages in repo settings
- Select `main` branch, `/dist` folder

## ✅ You're Done!

Your portfolio is now live. Make changes in `src/`, they'll auto-reload!

**Questions?** See `README.md` for detailed docs.

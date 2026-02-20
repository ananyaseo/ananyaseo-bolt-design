# Ananya SEO Services Website

A modern, high-performance website for Ananya SEO Services built with React, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Split-screen layout with engaging visuals and clear call-to-action
- **Why Choose Us**: Compelling 2-column layout showcasing 14+ years of expertise
- **Our Expertise**: Dynamic service grid with hover effects highlighting all services
- **About Section**: Company background and mission
- **Testimonials**: Client feedback and success stories
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Performance Optimized**: Lazy-loaded images for faster page loads
- **SEO Ready**: Proper semantic HTML, meta tags, and alt attributes

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

## Design Inspiration

The website incorporates modern design patterns from leading digital marketing agencies:
- Split-screen hero with video/image container
- 2-column why choose us layout with floating badges
- Service grid with media-on-hover effects
- Dark blue and emerald green color scheme
- Inter font family for clean, modern typography

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ananyaseo-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the framework (Vite)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with split-screen layout
│   ├── About.tsx         # About section
│   ├── WhyChooseUs.tsx   # Why choose us section with icons
│   ├── OurExpertise.tsx  # Services grid with hover effects
│   ├── Testimonials.tsx  # Client testimonials
│   └── Footer.tsx        # Footer with contact info
├── App.tsx               # Main app component
├── main.tsx              # App entry point
└── index.css             # Global styles and animations

public/
└── Ananya_nospace_528x150.jpg  # Company logo
```

## Customization

### Colors

The website uses a dark blue and emerald green color scheme. To modify:
- Primary (Emerald): `emerald-500`, `emerald-600`
- Secondary (Blue): `blue-900`, `slate-900`
- Accent colors defined in Tailwind classes

### Content

All content is sourced from ananyaseo.com and can be updated directly in the component files.

### Images

Images are sourced from Pexels for optimal quality. Replace URLs in component files to use custom images.

## Performance

- Images are lazy-loaded for optimal performance
- Uses modern CSS with Tailwind for minimal bundle size
- Vite provides fast HMR (Hot Module Replacement) during development
- Optimized production build with code splitting

## SEO Features

- Semantic HTML structure with proper heading hierarchy
- Meta tags for social media sharing (Open Graph, Twitter Cards)
- Descriptive page titles and meta descriptions
- Alt attributes ready for all images
- Fast page load times for better search rankings

## Browser Support

Modern browsers including:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

All rights reserved - Ananya SEO Services © 2026

## Contact

**Email**: anand@ananyaseo.com
**Phone**: +91-9845038936
**Location**: Bangalore, India
**Website**: https://ananyaseo.com

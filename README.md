# Triad Website

A modern, minimalist landing page for Triad - an AI-powered sports psychology platform for youth sports.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Floating sticky navbar with blur effect
- Hero section with animated title and tagline
- Intro section explaining the problem and solution
- Feature cards in a responsive grid layout
- Smooth scroll animations using Framer Motion
- Dark theme with almost black background and grey cards
- Fully responsive design

## Project Structure

```
triad-website/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Floating sticky navbar
│   ├── Hero.tsx        # Hero section
│   ├── Intro.tsx       # Introduction section
│   ├── Features.tsx    # Features grid
│   └── Footer.tsx      # Footer section
└── package.json
```


# Muhammad Hamad — Portfolio

A personal developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Motion for React**.

Features five detailed project case studies, an interactive résumé viewer, certificate modals, a credibility ribbon, and **HamadBot** — an AI-powered portfolio assistant backed by the Groq API.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript, Tailwind CSS 4 |
| Animation | Motion for React |
| AI Assistant | Groq API (Llama 3.1 8B), server-side route |
| Icons | Lucide React |
| Fonts | Poppins (Google Fonts via `next/font`) |

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Create your local environment file
cp .env.example .env.local
```

Open `.env.local` and add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

> **⚠️ Never commit `.env.local` to Git.** It contains your secret API key and is already listed in `.gitignore`.

```bash
# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint checks |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── api/hamadbot/      # Groq-powered AI assistant endpoint
│   ├── projects/[slug]/  # Dynamic project case-study pages
│   ├── resume/           # Résumé viewer page
│   └── not-found.tsx     # Custom 404 page
├── components/           # Reusable UI components
├── data/portfolio.ts     # Single source of truth for all portfolio content
└── lib/                  # Utilities and HamadBot knowledge base
public/
├── files/                # Résumé PDF and certificate PDFs
└── images/               # Profile portrait and project screenshots
```

## Environment Variables

| Variable | Required | Where Used |
|---|---|---|
| `GROQ_API_KEY` | Yes (for HamadBot AI replies) | Server-side `/api/hamadbot` route only |

HamadBot degrades gracefully if the key is missing — it shows a helpful fallback message and still supports local quick actions (résumé, projects, skills, contact).

## Deployment

The project is designed for **Vercel** deployment. Set `GROQ_API_KEY` as an environment variable in the Vercel dashboard. No other configuration is required.

## License

© 2026 Muhammad Hamad. All rights reserved.

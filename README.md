# Vishwanath Rajendran Portfolio

Premium recruiter-focused portfolio for UAE, Dubai, SaaS, AI startup, enterprise, and remote hiring.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN-style reusable UI primitives
- Lucide icons
- Dark/light mode
- SEO metadata, Open Graph, sitemap, robots, structured data
- Direct email, LinkedIn, GitHub, and WhatsApp contact actions

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

The project is ready for Vercel. Vercel will install dependencies from `package.json` and run the Next build.

## Contact

The portfolio provides direct contact actions without requiring a custom backend.

## Content Updates

Most portfolio content lives in:

```text
lib/portfolio-data.ts
```

Update projects, skills, experience, education, profile details, and contact links there.

## Recruiter Chatbot

The floating portfolio assistant always supports deterministic answers derived from verified portfolio data. Groq can optionally improve conversational phrasing through its OpenAI-compatible API. Configure these server-only variables in Vercel; never expose the API key through a `NEXT_PUBLIC_` variable:

```text
GROQ_API_KEY=
GROQ_MODEL=openai/gpt-oss-20b
GROQ_API_BASE_URL=https://api.groq.com/openai/v1
GROQ_TIMEOUT_MS=8000
```

If the key is missing, the provider times out, or it returns an error or usage-limit response, the API automatically returns the local verified answer. The route limits input and short-term history, validates requests, and applies a lightweight per-client request limit suitable for a single Vercel instance. For stronger distributed abuse protection at higher traffic, connect a shared rate-limit store.

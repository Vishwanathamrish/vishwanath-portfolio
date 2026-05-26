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
- No-backend contact form that opens a prefilled email draft

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

## Contact Form

The contact form uses `mailto:` to open a prefilled email draft, so it works without SMTP, Formspree, Web3Forms, or a custom backend.

## Content Updates

Most portfolio content lives in:

```text
lib/portfolio-data.ts
```

Update projects, skills, certifications, links, coding profiles, and testimonial placeholders there.

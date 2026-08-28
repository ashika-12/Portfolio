# Nandha Kumar Portfolio

Vite and React portfolio, structured for direct deployment from this repository's root directory on Vercel.

## Local development

```bash
npm ci
npm run dev
```

For the contact form, copy `.env.example` to `.env` and add the EmailJS values. In Vercel, add the same values under **Project Settings → Environment Variables**.

## Deploy to Vercel

Import this repository and keep the **Root Directory** empty (the repository root). Vercel will run `npm ci`, `npm run build`, and deploy `dist/` using `vercel.json`.

# Wedding Vendor Website - Next.js

SEO-optimized public website for wedding vendor marketplace.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ SEO optimized
- ✅ Server-side rendering
- ✅ Responsive design
- ✅ Pakistani wedding theme (Maroon & Gold)

## Setup

```bash
cd website

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Run development server
npm run dev
```

Visit: `http://localhost:3000`

## Pages

- `/` - Home page with hero, categories, featured vendors
- `/vendors` - All vendors with filters
- `/vendors/[id]` - Vendor detail page
- `/categories` - All categories
- `/about` - About page
- `/contact` - Contact page
- `/login` - User login

## API Integration

Update `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.yourweddingapp.com/api/v1
```

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Coolify
- Push to GitHub
- Create new application in Coolify
- Select Next.js build pack
- Deploy!

## SEO

- Server-side rendering for all pages
- Dynamic meta tags
- Sitemap generation
- robots.txt
- Open Graph tags
- Schema.org markup

## TODO

- [ ] Connect to backend API
- [ ] Implement vendor listing
- [ ] Implement vendor detail
- [ ] Add authentication
- [ ] Add booking flow
- [ ] Add reviews
- [ ] Add search functionality
- [ ] Add sitemap generation
- [ ] Add analytics

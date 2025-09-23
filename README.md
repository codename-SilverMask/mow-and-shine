# Mow & Shine - Professional Cleaning & Lawn Care Services

Live Link: https://www.mownshine.com/

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000)

A modern, responsive business website for professional cleaning and lawn care services in Wellington, New Zealand. Built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Multi-Service Platform** - Residential cleaning, commercial cleaning, and lawn care services
- **Responsive Design** - Optimized for all devices with smooth animations
- **Email Integration** - Contact forms with Nodemailer and SMTP delivery
- **Modern Architecture** - Next.js App Router with service-specific component organization

## Tech Stack

- **Next.js 15.5.0** - React framework with App Router
- **React 19.1.0** - Latest React features
- **Tailwind CSS 4.x** - Utility-first styling
- **Nodemailer 7.0.6** - Email functionality
- **Vercel** - Deployment platform

## Project Structure

```
mow-n-shine/
├── app/                    # Next.js App Router
│   ├── api/send-email/     # Email API endpoint
│   ├── about/              # Service pages
│   ├── commercial/
│   ├── contact/
│   ├── lawn/
│   └── residential/
├── components/             # React components
│   ├── about/              # Page-specific components
│   ├── commercial/
│   ├── contact/
│   ├── lawn/
│   ├── residential/
│   └── shared components
└── public/                 # Static assets
```

## Getting Started

1. **Clone and install**

   ```bash
   git clone https://github.com/codename-SilverMask/mow-and-shine.git
   cd mow-and-shine
   npm install
   ```

2. **Environment setup**
   Create `.env.local`:

   ```env
   EMAIL_USER=your-email@domain.com
   EMAIL_PASS=your-password
   EMAIL_HOST=smtp.hostinger.com
   EMAIL_PORT=your-port-number
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Scripts

```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Production server
npm run lint    # Code linting
```

## Architecture

### Component Organization

Service-specific components are organized by business area:

```javascript
components/
├── residential/    # Residential cleaning components
├── commercial/     # Commercial cleaning components
├── lawn/          # Lawn care components
└── shared/        # Reusable components
```

### Form System

Unified form handling across all service pages:

```javascript
// Standard form submission pattern
const response = await fetch("/api/send-email", {
  method: "POST",
  body: JSON.stringify({
    formType: "callback|contact|estimate",
    formData: formData,
    userEmail: userEmail, // optional
  }),
});
```

### Email Integration

Professional email delivery with:

- Business notifications to `support@mownshine.com`
- Customer confirmation emails
- HTML templates with company branding
- SMTP via Hostinger

## Deployment

### Vercel

1. Connect GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard:
   - `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_HOST`, `EMAIL_PORT`
3. Deploy automatically on push to main

### Build Optimization

- Static page generation for performance
- Image optimization and lazy loading
- Code splitting by route
- CSS purging for minimal bundle size

## Development

### Patterns

- Service-specific component architecture
- Consistent page layouts with metadata
- Standardized form handling
- Responsive design with Tailwind breakpoints

### Code Standards

- ES6+ JavaScript with React hooks
- Tailwind utility classes for styling
- Component-based architecture
- Environment variable configuration

## Contact

- **Email**: support@mownshine.com
- **Phone**: +64 21 109 9914
- **Business Hours**: 8:00 AM - 6:00 PM, Monday - Friday

---

Built with Next.js, React, and Tailwind CSS

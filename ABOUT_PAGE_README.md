# About Page Components - Mow & Shine

## Components Created

### 1. HeroAbout.jsx

- Red banner with "The Cleaner Team" title
- Gradient background with fade-in animation
- White decorative line with scale animation

### 2. FounderMessage.jsx

- "Message from The Founder" section
- "We Will Make Your Place Spotless" heading
- Detailed company mission paragraph
- Clean typography with fade-in animations

### 3. Promises.jsx

- Three promise cards in responsive grid
- Professional Quality Guarantee
- Easy And Affordable Payments
- Best Product Guarantee
- Hover effects with lift animation
- Icons from /public/ directory

### 4. CallToAction.jsx

- Full-width offer banner with background image
- "Limited Time Offer!" heading
- CTA button with hover effects
- Contact information display
- Dark overlay for text readability

### 5. OurExperts.jsx

- Two-column layout (text + image)
- "Our Cleaning Experts" section
- Bullet points with checkmark icons
- Team photo from /cleaning-team.jpg
- Responsive stacking on mobile

### 6. CallbackForm.jsx

- Request callback form with Name + Phone fields
- Mow & Shine logo display
- Contact information sidebar
- Form validation and submission handling
- Business hours and response time info

## Features Implemented

✅ Responsive design (mobile-first)
✅ Tailwind CSS styling
✅ Smooth fade-in animations
✅ Hover effects and transitions
✅ Proper semantic HTML structure
✅ Accessibility considerations
✅ Clean typography hierarchy
✅ Rounded corners and shadows
✅ High contrast CTAs
✅ Image optimization with Next.js Image component
✅ Form handling with React state

## File Structure

```
app/about/
  page.js          // Main About page component

components/about/
  HeroAbout.jsx    // Red hero banner
  FounderMessage.jsx // Company mission
  Promises.jsx     // Three promise cards
  CallToAction.jsx // Offer banner
  OurExperts.jsx   // Team info + image
  CallbackForm.jsx // Contact form
  index.js         // Component exports
```

## Usage

The About page is accessible at `/about` and uses the existing Navbar and Footer components from the main site. All animations are triggered on component mount for smooth user experience.

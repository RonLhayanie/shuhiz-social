# shuhiz-social

Marketing website for SHUHIZ, a Hebrew-language digital marketing and content studio.
Built as a client project and deployed to Vercel.

Live site: https://shuhizdigitalmarketing.vercel.app

## What it is

A static, server-rendered marketing site with two routes:

- `/` - landing page: hero, services, differentiators, client logos and testimonials, Instagram feed, contact
- `/portfolio` - portfolio page: image collage, video reel, and three long-form case studies

The site is right-to-left and the entire copy is Hebrew. There is no backend, no database
and no authentication. Contact is handled through outbound links only: a WhatsApp deep link
(`wa.me`) and a `mailto:` address. No form data is collected or stored, so the site has no
API routes and no server-side secrets.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 3.4
- lucide-react for icons
- Deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

No environment variables are required.

## Structure

```
app/
  layout.tsx           root layout, RTL html, fonts, global Navbar
  page.tsx             landing page composition
  globals.css          Tailwind entry and global styles
  portfolio/page.tsx   portfolio page; holds the case-study data
components/
  Navbar.tsx           sticky nav with smooth in-page scrolling and a mobile drawer
  Hero.tsx             landing hero
  Services.tsx         service cards
  WhyUs.tsx            differentiators grid
  Recommendations.tsx  client logo row and testimonial screenshots
  InstagramFeed.tsx    static grid of Instagram posts
  Contact.tsx          contact details and WhatsApp button
  Footer.tsx           footer navigation and contact
  PortfolioHero.tsx    masonry image collage
  PortfolioVideos.tsx  video grid
  CaseStudy.tsx        reusable case-study block
```

## Notes on the implementation

Case-study content lives as a typed array in `app/portfolio/page.tsx` and is rendered by the
`CaseStudy` component. Each entry supplies its own theme colour, logo, metrics and a
`mediaItems` array; `CaseStudy` chooses its grid layout from the number of media items and
optionally hides the circular logo via the `showCircularLogo` prop.

Images and videos are not stored in the repository. They are referenced from the client's
Canva CDN and from ibb.co, which keeps the repo small but means the site depends on those
hosts staying available.

Navigation between sections uses manual `scrollIntoView` handlers rather than anchor links,
so the sticky navbar offset can be applied consistently.

## Known limitations

- `app/portfolio/page.tsx` carries a `@ts-ignore` on the `CaseStudy` invocation: the optional
  props on the component are not fully typed yet.
- All media is externally hosted, so a broken upstream link breaks the corresponding tile.
- The Instagram feed is a static list, not a live API integration.

# AutomateSEO.co Marketing Site

A production-ready marketing site and funnel for AutomateSEO.co, built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui components for consistent design
- **Analytics**: GA4 and Meta Pixel integration with conversion tracking
- **Forms**: Lead capture with Resend email service and web3forms fallback
- **SEO**: Dynamic metadata, JSON-LD structured data, sitemap.xml, robots.txt
- **GDPR Compliance**: Cookie consent banner
- **Performance**: Optimized for Lighthouse 95+ scores
- **Responsive**: Mobile-first design with modern UX

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (site)/            # Main site pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap.xml
├── components/
│   ├── analytics/         # Analytics components
│   ├── site/              # Site-specific components
│   └── ui/                # shadcn/ui components
├── config/
│   └── site.ts            # Site configuration
├── data/
│   └── case-studies.ts    # Case studies and testimonials
└── lib/
    ├── analytics.ts       # Analytics utilities
    ├── json-ld.ts         # JSON-LD structured data
    └── utils.ts            # Utility functions
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for deployment)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd automate-seo
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Analytics
   GA_MEASUREMENT_ID=G-XXXXXXXXXX
   META_PIXEL_ID=1234567890
   
   # Contact & CTAs
   WHATSAPP_NUMBER=+447700900123
   BOOKING_URL=https://calendly.com/automateseo/15min
   
   # Email Service
   RESEND_API_KEY=re_xxxxxxxxxx
   WEB3FORMS_KEY=your-web3forms-access-key
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://automateseo.co
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Site Configuration

Edit `src/config/site.ts` to customize:

- **Brand information**: Name, description, contact details
- **Pricing**: Base price, currency, VAT rate
- **Features**: Service offerings and benefits
- **Steps**: How the service works
- **FAQs**: Frequently asked questions

### Case Studies & Testimonials

Edit `src/data/case-studies.ts` to update:

- **Case studies**: Real results and metrics
- **Testimonials**: Client quotes and ratings

### CTAs and Links

Update these environment variables to change CTAs:

- `WHATSAPP_NUMBER`: Your WhatsApp number (E.164 format)
- `BOOKING_URL`: Your Calendly/Cal.com booking link

## 📧 Email Setup

### Resend (Primary)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to `RESEND_API_KEY` in `.env.local`
4. Emails will be sent to `sales@automateseo.co`

### Web3forms (Fallback)

1. Sign up at [web3forms.com](https://web3forms.com)
2. Get your access key
3. Add to `WEB3FORMS_KEY` in `.env.local`
4. Used automatically if Resend fails

## 📊 Analytics Setup

### Google Analytics 4

1. Create a GA4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `GA_MEASUREMENT_ID` in `.env.local`

### Meta Pixel

1. Create a Meta Pixel in Facebook Business Manager
2. Get your Pixel ID
3. Add to `META_PIXEL_ID` in `.env.local`

### Conversion Events

The site tracks these events automatically:

- **WhatsApp clicks**: `whatsapp_click`
- **Booking clicks**: `booking_click` 
- **Lead submissions**: `lead_submit`
- **Availability checks**: `availability_check`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository:**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

2. **Set environment variables:**
   - Go to Vercel dashboard → Project → Settings → Environment Variables
   - Add all variables from `.env.example`

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Other Platforms

The site works on any platform that supports Next.js:

- **Netlify**: Connect GitHub repo, set env vars
- **Railway**: Connect GitHub repo, set env vars  
- **DigitalOcean App Platform**: Connect GitHub repo, set env vars

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.js` to customize colors:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your brand colors
        }
      }
    }
  }
}
```

### Content Updates

- **Home page**: Edit `src/app/page.tsx`
- **Other pages**: Edit files in `src/app/[page]/page.tsx`
- **Components**: Edit files in `src/components/site/`

### Adding New Pages

1. Create new folder in `src/app/[page-name]/`
2. Add `page.tsx` with metadata
3. Update `src/app/sitemap.ts`
4. Add navigation link in `src/components/site/header.tsx`

## 🧪 Testing

### Form Testing

Test the lead form:

1. Go to `/check-availability`
2. Fill out the form
3. Check console logs for API responses
4. Verify emails are received

### Analytics Testing

Test tracking:

1. Open browser dev tools → Network tab
2. Click CTAs and submit forms
3. Verify GA4 and Meta Pixel events fire
4. Check GA4 Real-time reports

### Performance Testing

Run Lighthouse:

```bash
npm run build
npm run start
# Open Lighthouse in Chrome DevTools
```

## 🔍 SEO Features

### Automatic SEO

- **Dynamic metadata**: Page-specific titles and descriptions
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions

### Manual SEO Tasks

1. **Create OG image**: Add `/public/og-default.jpg` (1200x630px)
2. **Add favicon**: Add `/public/favicon.ico`
3. **Update meta descriptions**: Edit page metadata
4. **Add alt text**: Update image alt attributes

## 🐛 Troubleshooting

### Common Issues

**Forms not working:**
- Check environment variables are set
- Verify Resend/Web3forms API keys
- Check browser console for errors

**Analytics not tracking:**
- Verify GA4/Meta Pixel IDs
- Check cookie consent is accepted
- Ensure tracking scripts load

**Build errors:**
- Run `npm run lint` to check for issues
- Verify all imports are correct
- Check TypeScript errors

### Getting Help

1. Check the console for error messages
2. Verify all environment variables are set
3. Test in incognito mode to rule out cache issues
4. Check Vercel deployment logs

## 📝 License

This project is proprietary to AutomateSEO.co. All rights reserved.

## 🤝 Support

For technical support or questions:

- Email: sales@automateseo.co
- WhatsApp: [Your WhatsApp Number]
- Book a call: [Your Booking URL]

---

**AutomateSEO.co funnel scaffolded and ready to deploy. See README for env and launch steps.**
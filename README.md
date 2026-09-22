# drhasannasir.com

Website for Dr. Hasan Nasir Cheema, Consultant Physician. It is a Next.js 14 (App Router) site styled with Tailwind CSS. All pages are statically rendered; the site has no database.

## Repository structure

```
drhasannasir.com/
├── .gitignore
├── README.md
└── frontend/
    ├── _design_reference/        # Static HTML/CSS/JS prototype the site was built from (not deployed)
    │   ├── index.html
    │   ├── privacy-policy.html
    │   ├── refund-cancellation-policy.html
    │   ├── terms-of-service.html
    │   ├── script.js
    │   └── styles.css
    └── website/                  # The Next.js application
        ├── app/
        │   ├── layout.tsx        # Root layout: fonts, metadata, Navbar and Footer
        │   ├── page.tsx          # Home: hero, about, how it works, contact
        │   ├── globals.css
        │   ├── favicon.ico
        │   ├── fonts/            # Geist font files
        │   ├── booking/          # Book a consultation (links to the shop booking page)
        │   ├── products/         # Redirects to https://shop.drhasannasir.com/
        │   ├── legal/            # Index of all legal pages
        │   ├── privacy-policy/
        │   ├── terms-of-service/
        │   ├── refund-cancellation-policy/
        │   ├── shipping-delivery-policy/
        │   ├── health-product-disclaimer/
        │   └── cookie-policy/
        ├── components/
        │   ├── Navbar.tsx
        │   ├── Footer.tsx
        │   ├── RevealSection.tsx       # Scroll-reveal animation wrapper
        │   ├── SocialIcons.tsx
        │   └── WhatsAppFloatButton.tsx # Floating WhatsApp chat button
        ├── public/images/
        ├── .env.local.example    # Environment variable template
        ├── next.config.mjs
        ├── tailwind.config.ts
        ├── postcss.config.mjs
        ├── tsconfig.json
        ├── .eslintrc.json
        └── package.json
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/booking` | Consultation booking; links out to the shop's booking page |
| `/products` | Redirects to the Zaade Sehat shop (`shop.drhasannasir.com`) |
| `/legal` | Links to every legal page |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms and Conditions |
| `/refund-cancellation-policy` | Refund, Return & Cancellation Policy |
| `/shipping-delivery-policy` | Shipping & Delivery Policy |
| `/health-product-disclaimer` | Health Product Disclaimer |
| `/cookie-policy` | Cookie Policy |

## Tech stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS
- sharp, for `next/image` optimization

## Getting started

Requirements: Node.js 20.9 or later (22.x recommended), and npm.

```bash
cd frontend/website
npm install
cp .env.local.example .env
npm run dev
```

Fill in `.env` before you run the site. The site is then served at http://localhost:3000.

### Scripts

Run these from `frontend/website`:

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the production site |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs ESLint |

## Environment variables

The template is `frontend/website/.env.local.example`. The real `.env` files are gitignored, so never commit them.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_PAGE_ID` | Facebook Page ID for the m.me deep link |
| `NEXT_PUBLIC_BOOKING_LIVE` | Booking form switch, off by default. Set it to `true` only when booking and payments are live |

`NEXT_PUBLIC_*` values are compiled into the site, so set them before running `npm run build`.

## Contact numbers

Phone numbers are defined once in `frontend/website/lib/contact.ts`:

- **Online consultation** (`+92 316 688 6161`): the main public number. Every WhatsApp link and button on the site uses it, and the legal pages list it for questions and order support.
- **Clinic** (`+92 324 720 0066`): for people planning an in-person visit. It appears in the home page contact section and the Terms and Conditions.

To change a number, edit that file only.

## Deployment

The site runs as a standard Node.js server (`next start`) and has no Vercel-specific dependencies.

### Railway

The site is deployed on [Railway](https://railway.com) from this GitHub repository. Build and deploy settings live in `frontend/website/railway.json` (Railpack builder, `npm run build`, `npm start`, health check on `/`).

Service settings in the Railway dashboard:

- **Source → Root Directory:** `/frontend/website`
- **Config-as-code → Railway Config File:** `/frontend/website/railway.json` (Railway does not look for this file inside the root directory on its own, so the absolute path is required)
- **Variables:** `RAILPACK_NODE_VERSION=22` to pin Node.js 22
- **Networking:** generate a Railway domain to test, then add `drhasannasir.com` and `www.drhasannasir.com` as custom domains

Railway provides the `PORT` variable and `next start` listens on it. Service variables are available during the build, which `NEXT_PUBLIC_*` values need. Do not set `NODE_ENV=production` as a service variable: the build needs the dev dependencies (TypeScript, Tailwind CSS, PostCSS).

### Other Node.js hosts

- **Root directory:** `frontend/website`
- **Node.js version:** 22.x (20.9 or later is supported)
- **Install:** `npm install`
- **Build:** `npm run build`
- **Start:** `npm start` (listens on the `PORT` environment variable)

Do not upload `node_modules/`, `.next/` or `.env`; the host installs and builds the project itself.

The WooCommerce store at `shop.drhasannasir.com` is a separate WordPress site. This repository only links to it.

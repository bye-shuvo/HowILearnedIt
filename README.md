# HowILearnedIt

A personal developer blog for sharing writing on software, systems, and engineering culture.

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router DOM (v6, file-based nested routing)
- Tailwind CSS v4 (custom design tokens, custom breakpoints)
- unified / remark / rehype (Markdown → HTML pipeline)
- Google Fonts (Playfair Display, Cormorant Garamond, Lato, Merriweather, Great Vibes, Quintessential, Tangerine)

## Features

### Public

- Landing page with stats, featured article, article grid, topic explorer, newsletter signup
- Article archive with search bar, tag filter (horizontal scroll), sort (latest/oldest/popular), and paginated load-more
- Full article page with:
  - Sticky read-progress bar
  - Breadcrumb navigation
  - Markdown content renderer (GFM, syntax blocks, sanitized HTML)
  - Topic tags
  - Related articles (same tag)
  - Discussion/comment input section
  - Copy link + Share buttons
- Responsive navbar (desktop sticky / mobile hamburger menu)

### Admin (`/admin/*`)

- Token-gated admin shell (redirects to login if no token)
- Dashboard with overall stats and recent articles table (update/delete actions)
- Responsive sidebar — desktop sticky sidebar, mobile full-screen drawer
- Article editor (`/admin/article/new`) with dynamic form fields:
  - Title, subtitle, slug, excerpt, topics, author name
  - Category selector (dropdown from tag list)
  - Status setter (draft / published / archived)
  - Cover image uploader with preview + generate placeholder
  - Markdown content textarea with rephrase button
  - Draft and Publish actions
- All articles controller (`/admin/article/all`) — scaffold in place

## Project Structure

```
src/
├── Admin/
│   ├── Dashboard/          # Stats, articles table, sidebar, mobile sidebar
│   ├── New Article/        # Article editor + form field components
│   ├── All Articles/       # Article controller (WIP)
│   ├── Admin.tsx           # Auth guard + layout
│   ├── ArticleRoute.tsx    # Nested route shell for article management
│   ├── Login.tsx           # Login page (WIP)
│   └── Signup.tsx          # Signup page (WIP)
├── Archive/                # Article listing page + search + types
├── Article/                # Single article view + components
├── Home/                   # Landing page + all home sections
├── Routes/                 # React Router config
└── utils/                  # Shared components + markdown CSS
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/articles` | Archive |
| `/articles/:slug` | Article |
| `/admin` | Admin landing |
| `/admin/dashboard` | Dashboard |
| `/admin/article` | Article route hub |
| `/admin/article/new` | Create article |
| `/admin/article/all` | All articles |
| `/admin/login` | Login |
| `/admin/signup` | Signup |

## Design System

Custom Tailwind theme with:
- Colors: `offset-white` (#f5efe6), `offset-white-hover` (#ede3d6), `text` (#2c1810)
- Breakpoints: `mobile-sm` → `desktop-lg` (320px – 3440px)
- Typography scale: serif display fonts for headings, Lato base, Merriweather for blog content

## Status

Work in progress. Auth (login/signup), backend integration, and article controller are not yet implemented.

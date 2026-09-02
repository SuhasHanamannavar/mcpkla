# MCP Hub

The open marketplace for Model Context Protocol servers. Discover, install, and share MCP servers for Claude Code and AI agents.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Backend**: Supabase (coming soon)
- **Auth**: Clerk (coming soon)
- **Search**: Algolia (coming soon)
- **Payments**: Stripe Connect (coming soon)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/              # Next.js App Router pages
│   ├── globals.css   # Global styles & design tokens
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Landing page
├── components/       # React components
│   ├── icons/        # SVG icon components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ServerCard.tsx
├── lib/              # Shared utilities & types
├── public/           # Static assets
│   └── data/         # Sample data (JSON)
└── ...config files
```

## Design System

- **Palette**: Warm earthy tones (no blue, no purple)
- **Accent**: Gold (#c9923c)
- **Secondary**: Forest green (#5a8b4d)
- **Tertiary**: Rust (#c96b3c)
- **Background**: Warm dark charcoal (#1e1c1a)
- **Typography**: Cormorant Garamond (serif, headings) + Source Sans 3 (sans, body)
- **No emojis** — all icons are inline SVG

## Roadmap

- [x] Landing page design & structure
- [ ] Supabase integration (servers database)
- [ ] Clerk authentication
- [ ] Algolia search integration
- [ ] User accounts & collections
- [ ] Server submission flow
- [ ] Stripe Connect for creator monetization
- [ ] One-click install to Claude Code

## License

MIT

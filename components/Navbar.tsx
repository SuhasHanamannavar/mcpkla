import Link from "next/link";
import { SparkleIcon, GithubIcon, MenuIcon } from "./icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "rgba(30, 28, 26, 0.85)", borderBottom: "1px solid var(--line)" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--forest))" }}
          >
            <LayersIconCustom />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[17px] leading-tight" style={{ color: "var(--ink)", fontFamily: "'Source Sans 3', sans-serif" }}>
              MCP Hub
            </span>
            <span className="text-[11px] leading-tight" style={{ color: "var(--ink-faint)" }}>
              Model Context Protocol
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#explore" className="text-sm font-medium transition-colors hover:text-[var(--accent)]" style={{ color: "var(--ink-muted)" }}>
            Explore
          </Link>
          <Link href="#categories" className="text-sm font-medium transition-colors hover:text-[var(--accent)]" style={{ color: "var(--ink-muted)" }}>
            Categories
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-[var(--accent)]" style={{ color: "var(--ink-muted)" }}>
            How it works
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-[var(--accent)]" style={{ color: "var(--ink-muted)" }}>
            Submit
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/SuhasHanamannavar/mcpkla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary hidden sm:inline-flex"
            style={{ padding: "9px 16px", fontSize: "13px" }}
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <button className="btn-primary" style={{ padding: "9px 18px", fontSize: "13px" }}>
            <SparkleIcon size={16} />
            Get Started
          </button>
          <button className="md:hidden btn-secondary" style={{ padding: "9px" }} aria-label="Menu">
            <MenuIcon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

function LayersIconCustom() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e1c1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  );
}

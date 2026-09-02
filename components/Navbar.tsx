import Link from "next/link";
import { SparkleIcon, GithubIcon, MenuIcon } from "./icons";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl"
      style={{
        background: "rgba(10, 10, 10, 0.8)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,179,71,0.35)]"
            style={{
              background: "linear-gradient(135deg, var(--accent), #ff9a2e)",
            }}
          >
            <LayersIconCustom />
          </div>
          <div className="flex flex-col">
            <span
              className="font-bold text-[17px] leading-tight tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              MCP Hub
            </span>
            <span className="text-[10px] leading-tight tracking-widest uppercase" style={{ color: "var(--ink-faint)" }}>
              Model Context Protocol
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#explore", label: "Explore" },
            { href: "#categories", label: "Categories" },
            { href: "#how-it-works", label: "How it works" },
            { href: "#", label: "Submit" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[var(--accent)] relative group"
              style={{ color: "var(--ink-muted)" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/SuhasHanamannavar/mcpkla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary hidden sm:inline-flex"
            style={{ padding: "9px 16px", fontSize: "13px" }}
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <button className="btn-primary" style={{ padding: "9px 18px", fontSize: "13px" }}>
            <SparkleIcon size={15} />
            Get Started
          </button>
          <button
            className="md:hidden btn-secondary"
            style={{ padding: "9px" }}
            aria-label="Menu"
          >
            <MenuIcon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

function LayersIconCustom() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0a0a0a"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  );
}

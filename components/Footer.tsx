import Link from "next/link";
import { GithubIcon } from "./icons";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", background: "var(--bg-soft)", marginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--forest))" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e1c1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                </svg>
              </div>
              <span className="font-semibold text-[17px]" style={{ color: "var(--ink)" }}>MCP Hub</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: "var(--ink-muted)" }}>
              The open marketplace for Model Context Protocol servers. Discover, install, and share tools that connect AI agents to the world.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/SuhasHanamannavar/mcpkla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:text-[var(--accent)]"
                style={{ background: "var(--card)", color: "var(--ink-muted)", border: "1px solid var(--line)" }}
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--ink)" }}>Product</h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--ink-muted)" }}>
              <li><Link href="#" className="hover:text-[var(--accent)] transition-colors">Explore Servers</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)] transition-colors">Categories</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)] transition-colors">Submit Server</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)] transition-colors">For Creators</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--ink)" }}>Resources</h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--ink-muted)" }}>
              <li><Link href="#" className="hover:text-[var(--accent)] transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)] transition-colors">MCP Protocol</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)] transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)] transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>

        <hr className="divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--ink-faint)" }}>
          <p>2026 MCP Hub. Built for the AI agent ecosystem.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[var(--ink-muted)] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[var(--ink-muted)] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[var(--ink-muted)] transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

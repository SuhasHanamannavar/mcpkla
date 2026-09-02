import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon } from "./icons";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        background: "var(--bg-soft)",
        marginTop: "80px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--accent), var(--electric), transparent)",
          opacity: 0.4,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo size={40} />
              <span
                className="font-bold text-[17px] tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                MCP Hub
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: "var(--ink-muted)" }}
            >
              The open marketplace for Model Context Protocol servers. Discover, install, and
              share tools that connect AI agents to the real world.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/SuhasHanamannavar/mcpkla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:text-[var(--accent)] hover:border-[var(--accent)]"
                style={{
                  background: "var(--card)",
                  color: "var(--ink-muted)",
                  border: "1px solid var(--line)",
                }}
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4
              className="font-bold text-sm mb-4 tracking-wide uppercase"
              style={{
                color: "var(--accent)",
                fontSize: "11px",
                letterSpacing: "0.12em",
              }}
            >
              Product
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--ink-muted)" }}>
              <li>
                <Link
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors duration-200"
                >
                  Explore Servers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors duration-200"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors duration-200"
                >
                  Submit Server
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors duration-200"
                >
                  For Creators
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="font-bold text-sm mb-4 tracking-wide uppercase"
              style={{
                color: "var(--electric)",
                fontSize: "11px",
                letterSpacing: "0.12em",
              }}
            >
              Resources
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--ink-muted)" }}>
              <li>
                <Link
                  href="#"
                  className="hover:text-[var(--electric)] transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[var(--electric)] transition-colors duration-200"
                >
                  MCP Protocol
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[var(--electric)] transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[var(--electric)] transition-colors duration-200"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="divider my-10" />

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "var(--ink-faint)" }}
        >
          <p>2026 MCP Hub. Built for the AI agent ecosystem.</p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hover:text-[var(--ink-muted)] transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-[var(--ink-muted)] transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="hover:text-[var(--ink-muted)] transition-colors duration-200"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

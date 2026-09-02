import { StarIcon, DownloadIcon, GithubIcon, CheckIcon } from "./icons";

export type Server = {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  installs: number;
  rating: number;
  github: string;
  author: string;
  verified: boolean;
};

type Props = {
  server: Server;
};

const categoryStyles: Record<string, string> = {
  core: "tag-accent",
  development: "tag-electric",
  productivity: "tag-muted",
  data: "tag-rust",
  research: "tag-muted",
  business: "tag-accent",
};

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return String(n);
}

export default function ServerCard({ server }: Props) {
  return (
    <article className="glass-card p-5 flex flex-col h-full reveal">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold relative"
            style={{
              background: "linear-gradient(135deg, var(--accent-soft), var(--electric-soft))",
              border: "1px solid var(--line-strong)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--electric))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {server.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-[15px] leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
                {server.name}
              </h3>
              {server.verified && (
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: "var(--electric)", color: "#0a0a0a" }}
                  title="Verified"
                >
                  <CheckIcon size={11} strokeWidth={2.8} />
                </span>
              )}
            </div>
            <p className="text-xs mt-0.5" style={{ color: "var(--ink-faint)" }}>
              by {server.author}
            </p>
          </div>
        </div>
        <span className={`tag ${categoryStyles[server.category] || "tag-muted"}`}>
          {server.category}
        </span>
      </div>

      <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: "var(--ink-muted)" }}>
        {server.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {server.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-1 rounded-md"
            style={{
              background: "rgba(154, 154, 144, 0.06)",
              color: "var(--ink-faint)",
              border: "1px solid var(--line)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <hr className="divider mb-4" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs" style={{ color: "var(--ink-faint)" }}>
          <span className="flex items-center gap-1.5">
            <DownloadIcon size={13} />
            {formatNumber(server.installs)} installs
          </span>
          <span className="flex items-center gap-1.5" style={{ color: "var(--accent)" }}>
            <StarIcon size={13} strokeWidth={2.2} />
            {server.rating}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={server.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:text-[var(--accent)] hover:border-[var(--accent)]"
            style={{
              color: "var(--ink-faint)",
              background: "rgba(154, 154, 144, 0.04)",
              border: "1px solid var(--line)",
            }}
            aria-label={`${server.name} on GitHub`}
          >
            <GithubIcon size={14} />
          </a>
          <button
            className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200 tracking-wide uppercase"
            style={{
              background: "var(--electric-soft)",
              color: "var(--electric)",
              border: "1px solid rgba(107, 196, 107, 0.2)",
            }}
          >
            Install
          </button>
        </div>
      </div>
    </article>
  );
}

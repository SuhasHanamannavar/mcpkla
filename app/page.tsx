import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServerCard, { type Server } from "@/components/ServerCard";
import { categories } from "@/lib/categories";
import {
  SearchIcon,
  categoryIconMap,
  SparkleIcon,
  LayersIcon,
  ShieldIcon,
  UsersIcon,
  CheckIcon,
  ArrowRightIcon,
  ZapIcon,
  CodeIcon,
} from "@/components/icons";
import serversData from "@/public/data/servers.json";

export default function Home() {
  const servers = serversData as Server[];
  const featured = servers.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "var(--accent-soft)", border: "1px solid rgba(201, 146, 60, 0.25)" }}>
              <SparkleIcon size={13} className="text-[var(--accent)]" />
              <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
                10,000+ MCP servers · 400M+ monthly downloads
              </span>
            </div>

            <h1
              className="reveal reveal-delay-1 font-bold leading-[1.08] tracking-tight mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 6vw, 68px)",
                color: "var(--ink)",
              }}
            >
              The open marketplace for{" "}
              <span
                style={{
                  background: "linear-gradient(100deg, var(--accent), var(--forest))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                AI agent tools
              </span>
            </h1>

            <p
              className="reveal reveal-delay-2 text-[17px] leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: "var(--ink-muted)" }}
            >
              Discover, install, and share Model Context Protocol servers. Connect Claude Code and any AI agent to files, databases, APIs, and the real world — all in one place.
            </p>

            {/* Search */}
            <div className="reveal reveal-delay-3 max-w-2xl mx-auto mb-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--ink-faint)" }}>
                  <SearchIcon size={18} />
                </span>
                <input
                  type="text"
                  placeholder="Search servers, tags, or use cases... (e.g. 'database', 'Slack', 'files')"
                  className="search-input"
                />
              </div>
            </div>

            <div className="reveal reveal-delay-4 flex flex-wrap items-center justify-center gap-2 text-xs" style={{ color: "var(--ink-faint)" }}>
              <span>Popular:</span>
              {["PostgreSQL", "GitHub", "Filesystem", "Slack", "Notion"].map((t) => (
                <button
                  key={t}
                  className="px-2.5 py-1 rounded-md transition-colors hover:text-[var(--accent)]"
                  style={{ background: "rgba(168, 159, 148, 0.06)" }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ background: "var(--line)", border: "1px solid var(--line)" }}
          >
            {[
              { label: "MCP Servers", value: "10,000+", sub: "and growing daily" },
              { label: "Monthly Downloads", value: "400M+", sub: "across the ecosystem" },
              { label: "Creators", value: "3,200+", sub: "building tools" },
              { label: "Agent Platforms", value: "12+", sub: "MCP-compatible" },
            ].map((stat, i) => (
              <div key={i} className="p-6 text-center" style={{ background: "var(--card)" }}>
                <div
                  className="font-bold mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "36px",
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-0.5" style={{ color: "var(--ink)" }}>
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: "var(--ink-faint)" }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section id="categories" className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
                Browse by category
              </p>
              <h2
                className="font-semibold tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "34px", color: "var(--ink)" }}
              >
                Find the right tool for every use case
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {categories.map((cat) => {
              const Icon = categoryIconMap[cat.icon] || categoryIconMap.grid;
              return (
                <button
                  key={cat.id}
                  className="glass-card p-4 text-left group"
                  style={{ borderRadius: "12px" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors group-hover:bg-[var(--accent-soft)] group-hover:text-[var(--accent)]"
                    style={{ background: "rgba(168, 159, 148, 0.06)", color: "var(--ink-muted)" }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="text-sm font-semibold mb-0.5" style={{ color: "var(--ink)" }}>
                    {cat.name}
                  </div>
                  <div className="text-xs" style={{ color: "var(--ink-faint)" }}>
                    {cat.count} servers
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* FEATURED SERVERS */}
        <section id="explore" className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--forest)" }}>
                Featured
              </p>
              <h2
                className="font-semibold tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "34px", color: "var(--ink)" }}
              >
                Most installed this week
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:gap-2.5" style={{ color: "var(--accent)" }}>
              View all servers
              <ArrowRightIcon size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--rust)" }}>
              How it works
            </p>
            <h2
              className="font-semibold tracking-tight mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "34px", color: "var(--ink)" }}
            >
              From discovery to installed in under 60 seconds
            </h2>
            <p className="text-[15px] max-w-xl mx-auto" style={{ color: "var(--ink-muted)" }}>
              Three simple steps to supercharge your AI agent with real-world capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Browse or search thousands of MCP servers by category, use case, or popularity. Read descriptions, check ratings, and find the right tool.",
                icon: SearchIcon,
                color: "var(--accent)",
                colorSoft: "var(--accent-soft)",
              },
              {
                step: "02",
                title: "Install",
                desc: "Copy the one-line install command or config snippet. Paste it into your Claude Code settings or MCP-compatible agent. That's it.",
                icon: CodeIcon,
                color: "var(--forest)",
                colorSoft: "var(--forest-soft)",
              },
              {
                step: "03",
                title: "Connect",
                desc: "Authenticate once, and your AI agent gains new capabilities. Ask it to query your database, read your notes, or search the web.",
                icon: ZapIcon,
                color: "var(--rust)",
                colorSoft: "var(--rust-soft)",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="glass-card p-7 reveal">
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-bold"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "44px",
                        color: item.color,
                        lineHeight: 1,
                      }}
                    >
                      {item.step}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: item.colorSoft, color: item.color }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY MCP HUB */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div
            className="rounded-3xl p-10 md:p-14"
            style={{
              background: "linear-gradient(135deg, var(--card) 0%, var(--bg-soft) 100%)",
              border: "1px solid var(--line)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
                  Why MCP Hub
                </p>
                <h2
                  className="font-semibold tracking-tight mb-5 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", color: "var(--ink)" }}
                >
                  The ecosystem that connects AI agents to everything
                </h2>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--ink-muted)" }}>
                  The Model Context Protocol is becoming the open standard for AI tool use. MCP Hub is where the community discovers, shares, and monetizes the tools that make agents useful.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Open directory — 10,000+ servers from creators worldwide",
                    "One-click install configs for Claude Code and more",
                    "Verified servers from trusted companies and maintainers",
                    "For creators: monetize your MCP servers with built-in payments",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--ink)" }}>
                      <span
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: "var(--forest-soft)", color: "var(--forest)" }}
                      >
                        <CheckIcon size={13} strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary">
                    Start exploring
                    <ArrowRightIcon size={15} />
                  </button>
                  <button className="btn-secondary">
                    Submit your server
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: LayersIcon, title: "Open Protocol", desc: "Built on the MCP open standard", color: "var(--accent)", colorSoft: "var(--accent-soft)" },
                  { icon: ShieldIcon, title: "Security First", desc: "Verified servers, audit-ready", color: "var(--forest)", colorSoft: "var(--forest-soft)" },
                  { icon: UsersIcon, title: "Community Driven", desc: "Thousands of creators building", color: "var(--rust)", colorSoft: "var(--rust-soft)" },
                  { icon: ZapIcon, title: "Instant Setup", desc: "Install in under 60 seconds", color: "var(--accent)", colorSoft: "var(--accent-soft)" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-5 rounded-2xl"
                      style={{ background: "var(--bg)", border: "1px solid var(--line)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ background: item.colorSoft, color: item.color }}
                      >
                        <Icon size={18} />
                      </div>
                      <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--ink)" }}>
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--ink-faint)" }}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <h2
            className="font-semibold tracking-tight mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", color: "var(--ink)" }}
          >
            Ready to give your AI agent real capabilities?
          </h2>
          <p className="text-[15px] mb-8 max-w-xl mx-auto" style={{ color: "var(--ink-muted)" }}>
            Join thousands of developers and AI enthusiasts discovering the best MCP servers every week.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="btn-primary" style={{ padding: "14px 26px", fontSize: "15px" }}>
              <SparkleIcon size={17} />
              Explore servers
            </button>
            <button className="btn-secondary" style={{ padding: "14px 26px", fontSize: "15px" }}>
              Read the docs
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

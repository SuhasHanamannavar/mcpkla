import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServerCard, { type Server } from "@/components/ServerCard";
import { createClient } from "@/lib/supabase/server";
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

// Fallback categories in case Supabase fetch fails
const fallbackCategories = [
  { id: "1", name: "All Servers", slug: "all", icon: "grid", count: 1200 },
  { id: "2", name: "Core", slug: "core", icon: "core", count: 145 },
  { id: "3", name: "Development", slug: "development", icon: "code", count: 312 },
  { id: "4", name: "Productivity", slug: "productivity", icon: "zap", count: 268 },
  { id: "5", name: "Data & Analytics", slug: "data", icon: "database", count: 189 },
  { id: "6", name: "Research", slug: "research", icon: "search", count: 156 },
  { id: "7", name: "Business", slug: "business", icon: "briefcase", count: 130 },
];

export default async function Home() {
  let servers: Server[] = [];
  let categories = fallbackCategories;

  try {
    const supabase = await createClient();

    // Fetch servers with category names joined
    const { data: serversData, error: serversError } = await supabase
      .from("servers")
      .select(
        `
        id,
        name,
        slug,
        description,
        author,
        github_url,
        install_command,
        tags,
        installs_count,
        rating,
        verified,
        is_paid,
        price,
        featured,
        categories!inner (
          name
        )
      `
      )
      .order("installs_count", { ascending: false })
      .limit(12);

    if (serversError) {
      console.error("Error fetching servers:", serversError);
    } else if (serversData) {
      servers = serversData.map((s: any) => ({
        id: s.id,
        name: s.name,
        description: s.description,
        category: s.categories?.name || "Tools",
        tags: s.tags || [],
        installs: s.installs_count || 0,
        rating: s.rating || 0,
        github: s.github_url || "",
        author: s.author || "Community",
        verified: s.verified || false,
      }));
    }

    // Fetch categories
    const { data: categoriesData, error: catError } = await supabase
      .from("categories")
      .select("id, name, slug, icon, server_count")
      .order("server_count", { ascending: false });

    if (catError) {
      console.error("Error fetching categories:", catError);
    } else if (categoriesData && categoriesData.length > 0) {
      categories = categoriesData.map((c: any) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        icon: c.icon || "grid",
        count: c.server_count || 0,
      }));
    }
  } catch (e) {
    console.error("Supabase connection error:", e);
  }

  // Use fallback servers if Supabase is empty or errored
  if (servers.length === 0) {
    servers = [
      {
        id: "1",
        name: "Filesystem",
        description:
          "Read, write, and manage files and directories on your local machine directly through AI agents.",
        category: "Core",
        tags: ["files", "storage", "local"],
        installs: 124000,
        rating: 4.9,
        github: "https://github.com/modelcontextprotocol/servers",
        author: "Anthropic",
        verified: true,
      },
      {
        id: "2",
        name: "GitHub",
        description:
          "Interact with GitHub repositories, issues, PRs, and code search directly from your AI agent.",
        category: "Development",
        tags: ["git", "code", "devops"],
        installs: 89000,
        rating: 4.8,
        github: "https://github.com/modelcontextprotocol/servers",
        author: "Anthropic",
        verified: true,
      },
      {
        id: "3",
        name: "PostgreSQL",
        description:
          "Query and manage PostgreSQL databases with natural language. Auto-detects schemas and writes safe SQL.",
        category: "Data & Analytics",
        tags: ["database", "sql", "analytics"],
        installs: 67000,
        rating: 4.7,
        github: "https://github.com/modelcontextprotocol/servers",
        author: "Community",
        verified: false,
      },
      {
        id: "4",
        name: "Brave Search",
        description:
          "Real-time web search powered by Brave. Get fresh information and citations directly in conversations.",
        category: "Research",
        tags: ["search", "web", "real-time"],
        installs: 112000,
        rating: 4.7,
        github: "https://github.com/modelcontextprotocol/servers",
        author: "Brave",
        verified: true,
      },
      {
        id: "5",
        name: "Notion",
        description:
          "Read, create, and update Notion pages and databases. Your AI agent becomes your knowledge manager.",
        category: "Productivity",
        tags: ["notes", "knowledge", "docs"],
        installs: 78000,
        rating: 4.8,
        github: "https://github.com/modelcontextprotocol/servers",
        author: "Anthropic",
        verified: true,
      },
      {
        id: "6",
        name: "Memory",
        description:
          "Persistent memory store for AI agents. Save and recall information across conversations and sessions.",
        category: "Core",
        tags: ["memory", "persistence", "context"],
        installs: 88000,
        rating: 4.9,
        github: "https://github.com/modelcontextprotocol/servers",
        author: "Community",
        verified: false,
      },
    ];
  }

  const featured = servers.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col relative" style={{ zIndex: 1 }}>
      <Navbar />
      <main className="flex-grow">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-14">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid rgba(255, 179, 71, 0.25)",
              }}
            >
              <SparkleIcon size={13} style={{ color: "var(--accent)" }} />
              <span
                className="text-xs font-bold tracking-wide"
                style={{ color: "var(--accent)" }}
              >
                10,000+ MCP servers · 400M+ monthly downloads
              </span>
            </div>
            <h1
              className="reveal reveal-delay-1 heading-display mb-5"
              style={{ fontSize: "clamp(44px, 6.5vw, 76px)" }}
            >
              The open marketplace for{" "}
              <span className="gradient-text">AI agent tools</span>
            </h1>
            <p
              className="reveal reveal-delay-2 text-[17px] leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: "var(--ink-muted)" }}
            >
              Discover, install, and share Model Context Protocol servers. Connect Claude Code and any AI agent to files, databases, APIs, and the real world — all in one place.
            </p>
            {/* Search */}
            <div className="reveal reveal-delay-3 max-w-2xl mx-auto mb-5">
              <div className="relative">
                <span
                  className="absolute left-5 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--ink-faint)" }}
                >
                  <SearchIcon size={19} />
                </span>
                <input
                  type="text"
                  placeholder="Search servers, tags, or use cases... (e.g. 'database', 'Slack', 'files')"
                  className="search-input"
                />
              </div>
            </div>
            <div
              className="reveal reveal-delay-4 flex flex-wrap items-center justify-center gap-2 text-xs"
              style={{ color: "var(--ink-faint)" }}
            >
              <span className="tracking-wide">Popular:</span>
              {["PostgreSQL", "GitHub", "Filesystem", "Slack", "Notion"].map((t) => (
                <button
                  key={t}
                  className="px-2.5 py-1 rounded-md transition-all duration-200 hover:text-[var(--accent)] hover:border-[var(--accent)]"
                  style={{
                    background: "rgba(154, 154, 144, 0.04)",
                    border: "1px solid var(--line)",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{
              background: "var(--line)",
              border: "1px solid var(--line-strong)",
            }}
          >
            {[
              { label: "MCP Servers", value: "10,000+", sub: "and growing daily" },
              { label: "Monthly Downloads", value: "400M+", sub: "across the ecosystem" },
              { label: "Creators", value: "3,200+", sub: "building tools" },
              { label: "Agent Platforms", value: "12+", sub: "MCP-compatible" },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div
                  className="font-bold mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "42px",
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
        <section id="categories" className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
            <div>
              <p className="section-label mb-2" style={{ color: "var(--accent)" }}>
                Browse by category
              </p>
              <h2 className="heading-display" style={{ fontSize: "38px" }}>
                Find the right tool for every use case
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {categories.map((cat: any) => {
              const Icon =
                categoryIconMap[cat.icon as keyof typeof categoryIconMap] ||
                categoryIconMap.grid;
              return (
                <button key={cat.id} className="category-card">
                  <div className="icon-wrap icon-wrap-accent mb-3">
                    <Icon size={18} />
                  </div>
                  <div
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: "var(--ink)" }}
                  >
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
        <section id="explore" className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
            <div>
              <p className="section-label mb-2" style={{ color: "var(--electric)" }}>
                Featured
              </p>
              <h2 className="heading-display" style={{ fontSize: "38px" }}>
                Most installed this week
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{ color: "var(--accent)" }}
            >
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
        <section id="how-it-works" className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <p className="section-label mb-2" style={{ color: "var(--rust)" }}>
              How it works
            </p>
            <h2 className="heading-display mb-3" style={{ fontSize: "38px" }}>
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
                desc: "Browse or search thousands of MCP servers by category, use case, or popularity. Read descriptions, check ratings, find the right tool.",
                icon: SearchIcon,
                color: "var(--accent)",
                colorSoft: "var(--accent-soft)",
              },
              {
                step: "02",
                title: "Install",
                desc: "Copy the one-line install command or config snippet. Paste into your Claude Code settings or MCP-compatible agent. That's it.",
                icon: CodeIcon,
                color: "var(--electric)",
                colorSoft: "var(--electric-soft)",
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
                        fontSize: "48px",
                        color: item.color,
                        lineHeight: 1,
                      }}
                    >
                      {item.step}
                    </span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: item.colorSoft, color: item.color }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--ink)" }}>
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
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, var(--card) 0%, var(--bg-soft) 100%)",
              border: "1px solid var(--line-strong)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, var(--accent), var(--electric), transparent)",
                opacity: 0.5,
              }}
            />
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div>
                <p className="section-label mb-2" style={{ color: "var(--accent)" }}>
                  Why MCP Hub
                </p>
                <h2
                  className="heading-display mb-5 leading-tight"
                  style={{ fontSize: "42px" }}
                >
                  The ecosystem that connects{" "}
                  <span className="gradient-text">AI agents to everything</span>
                </h2>
                <p
                  className="text-[15px] leading-relaxed mb-6"
                  style={{ color: "var(--ink-muted)" }}
                >
                  The Model Context Protocol is becoming the open standard for AI tool use. MCP Hub is where the community discovers, shares, and monetizes the tools that make agents actually useful.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Open directory — 10,000+ servers from creators worldwide",
                    "One-click install configs for Claude Code and more",
                    "Verified servers from trusted companies and maintainers",
                    "For creators: monetize your MCP servers with built-in payments",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "var(--ink)" }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{
                          background: "var(--electric-soft)",
                          color: "var(--electric)",
                        }}
                      >
                        <CheckIcon size={13} strokeWidth={2.8} />
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
                  <button className="btn-secondary">Submit your server</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: LayersIcon,
                    title: "Open Protocol",
                    desc: "Built on the MCP open standard",
                    color: "var(--accent)",
                    colorSoft: "var(--accent-soft)",
                  },
                  {
                    icon: ShieldIcon,
                    title: "Security First",
                    desc: "Verified servers, audit-ready",
                    color: "var(--electric)",
                    colorSoft: "var(--electric-soft)",
                  },
                  {
                    icon: UsersIcon,
                    title: "Community Driven",
                    desc: "Thousands of creators building",
                    color: "var(--rust)",
                    colorSoft: "var(--rust-soft)",
                  },
                  {
                    icon: ZapIcon,
                    title: "Instant Setup",
                    desc: "Install in under 60 seconds",
                    color: "var(--accent)",
                    colorSoft: "var(--accent-soft)",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="feature-card">
                      <div
                        className="icon-wrap mb-3"
                        style={{
                          background: item.colorSoft,
                          color: item.color,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <h4
                        className="font-semibold text-sm mb-1"
                        style={{ color: "var(--ink)" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
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
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255, 179, 71, 0.08) 0%, transparent 70%), var(--card)",
              border: "1px solid var(--line-strong)",
            }}
          >
            <h2
              className="heading-display mb-4 max-w-2xl mx-auto"
              style={{ fontSize: "42px" }}
            >
              Ready to supercharge your{" "}
              <span className="gradient-text">AI agent?</span>
            </h2>
            <p
              className="text-[15px] mb-8 max-w-xl mx-auto"
              style={{ color: "var(--ink-muted)" }}
            >
              Join thousands of developers and creators building the future of AI agent tooling.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="btn-primary">
                Start exploring
                <ArrowRightIcon size={15} />
              </button>
              <button className="btn-secondary">Publish a server</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

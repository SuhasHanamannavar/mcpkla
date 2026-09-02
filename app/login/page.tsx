import Link from "next/link";
import Logo from "@/components/Logo";
import {
  GithubIcon,
  ArrowRightIcon,
  SparkleIcon,
  CheckIcon,
} from "@/components/icons";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background:
          "radial-gradient(800px 500px at 20% 0%, rgba(255, 179, 71, 0.06), transparent 60%)," +
          "radial-gradient(600px 400px at 90% 100%, rgba(107, 196, 107, 0.05), transparent 60%)," +
          "linear-gradient(rgba(255, 179, 71, 0.02) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(255, 179, 71, 0.02) 1px, transparent 1px)," +
          "var(--bg)",
        backgroundSize: "auto, auto, 48px 48px, 48px 48px, auto",
        zIndex: 1,
      }}
    >
      {/* Top bar */}
      <div className="px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[var(--accent)]"
          style={{ color: "var(--ink-muted)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to home
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md">
          {/* Logo + heading */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-5">
              <Logo size={64} glow />
            </div>
            <h1
              className="heading-display mb-2"
              style={{ fontSize: "34px" }}
            >
              Welcome back
            </h1>
            <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
              Sign in to discover, save, and manage your MCP servers
            </p>
          </div>

          {/* Login card */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "var(--card)",
              border: "1px solid var(--line-strong)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, var(--accent), var(--electric), transparent)",
                opacity: 0.6,
              }}
            />

            {/* Social login buttons */}
            <div className="space-y-3 mb-6">
              <button
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: "var(--ink)",
                  color: "#0a0a0a",
                  border: "1px solid var(--ink)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#0a0a0a"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#0a0a0a"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#0a0a0a"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#0a0a0a"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              <button
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:border-[var(--accent)]"
                style={{
                  background: "transparent",
                  color: "var(--ink)",
                  border: "1px solid var(--line-strong)",
                }}
              >
                <GithubIcon size={18} />
                Continue with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="flex-grow h-px"
                style={{ background: "var(--line)" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--ink-faint)" }}
              >
                or
              </span>
              <div
                className="flex-grow h-px"
                style={{ background: "var(--line)" }}
              />
            </div>

            {/* Email form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  className="block text-xs font-semibold mb-2 tracking-wide"
                  style={{ color: "var(--ink-muted)" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--ink)",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px var(--accent-soft)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    className="block text-xs font-semibold tracking-wide"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-medium transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: "var(--ink-faint)" }}
                  >
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--ink)",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px var(--accent-soft)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center mt-2"
                style={{ padding: "13px 24px" }}
              >
                Sign in
                <ArrowRightIcon size={16} />
              </button>
            </form>

            {/* Sign up link */}
            <p
              className="text-center text-sm mt-6"
              style={{ color: "var(--ink-muted)" }}
            >
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="font-semibold transition-colors duration-200 hover:text-[var(--electric)]"
                style={{ color: "var(--accent)" }}
              >
                Create one
              </a>
            </p>
          </div>

          {/* Benefits note */}
          <div
            className="mt-6 p-4 rounded-xl text-xs"
            style={{
              background: "var(--electric-soft)",
              border: "1px solid rgba(107, 196, 107, 0.15)",
              color: "var(--ink-muted)",
            }}
          >
            <div className="flex items-start gap-2">
              <SparkleIcon size={14} style={{ color: "var(--electric)", flexShrink: 0, marginTop: "1px" }} />
              <span>
                <strong style={{ color: "var(--electric)" }}>Coming soon:</strong> Clerk
                authentication will be wired up once credentials are provided.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-6 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
        <p>
          By signing in, you agree to our{" "}
          <a href="#" className="hover:text-[var(--ink-muted)] transition-colors">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="hover:text-[var(--ink-muted)] transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

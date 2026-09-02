import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import Logo from "@/components/Logo";

export default function SignUpPage() {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background:
          "radial-gradient(800px 500px at 80% 0%, rgba(107, 196, 107, 0.06), transparent 60%)," +
          "radial-gradient(600px 400px at 10% 100%, rgba(255, 179, 71, 0.05), transparent 60%)," +
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
            <h1 className="heading-display mb-2" style={{ fontSize: "34px" }}>
              Create your account
            </h1>
            <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
              Join the community building the AI agent ecosystem
            </p>
          </div>

          {/* Clerk SignUp component with custom styling */}
          <div
            className="rounded-2xl p-1 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(107, 196, 107, 0.25), rgba(255, 179, 71, 0.3))",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SignUp
              path="/signup"
              routing="path"
              signInUrl="/login"
              socialButtonsPlacement="top"
              socialButtonsVariant="blockButton"
              termsPageUrl="#"
              privacyPageUrl="#"
              appearance={{
                variables: {
                  colorPrimary: "#6bc46b",
                },
                elements: {
                  rootBox: {
                    boxShadow: "none",
                    borderRadius: "14px",
                  },
                  card: {
                    background: "#141414",
                    border: "1px solid rgba(107, 196, 107, 0.15)",
                    boxShadow: "none",
                  },
                  headerTitle: {
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#f5f5f0",
                    letterSpacing: "-0.01em",
                  },
                  headerSubtitle: {
                    color: "#9a9a90",
                    fontSize: "0.875rem",
                  },
                  socialButtonsBlockButton: {
                    background: "#f5f5f0",
                    color: "#0a0a0a",
                    border: "1px solid #f5f5f0",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      background: "#e8e4dd",
                    },
                  },
                  socialButtonsBlockButtonText: {
                    color: "#0a0a0a",
                    fontWeight: 600,
                  },
                  dividerLine: {
                    background: "rgba(107, 196, 107, 0.1)",
                  },
                  dividerText: {
                    color: "#6a6a60",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  },
                  formFieldLabel: {
                    color: "#9a9a90",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                  },
                  formFieldInput: {
                    background: "#0a0a0a",
                    border: "1px solid rgba(107, 196, 107, 0.15)",
                    color: "#f5f5f0",
                    borderRadius: "10px",
                    transition: "all 0.2s ease",
                    "&:focus": {
                      borderColor: "#6bc46b",
                      boxShadow: "0 0 0 3px rgba(107, 196, 107, 0.12)",
                    },
                  },
                  formButtonPrimary: {
                    background: "linear-gradient(135deg, #6bc46b, #4da84d)",
                    color: "#0a0a0a",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      boxShadow: "0 8px 24px rgba(107, 196, 107, 0.25)",
                    },
                  },
                  footerActionLink: {
                    color: "#ffb347",
                    fontWeight: 600,
                    "&:hover": {
                      color: "#ffc970",
                    },
                  },
                  footerActionText: {
                    color: "#9a9a90",
                  },
                  formFieldErrorText: {
                    color: "#ff6b35",
                  },
                  alert: {
                    background: "rgba(255, 107, 53, 0.1)",
                    border: "1px solid rgba(255, 107, 53, 0.25)",
                    color: "#ff8a5c",
                  },
                  otpCodeFieldInput: {
                    background: "#0a0a0a",
                    border: "1px solid rgba(107, 196, 107, 0.15)",
                    color: "#f5f5f0",
                    borderRadius: "10px",
                  },
                  modalBackdrop: {
                    background: "rgba(10, 10, 10, 0.85)",
                    backdropFilter: "blur(8px)",
                  },
                  modalContent: {
                    background: "#141414",
                    border: "1px solid rgba(107, 196, 107, 0.15)",
                  },
                },
              }}
            />
          </div>

          {/* Footer note */}
          <div
            className="mt-6 p-4 rounded-xl text-xs text-center"
            style={{
              background: "rgba(255, 179, 71, 0.06)",
              border: "1px solid rgba(255, 179, 71, 0.12)",
              color: "#9a9a90",
            }}
          >
            Secured by <span style={{ color: "#ffb347", fontWeight: 600 }}>Clerk</span> ·
            End-to-end encrypted authentication
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-6 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
        <p>
          By creating an account, you agree to our{" "}
          <a
            href="#"
            className="hover:text-[var(--ink-muted)] transition-colors duration-200"
          >
            Terms
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="hover:text-[var(--ink-muted)] transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

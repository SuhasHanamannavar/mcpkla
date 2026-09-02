import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCP Hub — Discover & install the best MCP servers",
  description: "The open marketplace for Model Context Protocol servers. Find, install, and share MCP servers for Claude Code and AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

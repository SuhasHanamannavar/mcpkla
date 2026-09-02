export const categories = [
  { id: "all", name: "All Servers", count: 1200, icon: "grid" },
  { id: "core", name: "Core", count: 145, icon: "core" },
  { id: "development", name: "Development", count: 312, icon: "code" },
  { id: "productivity", name: "Productivity", count: 268, icon: "zap" },
  { id: "data", name: "Data & Analytics", count: 189, icon: "database" },
  { id: "research", name: "Research", count: 156, icon: "search" },
  { id: "business", name: "Business", count: 130, icon: "briefcase" },
];

export type Category = typeof categories[number];

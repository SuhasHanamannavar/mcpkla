import algoliasearch from "algoliasearch";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!;

// Client-side search client (safe to expose in browser)
export const searchClient = algoliasearch(appId, searchKey);

// Server-side admin client (for indexing, requires admin key)
export function createAdminClient() {
  const adminKey = process.env.ALGOLIA_ADMIN_KEY;
  if (!adminKey) {
    throw new Error("ALGOLIA_ADMIN_KEY is not configured");
  }
  return algoliasearch(appId, adminKey);
}

export const ALGOLIA_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || "servers";

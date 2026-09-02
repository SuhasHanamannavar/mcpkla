import { createClient } from "@supabase/supabase-js";
import { algoliasearch } from "algoliasearch";

type AlgoliaServerRecord = {
  objectID: string;
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  installs: number;
  rating: number;
  verified: boolean;
  github: string;
  is_paid: boolean;
  featured: boolean;
};

async function syncAlgolia() {
  console.log("Starting Algolia sync...");

  // Validate env vars
  const required = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    "NEXT_PUBLIC_ALGOLIA_APP_ID",
    "ALGOLIA_ADMIN_KEY",
    "NEXT_PUBLIC_ALGOLIA_INDEX",
  ];

  const missing = required.filter((k) => !process.env[k]);
  if (missing.length > 0) {
    console.error("Missing environment variables:", missing.join(", "));
    process.exit(1);
  }

  // Initialize clients
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const algolia = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
    process.env.ALGOLIA_ADMIN_KEY!
  );

  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || "servers";
  const index = algolia.initIndex(indexName);

  // Fetch all servers from Supabase
  console.log("Fetching servers from Supabase...");
  const { data: servers, error } = await supabase
    .from("servers")
    .select(
      `
      id,
      name,
      slug,
      description,
      author,
      github_url,
      tags,
      installs_count,
      rating,
      verified,
      is_paid,
      featured,
      categories!inner (name)
    `
    )
    .order("installs_count", { ascending: false });

  if (error) {
    console.error("Error fetching servers:", error);
    process.exit(1);
  }

  if (!servers || servers.length === 0) {
    console.warn("No servers found in Supabase. Nothing to sync.");
    process.exit(0);
  }

  console.log(`Found ${servers.length} servers`);

  // Transform into Algolia records
  const records: AlgoliaServerRecord[] = servers.map((s: any) => ({
    objectID: s.id,
    id: s.id,
    name: s.name,
    slug: s.slug || "",
    description: s.description || "",
    category: s.categories?.name || "Tools",
    tags: s.tags || [],
    author: s.author || "Community",
    installs: s.installs_count || 0,
    rating: s.rating || 0,
    verified: s.verified || false,
    github: s.github_url || "",
    is_paid: s.is_paid || false,
    featured: s.featured || false,
  }));

  // Push to Algolia
  console.log(`Pushing ${records.length} records to Algolia index "${indexName}"...`);

  try {
    // First, clear existing records
    console.log("Clearing existing index...");
    await index.clearObjects();

    // Save new records
    const result = await index.saveObjects(records);
    console.log(`Successfully synced ${records.length} records to Algolia`);
    console.log(`Task IDs: ${result.taskIDs?.join(", ") || "N/A"}`);

    // Configure index settings for optimal search
    console.log("Configuring index settings...");
    await index.setSettings({
      searchableAttributes: [
        "name",
        "description",
        "tags",
        "author",
        "category",
      ],
      attributesForFaceting: ["category", "tags", "verified", "is_paid"],
      customRanking: [
        "desc(featured)",
        "desc(installs)",
        "desc(rating)",
        "desc(verified)",
      ],
      typoTolerance: true,
      minWordSizefor1Typo: 4,
      minWordSizefor2Typos: 8,
      highlightPreTag: "<mark>",
      highlightPostTag: "</mark>",
    });

    console.log("Index settings configured");
    console.log("Algolia sync complete!");
  } catch (algoliaError: any) {
    console.error("Error pushing to Algolia:", algoliaError.message || algoliaError);
    process.exit(1);
  }
}

syncAlgolia().catch((err) => {
  console.error("Unhandled error:", err);
  process.exit(1);
});

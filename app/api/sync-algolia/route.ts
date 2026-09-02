import { NextResponse } from "next/server";
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

export async function POST(request: Request) {
  try {
    // Optional: protect with a secret token
    const authHeader = request.headers.get("authorization");
    const syncSecret = process.env.SYNC_SECRET;

    if (syncSecret) {
      if (!authHeader || authHeader !== `Bearer ${syncSecret}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    // Validate env vars
    const required = [
      "NEXT_PUBLIC_SUPABASE_URL",
      "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
      "NEXT_PUBLIC_ALGOLIA_APP_ID",
      "ALGOLIA_ADMIN_KEY",
    ];

    const missing = required.filter((k) => !process.env[k]);
    if (missing.length > 0) {
      return NextResponse.json(
        { error: "Missing environment variables", missing },
        { status: 500 }
      );
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

    // Fetch all servers
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
      return NextResponse.json(
        { error: "Failed to fetch servers", details: error },
        { status: 500 }
      );
    }

    if (!servers || servers.length === 0) {
      return NextResponse.json(
        { message: "No servers found in Supabase. Nothing to sync." },
        { status: 200 }
      );
    }

    // Transform records
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

    // Clear and push to Algolia
    await index.clearObjects();
    const result = await index.saveObjects(records);

    // Configure index settings
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

    return NextResponse.json({
      message: "Sync completed successfully",
      recordsSynced: records.length,
      taskIDs: result.taskIDs,
    });
  } catch (err: any) {
    console.error("Sync error:", err);
    return NextResponse.json(
      { error: "Sync failed", details: err.message || String(err) },
      { status: 500 }
    );
  }
}

// Also allow GET for easy testing in browser (no auth required for testing)
export async function GET() {
  return NextResponse.json({
    message: "Algolia sync endpoint ready. Use POST to trigger sync.",
    docs: "POST /api/sync-algolia with Authorization: Bearer <SYNC_SECRET> (if SYNC_SECRET is set)",
  });
}

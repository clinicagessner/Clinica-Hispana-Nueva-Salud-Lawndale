import { NextRequest, NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

const INDEXNOW_KEY = "7a058d4b03962dd5ab69fe97c9a05382";

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "Missing or empty urls array" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: new URL(SITE_CONFIG.baseUrl).hostname,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_CONFIG.baseUrl}/${INDEXNOW_KEY}.txt`,
        urlList: urls.map((url: string) =>
          url.startsWith("http") ? url : `${SITE_CONFIG.baseUrl}${url}`
        ),
      }),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submitted: urls.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow" },
      { status: 500 }
    );
  }
}

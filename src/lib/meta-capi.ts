import { createHash } from "crypto";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || "";
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE || "";

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

interface LeadEventData {
  eventID: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  service: string;
  sourceUrl: string;
  userAgent: string;
  ip: string;
}

export async function sendLeadEvent(data: LeadEventData) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn("Meta CAPI: Missing PIXEL_ID or ACCESS_TOKEN");
    return { success: false, error: "Missing configuration" };
  }

  const userData: Record<string, string> = {
    fn: sha256(data.firstName),
    ln: sha256(data.lastName),
    ph: sha256(data.phone.replace(/\D/g, "")),
    client_ip_address: data.ip,
    client_user_agent: data.userAgent,
  };

  if (data.email) {
    userData.em = sha256(data.email);
  }

  const eventData = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: data.eventID,
        event_source_url: data.sourceUrl,
        action_source: "website",
        user_data: userData,
        custom_data: {
          content_category: data.service,
          content_name: "Contact Form",
        },
      },
    ],
    ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Meta CAPI error:", result);
      return { success: false, error: result };
    }

    return { success: true, events_received: result.events_received };
  } catch (error) {
    console.error("Meta CAPI fetch error:", error);
    return { success: false, error: "Network error" };
  }
}

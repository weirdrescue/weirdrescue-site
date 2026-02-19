import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName } = await req.json();

    const cleanEmail = String(email || "").trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const server = process.env.MAILCHIMP_SERVER; // e.g. "us6"
    const listId = process.env.MAILCHIMP_AUDIENCE_ID;
    const status = (process.env.MAILCHIMP_STATUS || "pending") as
      | "pending"
      | "subscribed";

    if (!apiKey || !server || !listId) {
      return NextResponse.json(
        { success: false, error: "Server not configured." },
        { status: 500 }
      );
    }

    // Mailchimp identifies a member by MD5(lowercase(email))
    // (This makes the call idempotent so repeated signups won't break.)
    const subscriberHash = crypto
      .createHash("md5")
      .update(cleanEmail)
      .digest("hex");

    const url = `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;

    // Mailchimp uses HTTP Basic Auth: username can be any string, password = API key.
    // (We’ll generate the Basic header ourselves.)
    const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");

    const payload = {
      email_address: cleanEmail,
      status_if_new: status, // for PUT upsert behavior
      status,
      merge_fields: {
        FNAME: firstName ? String(firstName).trim() : undefined,
        LNAME: lastName ? String(lastName).trim() : undefined,
      },
    };

    const mcRes = await fetch(url, {
      method: "PUT", // upsert: add or update
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await mcRes.json().catch(() => null);

    if (!mcRes.ok) {
      // If they’re already subscribed, Mailchimp can respond in different ways depending on state.
      // We'll return a friendly success for common "exists" scenarios.
      const detail = data?.detail || data?.title || "Mailchimp error";
      return NextResponse.json(
        { success: false, error: detail },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}

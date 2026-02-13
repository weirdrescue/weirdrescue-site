import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("✅ /api/contact POST hit");
    console.log("RESEND KEY loaded:", !!process.env.RESEND_API_KEY);

    const formData = await req.formData();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      // NOTE: this can be changed to hello@weirdrescue.org after domain verification
    from: "Weird Rescue <hello@weirdrescue.org>",
to: ["hello@weirdrescue.org"],

      subject: `New message from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    console.log("📨 Resend result:", result);

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error.message },
        { status: result.error.statusCode || 500 }
      );
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}

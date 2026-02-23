import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter
// Note: for multi-instance/serverless prod deployments, switch to Upstash Redis.
const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
  const MAX = 3;

  const record = ipMap.get(ip);

  if (!record || now > record.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (record.count >= MAX) return true;

  record.count++;
  return false;
}

function sanitise(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength).replace(/[<>]/g, "");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    // Resolve IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot – bots fill this field
    if (body.honeypot) {
      // Silent success so bots don't retry
      return NextResponse.json({ success: true });
    }

    // Validate & sanitise
    const name = sanitise(body.name, 100);
    const email = sanitise(body.email, 255);
    const company = sanitise(body.company, 100);
    const message = sanitise(body.message, 2000);
    const typeOfWork = sanitise(body.typeOfWork, 50);

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL || "abe@thinkermaker.com.au";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    // Lazily initialise so build doesn't fail without env vars
    const resend = new Resend(process.env.RESEND_API_KEY);

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      typeOfWork ? `Type of Work: ${typeOfWork}` : null,
      "",
      "Message:",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    await resend.emails.send({
      from: `Thinker Maker Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: lines,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

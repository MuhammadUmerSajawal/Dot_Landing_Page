import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

function isValidPayload(payload: Partial<ContactRequest>): payload is ContactRequest {
  return (
    typeof payload.name === "string" &&
    payload.name.trim().length >= 2 &&
    typeof payload.email === "string" &&
    emailRegex.test(payload.email) &&
    typeof payload.message === "string" &&
    payload.message.trim().length >= 10
  );
}

export async function POST(request: Request) {
  let payload: Partial<ContactRequest>;

  try {
    payload = (await request.json()) as Partial<ContactRequest>;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json(
      { message: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  // TODO: Forward payload to your email/CRM provider (Resend, Loops, HubSpot, etc.)
  return NextResponse.json({ message: "Message accepted." }, { status: 202 });
}

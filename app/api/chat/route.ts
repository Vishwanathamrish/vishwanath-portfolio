import { NextRequest, NextResponse } from "next/server";
import { getLocalPortfolioAnswer, getProviderGrounding, isExplicitUnsupportedQuestion, type ChatMessage } from "@/lib/chatbot-knowledge";
import { requestHostedAnswer } from "@/lib/chat-provider";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY_MESSAGES = 6;
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 12;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Record<string, unknown>;
  return (candidate.role === "user" || candidate.role === "assistant") && typeof candidate.content === "string" && candidate.content.length <= MAX_MESSAGE_LENGTH;
}

function isRateLimited(key: string) {
  const now = Date.now();
  if (rateLimits.size > 500) for (const [entryKey, entry] of rateLimits) if (entry.resetAt <= now) rateLimits.delete(entryKey);
  const entry = rateLimits.get(key);
  if (!entry || entry.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid chat message." }, { status: 400 });
  }

  if (!body || typeof body !== "object") return NextResponse.json({ error: "Please enter a question." }, { status: 400 });
  const payload = body as Record<string, unknown>;
  if (typeof payload.message !== "string" || !payload.message.trim()) return NextResponse.json({ error: "Please enter a question." }, { status: 400 });
  const message = payload.message.trim();
  if (message.length > MAX_MESSAGE_LENGTH) return NextResponse.json({ error: `Please keep your question under ${MAX_MESSAGE_LENGTH} characters.` }, { status: 400 });

  const history = Array.isArray(payload.history) ? payload.history.filter(isChatMessage).slice(-MAX_HISTORY_MESSAGES) : [];
  const fallback = getLocalPortfolioAnswer(message);
  const grounding = getProviderGrounding(message);
  const clientKey = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "anonymous";

  if (isRateLimited(clientKey)) return NextResponse.json({ ...fallback, limited: true });
  if (isExplicitUnsupportedQuestion(message) || ["CONTACT_NAVIGATION", "LOCATION", "TECHNOLOGY_MAPPING", "TECHNICAL_SKILLS", "AI_CAPABILITY_CLASSIFICATION", "AI_PROJECT_OVERVIEW", "DIGIDARA_FINANCE"].includes(grounding.intent)) return NextResponse.json(fallback);
  if (!process.env.GROQ_API_KEY) return NextResponse.json(fallback);

  try {
    const hosted = await requestHostedAnswer(message, history, grounding);
    return NextResponse.json({ answer: hosted.answer, actions: fallback.actions, source: "ai" });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") console.warn("[portfolio-chat] Groq fallback:", error instanceof Error ? error.message : "Unknown provider error");
    return NextResponse.json(fallback);
  }
}

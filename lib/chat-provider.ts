import "server-only";
import { chatbotSystemPrompt, type ChatMessage, type ProviderGrounding } from "@/lib/chatbot-knowledge";

type ProviderResult = { answer: string; finishReason: string };

function plainText(value: string) {
  return value.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*|__|`/g, "").replace(/^\s{0,3}#{1,6}\s+/gm, "").replace(/^\s*[-*+]\s+/gm, "").replace(/\n{3,}/g, "\n\n").trim();
}

function validateAnswer(answer: unknown, finishReason: unknown, grounding: ProviderGrounding) {
  if (finishReason !== "stop") throw new Error(`Groq completion was not complete: ${String(finishReason)}`);
  if (typeof answer !== "string") throw new Error("Groq returned malformed content");
  const cleaned = plainText(answer);
  if (cleaned.length < 80 || cleaned.length > 2000) throw new Error("Groq response length was unusable");
  if (!/[.!?)]$/.test(cleaned)) throw new Error("Groq response appears incomplete");
  const lower = cleaned.toLowerCase();
  if (/dubai[- ]based (environment|company|employment|experience)/.test(lower)) throw new Error("Groq inferred unsupported UAE employment");
  if (/perfect fit|strong fit|exceptional candidate|highly qualified|ideal candidate|\bexpert\b/.test(lower)) throw new Error("Groq used unsupported hiring or expertise language");
  if (grounding.intent === "DIGIDARA_FINANCE") {
    if (/compliance tracking|recurring revenue|autonomous|fraud|forecast|\bocr\b|prediction|bank integration|payment gateway|llm contract/.test(lower)) throw new Error("Groq added an unsupported Finance claim");
    if (/\b(he|vishwanath) (built|developed|created|delivered|implemented)\b|\bby (building|developing|creating|implementing)\b|\bhe also (built|developed|created|implemented)\b/.test(lower)) throw new Error("Groq overstated Finance ownership");
  }
  return cleaned;
}

export async function requestHostedAnswer(message: string, history: ChatMessage[], grounding: ProviderGrounding): Promise<ProviderResult> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("Groq is not configured");

  const baseUrl = (process.env.GROQ_API_BASE_URL || "https://api.groq.com/openai/v1").replace(/\/$/, "");
  const model = process.env.GROQ_MODEL || "openai/gpt-oss-20b";
  const configuredTimeout = Number(process.env.GROQ_TIMEOUT_MS || 8000);
  const timeoutMs = Number.isFinite(configuredTimeout) ? Math.min(Math.max(configuredTimeout, 1000), 15000) : 8000;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        temperature: 0.15,
        max_completion_tokens: 800,
        messages: [
          { role: "system", content: `${chatbotSystemPrompt}\n\nCLASSIFIED INTENT: ${grounding.intent}\nVERIFIED INTENT-SPECIFIC CONTEXT:\n${JSON.stringify(grounding.verifiedContext)}` },
          ...history,
          { role: "user", content: message }
        ]
      }),
      cache: "no-store",
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`AI provider returned ${response.status}`);
    const payload = (await response.json()) as { choices?: Array<{ finish_reason?: unknown; message?: { content?: unknown } }> };
    const choice = payload.choices?.[0];
    if (!choice) throw new Error("Groq returned no completion choice");
    const finishReason = typeof choice.finish_reason === "string" ? choice.finish_reason : "unknown";
    const answer = validateAnswer(choice.message?.content, finishReason, grounding);
    return { answer, finishReason };
  } finally {
    clearTimeout(timeout);
  }
}

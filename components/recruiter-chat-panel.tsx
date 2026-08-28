"use client";

import { ArrowUp, Bot, ExternalLink, UserRound, X } from "lucide-react";
import Link from "next/link";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import type { ChatAction, ChatMessage } from "@/lib/chatbot-knowledge";

type DisplayMessage = ChatMessage & { actions?: ChatAction[] };
type ChatResponse = { answer?: string; actions?: ChatAction[]; error?: string };

const starterQuestions = [
  "What is Vishwanath’s strongest RAG project?",
  "Which projects use FastAPI?",
  "Summarize his AI engineering experience.",
  "How can I contact Vishwanath?"
];

const welcome: DisplayMessage = {
  role: "assistant",
  content: "Hi — I can help you review Vishwanath’s verified experience, skills, projects, education, recognition, and contact options."
};

export default function RecruiterChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<DisplayMessage[]>([welcome]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const closeOnEscape = (event: globalThis.KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, pending]);

  async function ask(question: string) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion || pending) return;
    const priorHistory = messages.filter((message) => message !== welcome).slice(-6).map(({ role, content }) => ({ role, content }));
    setMessages((current) => [...current, { role: "user", content: cleanQuestion }]);
    setInput("");
    setPending(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: cleanQuestion, history: priorHistory })
      });
      const result = (await response.json()) as ChatResponse;
      setMessages((current) => [...current, {
        role: "assistant",
        content: result.answer || result.error || "I couldn’t answer that safely. Please try a verified portfolio question.",
        actions: result.actions
      }]);
    } catch {
      setMessages((current) => [...current, {
        role: "assistant",
        content: "The assistant is temporarily unavailable. You can still review Featured Work or contact Vishwanath directly.",
        actions: [{ label: "Featured Work", href: "#work" }, { label: "Email", href: "mailto:vishwanathamrish@gmail.com" }]
      }]);
    } finally {
      setPending(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void ask(input);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void ask(input);
    }
  }

  return (
    <section id="recruiter-chat-panel" className="recruiter-chat-panel" role="dialog" aria-label="Portfolio assistant" aria-modal="false">
      <header className="recruiter-chat-header">
        <div className="flex min-w-0 items-center gap-3">
          <span className="recruiter-chat-avatar"><Bot aria-hidden="true" className="h-5 w-5" /></span>
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold">Ask about Vishwanath</h2>
            <p className="truncate text-xs text-muted-foreground">Answers from verified portfolio content</p>
          </div>
        </div>
        <button type="button" onClick={onClose} className="recruiter-chat-close" aria-label="Close portfolio assistant"><X aria-hidden="true" className="h-5 w-5" /></button>
      </header>

      <div ref={scrollRef} className="recruiter-chat-messages" aria-live="polite" aria-busy={pending}>
        {messages.map((message, index) => (
          <article className={`recruiter-chat-message ${message.role}`} key={`${message.role}-${index}`}>
            <span className="recruiter-message-icon">{message.role === "assistant" ? <Bot aria-hidden="true" /> : <UserRound aria-hidden="true" />}</span>
            <div className="min-w-0">
              <p>{message.content}</p>
              {message.actions?.length ? <div className="recruiter-chat-actions">{message.actions.map((action) => {
                const external = /^(https?:|mailto:)/.test(action.href) || action.href.toLowerCase().endsWith(".pdf");
                return <Link key={`${index}-${action.label}`} href={action.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{action.label}{external ? <ExternalLink aria-hidden="true" /> : null}</Link>;
              })}</div> : null}
            </div>
          </article>
        ))}
        {pending ? <div className="recruiter-chat-thinking"><span /><span /><span /><span className="sr-only">Preparing an answer</span></div> : null}
      </div>

      {messages.length === 1 ? <div className="recruiter-chat-starters" aria-label="Suggested questions">{starterQuestions.map((question) => <button type="button" key={question} onClick={() => void ask(question)}>{question}</button>)}</div> : null}

      <form className="recruiter-chat-form" onSubmit={submit}>
        <label className="sr-only" htmlFor="recruiter-chat-input">Ask about Vishwanath</label>
        <input ref={inputRef} id="recruiter-chat-input" value={input} maxLength={500} onChange={(event) => setInput(event.target.value)} onKeyDown={handleInputKeyDown} placeholder="Ask about projects, skills, or experience…" disabled={pending} autoComplete="off" />
        <button type="submit" disabled={pending || !input.trim()} aria-label="Send question"><ArrowUp aria-hidden="true" className="h-5 w-5" /></button>
      </form>
      <p className="recruiter-chat-note">Verified portfolio answers only. No personal data is stored by this chatbot.</p>
    </section>
  );
}

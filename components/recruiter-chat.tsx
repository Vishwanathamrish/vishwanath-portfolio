"use client";

import dynamic from "next/dynamic";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const RecruiterChatPanel = dynamic(() => import("@/components/recruiter-chat-panel"), {
  loading: () => <div className="recruiter-chat-loading" role="status">Opening assistant…</div>
});

export function RecruiterChat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="recruiter-chat-shell">
      {open ? <RecruiterChatPanel onClose={() => setOpen(false)} /> : null}
      <button
        type="button"
        className="recruiter-chat-launcher"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="recruiter-chat-panel"
        aria-label={open ? "Close portfolio assistant" : "Ask about Vishwanath"}
      >
        <MessageCircle aria-hidden="true" className="h-5 w-5" />
        <span>{open ? "Close" : "Ask about Vishwanath"}</span>
      </button>
    </div>
  );
}

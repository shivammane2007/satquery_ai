"use client";

import React, { useState } from "react";
import { useChat } from "@/components/providers/ChatContext";
import { X, Copy, Check, Link2, ShieldCheck, Globe } from "lucide-react";

export function ShareModal() {
  const { shareModalOpen, setShareModalOpen, activeConversation } = useChat();
  const [copied, setCopied] = useState(false);
  const [includeEvidence, setIncludeEvidence] = useState(true);

  if (!shareModalOpen) return null;

  const shareUrl = typeof window !== "undefined"
    ? `${window.location.origin}/app/share/${activeConversation?.id || "chat-001"}`
    : `https://satquery.ai/share/${activeConversation?.id || "chat-001"}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-[#121212] border border-[#2e2e2e] rounded-2xl p-6 shadow-modal space-y-5 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e]">
              <Link2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Share Conversation</h3>
              <p className="text-xs text-[#737373]">Create a public or research read-only link</p>
            </div>
          </div>
          <button
            onClick={() => setShareModalOpen(false)}
            className="p-1 rounded-lg text-[#737373] hover:text-white hover:bg-[#1f1f1f] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-[#171717] border border-[#262626] rounded-xl space-y-1.5">
            <p className="text-xs font-medium text-white truncate">
              {activeConversation?.title || "Satellite Intelligence Query"}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#737373]">
              <Globe className="w-3 h-3 text-[#888888]" />
              <span>{activeConversation?.messages.length || 0} messages</span>
              <span>•</span>
              <span>Grounded Remote-Sensing Analysis</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-[#0a0a0a] border border-[#262626] rounded-xl px-3 py-2 text-xs font-mono text-[#a3a3a3] select-all focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#e5e5e5] text-black rounded-xl text-xs font-medium transition-colors shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy link</span>
                </>
              )}
            </button>
          </div>

          <label className="flex items-center gap-2.5 pt-1 text-xs text-[#a3a3a3] cursor-pointer">
            <input
              type="checkbox"
              checked={includeEvidence}
              onChange={(e) => setIncludeEvidence(e.target.checked)}
              className="w-3.5 h-3.5 rounded bg-[#171717] border-[#333333] accent-white"
            />
            <span>Include raster imagery, change masks & confidence trace</span>
          </label>
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-[#1f1f1f] text-[11px] text-[#737373]">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#888888]" />
            <span>Read-only snapshot</span>
          </div>
          <button
            onClick={() => setShareModalOpen(false)}
            className="hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

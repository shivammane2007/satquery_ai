"use client";

import React, { useRef, useEffect } from "react";
import { useChat } from "@/components/providers/ChatContext";
import { UserMessage } from "./UserMessage";
import { AssistantMessage } from "./AssistantMessage";
import { EmptyState } from "./EmptyState";
import { Attachment } from "@/lib/types";
import { Sparkles, ShieldAlert } from "lucide-react";

interface MessageListProps {
  onSelectPrompt: (prompt: string, attachments?: Attachment[]) => void;
}

export function MessageList({ onSelectPrompt }: MessageListProps) {
  const { activeConversation, isTemporary, isStreaming, setEvidenceModalData } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  const messages = activeConversation?.messages || [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isStreaming]);

  const handleOpenViewer = (title: string, image: string, metrics?: { label: string; value: string }[]) => {
    setEvidenceModalData({ title, image, metrics });
  };

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto p-4">
        {isTemporary && (
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#141414] border border-[#2e2e2e] text-xs text-[#a3a3a3] select-none mb-6 max-w-xl">
            <ShieldAlert className="w-4 h-4 text-white shrink-0" />
            <span>
              <strong className="text-white font-medium">Temporary Chat:</strong> This conversation won&apos;t appear in your history, won&apos;t be saved, and will be discarded when closed.
            </span>
          </div>
        )}
        <EmptyState onSelectPrompt={onSelectPrompt} />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-w-3xl mx-auto w-full">
      {isTemporary && (
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#141414] border border-[#2e2e2e] text-xs text-[#a3a3a3] select-none">
          <ShieldAlert className="w-4 h-4 text-white shrink-0" />
          <span>
            <strong className="text-white font-medium">Temporary Chat:</strong> This conversation won&apos;t appear in your history, won&apos;t be saved, and will be discarded when closed.
          </span>
        </div>
      )}
      {messages.map((msg) => (
        <React.Fragment key={msg.id}>
          {msg.role === "user" ? (
            <UserMessage message={msg} />
          ) : (
            <AssistantMessage message={msg} onOpenViewer={handleOpenViewer} />
          )}
        </React.Fragment>
      ))}

      {/* Streaming Thinking State */}
      {isStreaming && (
        <div className="flex items-start gap-3.5 max-w-3xl w-full animate-in fade-in duration-150">
          <div className="w-8 h-8 rounded-xl bg-[#141414] border border-[#2e2e2e] flex items-center justify-center shrink-0 mt-0.5">
            <div className="w-3.5 h-3.5 rounded-full border border-white/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#121212] border border-[#262626] space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-white">SatQuery Agent</span>
              <span className="text-[10px] text-[#737373] font-mono animate-pulse">
                Routing Specialist Models...
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      )}

      {/* Temporary Notice at bottom */}
      {isTemporary && messages.length > 0 && (
        <div className="text-center py-2 text-[11px] text-[#737373] font-mono select-none border-t border-[#1a1a1a] mt-4">
          This chat is temporary and won&apos;t be saved to your history.
        </div>
      )}

      <div ref={bottomRef} className="h-4" />
    </div>
  );
}

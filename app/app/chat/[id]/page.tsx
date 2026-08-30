"use client";

import React, { useEffect, useState, use } from "react";
import { useChat } from "@/components/providers/ChatContext";
import { MessageList } from "@/components/chat/MessageList";
import { Composer } from "@/components/chat/Composer";
import { Attachment } from "@/lib/types";

export default function ChatDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { setActiveConversationId, sendMessage, isStreaming } = useChat();
  const [composerInitialText, setComposerInitialText] = useState("");
  const [composerInitialAttachments, setComposerInitialAttachments] = useState<Attachment[]>([]);

  useEffect(() => {
    if (resolvedParams.id) {
      setActiveConversationId(resolvedParams.id);
    }
  }, [resolvedParams.id, setActiveConversationId]);

  const handleSelectPrompt = (prompt: string, attachments?: Attachment[]) => {
    if (attachments && attachments.length > 0) {
      setComposerInitialText(prompt);
      setComposerInitialAttachments(attachments);
    } else {
      sendMessage(prompt);
    }
  };

  const handleSendMessage = (text: string, attachments: Attachment[]) => {
    sendMessage(text, attachments);
    setComposerInitialText("");
    setComposerInitialAttachments([]);
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <MessageList onSelectPrompt={handleSelectPrompt} />
      <Composer
        onSendMessage={handleSendMessage}
        isStreaming={isStreaming}
        initialText={composerInitialText}
        initialAttachments={composerInitialAttachments}
      />
    </div>
  );
}

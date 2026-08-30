"use client";

import React, { useState } from "react";
import { Message } from "@/lib/types";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { ExecutionDrawer } from "./ExecutionDrawer";
import { ChangeAnalysisBlock } from "./ChangeAnalysisBlock";
import { MultimodalBlock } from "./MultimodalBlock";
import { EvidenceViewer } from "./EvidenceViewer";
import { Copy, Check, ThumbsUp, ThumbsDown, Sparkles, Share2 } from "lucide-react";
import { formatTime } from "@/lib/utils";

interface AssistantMessageProps {
  message: Message;
  onOpenViewer?: (title: string, image: string, metrics?: { label: string; value: string }[]) => void;
}

export function AssistantMessage({ message, onOpenViewer }: AssistantMessageProps) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState<boolean | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-start gap-3.5 max-w-3xl w-full group animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* SatQuery Logo Avatar */}
      <div className="w-8 h-8 rounded-xl bg-[#141414] border border-[#2e2e2e] flex items-center justify-center shrink-0 mt-0.5 shadow-subtle">
        <div className="w-3.5 h-3.5 rounded-full border border-white/40 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 space-y-4">
        {/* Assistant Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-white tracking-wide">SatQuery</span>
            {message.analysisTrace && (
              <span className="text-[10px] text-[#737373] font-mono border border-[#262626] px-1.5 py-0.5 rounded">
                {message.analysisTrace.models.join(" + ")}
              </span>
            )}
          </div>

          {message.analysisTrace && (
            <ConfidenceBadge
              confidence={message.analysisTrace.confidence}
              tier={message.analysisTrace.confidenceTier}
            />
          )}
        </div>

        {/* Text Body */}
        <div className="text-[#e5e5e5] text-sm leading-relaxed space-y-2 font-normal">
          {message.content.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Rich Artifact Blocks */}
        {message.changeAnalysis && (
          <ChangeAnalysisBlock data={message.changeAnalysis} onOpenViewer={onOpenViewer} />
        )}

        {message.multimodal && (
          <MultimodalBlock data={message.multimodal} onOpenViewer={onOpenViewer} />
        )}

        {message.evidence && !message.changeAnalysis && !message.multimodal && (
          <EvidenceViewer evidence={message.evidence} onOpenModal={onOpenViewer} />
        )}

        {/* Observable Execution Trace */}
        {message.analysisTrace && (
          <ExecutionDrawer trace={message.analysisTrace} />
        )}

        {/* Footer Actions & Timestamp */}
        <div className="flex items-center justify-between pt-1 text-[11px] text-[#525252]">
          <div className="flex items-center gap-1">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-[#1a1a1a] hover:text-[#a3a3a3] transition-colors"
              title="Copy answer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setLiked((prev) => (prev === true ? null : true))}
              className={`p-1.5 rounded-md hover:bg-[#1a1a1a] hover:text-[#a3a3a3] transition-colors ${
                liked === true ? "text-white bg-[#212121]" : ""
              }`}
              title="Accurate Grounding"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setLiked((prev) => (prev === false ? null : false))}
              className={`p-1.5 rounded-md hover:bg-[#1a1a1a] hover:text-[#a3a3a3] transition-colors ${
                liked === false ? "text-white bg-[#212121]" : ""
              }`}
              title="Flag Spatial Discrepancy"
            >
              <ThumbsDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <span className="font-mono">{formatTime(message.timestamp)}</span>
        </div>
      </div>
    </div>
  );
}

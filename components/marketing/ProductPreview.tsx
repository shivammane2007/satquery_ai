"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INITIAL_CONVERSATIONS } from "@/lib/mock-data";
import { UserMessage } from "@/components/chat/UserMessage";
import { AssistantMessage } from "@/components/chat/AssistantMessage";
import { EvidenceModal } from "@/components/chat/EvidenceModal";
import {
  MessageSquare,
  Plus,
  ArrowRight,
  Maximize2,
  Paperclip,
  ArrowUp,
  Cpu,
  Share2,
  Layers,
  Sparkles,
} from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export function ProductPreview() {
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [evidenceModalData, setEvidenceModalData] = useState<any | null>(null);

  // Landing page preview showcases rich demo scenarios with full analyses
  const demoScenarios = INITIAL_CONVERSATIONS.filter((c) => c.messages && c.messages.length > 0);
  const previewChat = demoScenarios[activeChatIndex] || demoScenarios[0];

  return (
    <section id="preview" className="py-24 bg-black border-t border-[#1f1f1f] relative">
      {/* Background accents */}
      <div className="absolute inset-0 bg-geo-grid-dense pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#212121] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              LIVE PRODUCT EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white">
              The remote-sensing workspace.
            </h2>
            <p className="text-sm text-[#888888]">
              Experience how natural language interacts with spatial evidence, multi-temporal change detection, and radar backscatter in SatQuery.
            </p>
          </div>

          <Link
            href="/app"
            className="inline-flex items-center shrink-0 self-start sm:self-auto"
          >
            <LiquidMetalButton label="Launch Live App" />
          </Link>
        </div>

        {/* Embedded Real Application Interface Container */}
        <div className="relative w-full rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] shadow-modal overflow-hidden flex flex-col md:flex-row h-[780px]">
          {/* Left Mini Sidebar */}
          <div className="hidden md:flex flex-col w-64 bg-[#0a0a0a] border-r border-[#212121] p-3 space-y-4">
            <div className="flex items-center justify-between px-2 py-1 text-white">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-white/60 bg-[#171717] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <span className="text-xs font-semibold font-mono tracking-wider">SATQUERY</span>
              </div>
              <Link href="/app" className="p-1 rounded hover:bg-[#1a1a1a] text-[#737373] hover:text-white" title="New Chat">
                <Plus className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Conversation Switcher Tabs */}
            <div className="space-y-1">
              <span className="px-2 text-[10px] font-mono uppercase text-[#525252]">
                DEMO SCENARIOS
              </span>
              {demoScenarios.slice(0, 3).map((conv, idx) => (
                <button
                  key={conv.id}
                  onClick={() => setActiveChatIndex(idx)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors text-left ${
                    activeChatIndex === idx
                      ? "bg-[#212121] text-white font-medium shadow-subtle"
                      : "text-[#888888] hover:text-white hover:bg-[#141414]"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 opacity-70 shrink-0" />
                  <span className="truncate">{conv.title}</span>
                </button>
              ))}
            </div>

            {/* Specialist Models Info Pill */}
            <div className="mt-auto p-2.5 rounded-xl bg-[#121212] border border-[#212121] text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Cpu className="w-3 h-3 text-[#888888]" />
                <span>Model Stack</span>
              </div>
              <p className="text-[10px] text-[#737373] leading-normal font-mono">
                GeoChat • Prithvi-EO • TerraMind • Change Detection
              </p>
            </div>
          </div>

          {/* Right Main Chat & Analysis Viewport */}
          <div className="flex-1 flex flex-col h-full bg-[#050505] overflow-hidden">
            {/* Top Bar */}
            <div className="h-12 flex items-center justify-between px-4 border-b border-[#1f1f1f] bg-[#0a0a0a]/80 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-white">{previewChat.title}</span>
                {previewChat.activeTask && (
                  <span className="text-[10px] font-mono text-[#888888] bg-[#141414] border border-[#262626] px-2 py-0.5 rounded-full">
                    {previewChat.activeTask}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/app"
                  className="text-[11px] font-medium text-[#888888] hover:text-white flex items-center gap-1"
                >
                  <span>Open Fullscreen Workspace</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Scrollable Messages Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-w-3xl mx-auto w-full no-scrollbar">
              {previewChat.messages.map((msg) => (
                <React.Fragment key={msg.id}>
                  {msg.role === "user" ? (
                    <UserMessage message={msg} />
                  ) : (
                    <AssistantMessage
                      message={msg}
                      onOpenViewer={(title, image, metrics) =>
                        setEvidenceModalData({ title, image, metrics })
                      }
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Simulated Interactive Composer */}
            <div className="p-4 border-t border-[#1a1a1a] bg-[#0a0a0a]">
              <div className="max-w-3xl mx-auto flex items-center gap-2 p-2 rounded-xl bg-[#141414] border border-[#2a2a2a]">
                <button
                  type="button"
                  className="p-2 rounded-lg text-[#737373] hover:text-white"
                  title="Upload raster"
                >
                  <Paperclip className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  readOnly
                  value="Ask a question about this satellite scene..."
                  className="flex-1 bg-transparent text-xs text-[#525252] focus:outline-none cursor-pointer"
                  onClick={() => {
                    window.location.href = "/app";
                  }}
                />
                <Link
                  href="/app"
                  className="p-2 rounded-lg bg-white text-black hover:bg-[#e5e5e5] transition-colors"
                  title="Try in workspace"
                >
                  <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Modal if Expanded */}
      {evidenceModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#121212] border border-[#2e2e2e] rounded-2xl p-6 shadow-modal space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#212121]">
              <h3 className="text-sm font-semibold text-white">{evidenceModalData.title}</h3>
              <button
                onClick={() => setEvidenceModalData(null)}
                className="p-1 text-[#737373] hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="aspect-[16/9] bg-black rounded-xl overflow-hidden">
              <img
                src={evidenceModalData.image}
                alt={evidenceModalData.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

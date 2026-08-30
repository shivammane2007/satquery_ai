"use client";

import React from "react";
import { useChat } from "@/components/providers/ChatContext";
import { PanelLeft, Share2, ShieldAlert, Cpu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function TopBar() {
  const {
    activeConversation,
    isSidebarOpen,
    setIsSidebarOpen,
    isTemporary,
    toggleTemporary,
    setShareModalOpen,
  } = useChat();

  return (
    <header className="h-14 flex items-center justify-between px-4 border-b border-[#1f1f1f] bg-[#000000]/80 backdrop-blur-md sticky top-0 z-30 select-none">
      {/* Left side */}
      <div className="flex items-center gap-3 min-w-0">
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-1.5 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors shrink-0"
            title="Open sidebar"
          >
            <PanelLeft className="w-4 h-4" />
          </button>
        )}

        <div className="flex items-center gap-2.5 min-w-0">
          <h1 className="text-xs sm:text-sm font-medium text-white truncate">
            {activeConversation?.title || "SatQuery Intelligence"}
          </h1>

          {activeConversation?.activeTask && (
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#171717] border border-[#2a2a2a] text-[#a3a3a3]">
              {activeConversation.activeTask}
            </span>
          )}

          {isTemporary && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-[#221f14] border border-[#443818] text-[#d4b152]">
              <ShieldAlert className="w-3 h-3" />
              Temporary Chat
            </span>
          )}
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Model Tag */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#121212] border border-[#262626] text-[11px] text-[#888888] font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>GeoChat • Sentinel Core</span>
        </div>

        {/* Temporary Chat Toggle */}
        <button
          onClick={toggleTemporary}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-colors font-medium border",
            isTemporary
              ? "bg-[#262626] text-white border-[#444444]"
              : "bg-transparent text-[#737373] hover:text-white border-transparent hover:bg-[#171717]"
          )}
          title={isTemporary ? "Temporary mode active (will not be saved)" : "Enable temporary chat"}
        >
          <span className={cn("w-1.5 h-1.5 rounded-full", isTemporary ? "bg-white" : "bg-[#525252]")} />
          <span className="hidden sm:inline">Temporary</span>
        </button>

        {/* Share Button */}
        <button
          onClick={() => setShareModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] hover:bg-[#212121] text-[#e5e5e5] hover:text-white border border-[#2e2e2e] rounded-lg text-xs font-medium transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Share</span>
        </button>
      </div>
    </header>
  );
}

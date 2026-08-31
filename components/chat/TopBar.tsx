"use client";

import React from "react";
import { useChat } from "@/components/providers/ChatContext";
import { PanelLeft, Share2, ShieldAlert, Cpu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
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
    <header className="h-14 flex items-center justify-between px-4 border-b border-[#ded9ce] dark:border-[#1f1f1f] bg-[#f7f6f2]/90 dark:bg-[#000000]/80 backdrop-blur-md sticky top-0 z-30 select-none transition-colors">
      {/* Left side */}
      <div className="flex items-center gap-3 min-w-0">
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-1.5 rounded-lg text-[#52525b] dark:text-[#737373] hover:text-[#18181b] dark:hover:text-white hover:bg-[#edeae3] dark:hover:bg-[#1a1a1a] transition-colors shrink-0"
            title="Open sidebar"
          >
            <PanelLeft className="w-4 h-4" />
          </button>
        )}

        <div className="flex items-center gap-2.5 min-w-0">
          <h1 className="text-xs sm:text-sm font-medium text-[#18181b] dark:text-white truncate">
            {activeConversation?.title || "SatQuery Intelligence"}
          </h1>

          {activeConversation?.activeTask && (
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#edeae3] dark:bg-[#171717] border border-[#ded9ce] dark:border-[#2a2a2a] text-[#18181b] dark:text-[#a3a3a3]">
              {activeConversation.activeTask}
            </span>
          )}

          {isTemporary && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-[#fef9c3] dark:bg-[#221f14] border border-[#fde047] dark:border-[#443818] text-[#854d0e] dark:text-[#d4b152] font-medium">
              <ShieldAlert className="w-3 h-3" />
              Temporary
            </span>
          )}
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Model Tag */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-[#121212] border border-[#ded9ce] dark:border-[#262626] text-[11px] text-[#52525b] dark:text-[#888888] font-mono shadow-subtle">
          <Cpu className="w-3.5 h-3.5 text-[#71717a] dark:text-[#888888]" />
          <span>GeoChat • Sentinel Core</span>
        </div>

        {/* Temporary Chat Toggle */}
        <button
          onClick={toggleTemporary}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs transition-all font-medium border",
            isTemporary
              ? "bg-[#edeae3] dark:bg-[#262626] text-[#18181b] dark:text-white border-[#ded9ce] dark:border-[#444444] shadow-subtle"
              : "bg-transparent text-[#52525b] dark:text-[#737373] hover:text-[#18181b] dark:hover:text-white border-transparent hover:bg-[#edeae3] dark:hover:bg-[#171717]"
          )}
          title={isTemporary ? "Temporary mode active (will not be saved)" : "Enable temporary chat"}
        >
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-colors",
              isTemporary ? "bg-[#18181b] dark:bg-white" : "bg-[#a1a1aa] dark:bg-[#525252]"
            )}
          />
          <span className="hidden sm:inline">Temporary</span>
        </button>

        {/* Share Button */}
        <button
          onClick={() => setShareModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#171717] hover:bg-[#edeae3] dark:hover:bg-[#212121] text-[#18181b] dark:text-[#e5e5e5] hover:text-[#18181b] dark:hover:text-white border border-[#ded9ce] dark:border-[#2e2e2e] rounded-xl text-xs font-medium transition-colors shadow-subtle"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Share</span>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}

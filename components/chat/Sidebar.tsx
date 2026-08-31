"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useChat } from "@/components/providers/ChatContext";
import { ConversationItem } from "./ConversationItem";
import { UserProfile } from "./UserProfile";
import { Plus, Search, PanelLeftClose, Layers, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const {
    conversations,
    activeConversationId,
    createNewConversation,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useChat();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter((c) =>
    !c.temporary && c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories: ("Today" | "Yesterday" | "Previous 7 Days" | "Older")[] = [
    "Today",
    "Yesterday",
    "Previous 7 Days",
    "Older",
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 z-50 flex flex-col w-[280px] bg-[#0d0d0d] border-r border-[#262626] transition-all duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:-ml-[280px]"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-3 border-b border-[#ded9ce] dark:border-[#1f1f1f]">
          <Link
            href="/"
            className="flex items-center gap-2 px-2 py-1 rounded-md text-[#18181b] dark:text-white hover:bg-[#edeae3] dark:hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="w-5 h-5 rounded border border-[#ded9ce] dark:border-[#444444] bg-[#f7f6f2] dark:bg-[#1a1a1a] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#18181b] dark:bg-white" />
            </div>
            <span className="font-semibold text-xs tracking-wider uppercase font-mono">
              SATQUERY AI
            </span>
          </Link>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1.5 rounded-lg text-[#52525b] dark:text-[#737373] hover:text-[#18181b] dark:hover:text-white hover:bg-[#edeae3] dark:hover:bg-[#1f1f1f] transition-colors"
            title="Collapse sidebar"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        {/* Action Controls */}
        <div className="p-3 space-y-2">
          <button
            onClick={() => createNewConversation()}
            className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white dark:bg-[#171717] hover:bg-[#edeae3] dark:hover:bg-[#212121] text-[#18181b] dark:text-white border border-[#ded9ce] dark:border-[#2e2e2e] rounded-xl text-xs font-medium transition-all shadow-subtle group"
          >
            <span className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-[#71717a] dark:text-[#888888] group-hover:text-[#18181b] dark:group-hover:text-white transition-colors" />
              New Analysis
            </span>
            <span className="text-[10px] text-[#71717a] dark:text-[#737373] font-mono border border-[#ded9ce] dark:border-[#333333] px-1.5 py-0.5 rounded">
              ⌘N
            </span>
          </button>

          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#71717a] dark:text-[#525252]" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-[#121212] border border-[#ded9ce] dark:border-[#212121] focus:border-[#18181b] dark:focus:border-[#333333] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#18181b] dark:text-[#d4d4d4] placeholder-[#71717a] dark:placeholder-[#525252] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto px-2 space-y-4 py-2 no-scrollbar">
          {searchQuery ? (
            <div className="space-y-1">
              <p className="px-3 text-[11px] font-semibold text-[#525252] uppercase tracking-wider">
                Search Results ({filteredConversations.length})
              </p>
              {filteredConversations.map((conv) => (
                <ConversationItem
                  key={conv.id}
                  conversation={conv}
                  isActive={conv.id === activeConversationId}
                />
              ))}
            </div>
          ) : (
            categories.map((cat) => {
              const catConvs = conversations.filter((c) => !c.temporary && c.category === cat);
              if (catConvs.length === 0) return null;
              return (
                <div key={cat} className="space-y-1">
                  <p className="px-3 text-[10px] font-semibold text-[#525252] uppercase tracking-wider">
                    {cat}
                  </p>
                  {catConvs.map((conv) => (
                    <ConversationItem
                      key={conv.id}
                      conversation={conv}
                      isActive={conv.id === activeConversationId}
                    />
                  ))}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info & User Profile */}
        <div className="p-3 border-t border-[#1f1f1f] bg-[#0a0a0a]">
          <UserProfile />
        </div>
      </aside>
    </>
  );
}

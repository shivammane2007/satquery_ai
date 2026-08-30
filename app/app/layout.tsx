"use client";

import React from "react";
import { Sidebar } from "@/components/chat/Sidebar";
import { TopBar } from "@/components/chat/TopBar";
import { ShareModal } from "@/components/chat/ShareModal";
import { EvidenceModal } from "@/components/chat/EvidenceModal";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#000000] text-white">
      {/* Collapsible ChatGPT-style Sidebar */}
      <Sidebar />

      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-[#050505]">
        <TopBar />
        <main className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
          {children}
        </main>
      </div>

      {/* Modals */}
      <ShareModal />
      <EvidenceModal />
    </div>
  );
}

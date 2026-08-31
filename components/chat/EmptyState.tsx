"use client";

import React from "react";
import { Attachment } from "@/lib/types";

interface EmptyStateProps {
  onSelectPrompt?: (prompt: string, sampleAttachments?: Attachment[]) => void;
}

export function EmptyState({}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto py-20 px-4 text-center space-y-4 select-none">
      {/* Brand Heading */}
      <div className="space-y-3">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#141414] dark:bg-[#141414] border border-[#ded9ce] dark:border-[#2e2e2e] shadow-subtle mb-1">
          <div className="w-5 h-5 rounded-full border border-[#18181b]/60 dark:border-white/60 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#18181b] dark:bg-white" />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#18181b] dark:text-white">
          SATQUERY AI
        </h2>
        <p className="text-sm text-[#52525b] dark:text-[#888888] font-normal max-w-md mx-auto leading-relaxed">
          Ask your Earth observation imagery anything. Upload scenes to quantify changes, fuse radar and optical bands, and generate evidence-grounded reports.
        </p>
      </div>
    </div>
  );
}

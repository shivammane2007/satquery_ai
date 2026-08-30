import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Compass } from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export function CTASection() {
  return (
    <section className="py-28 bg-black border-t border-[#1f1f1f] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-geo-grid pointer-events-none opacity-30" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2e2e2e] text-xs font-mono text-[#a3a3a3] uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5 text-white" />
          <span>START CONVERSATIONAL REMOTE SENSING</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
          Talk to the Earth.
        </h2>

        <p className="text-base sm:text-lg text-[#888888] font-normal max-w-xl mx-auto leading-relaxed">
          Upload your satellite scenes or connect your STAC catalog to analyze planetary changes, fuse radar data, and generate evidence-grounded reports.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/app"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#e5e5e5] text-black rounded-xl text-sm font-semibold tracking-wide transition-all shadow-card hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Try SatQuery AI</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link href="/models" className="inline-flex items-center">
            <LiquidMetalButton label="Explore Models" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { MultimodalData } from "@/lib/types";
import { Layers, Cloud, Radio, Sparkles, Maximize2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface MultimodalBlockProps {
  data: MultimodalData;
  onOpenViewer?: (title: string, image: string) => void;
}

export function MultimodalBlock({ data, onOpenViewer }: MultimodalBlockProps) {
  const [activeTab, setActiveTab] = useState<"fused" | "sar" | "optical">("fused");

  return (
    <div className="w-full rounded-2xl border border-[#262626] bg-[#0f0f0f] overflow-hidden space-y-4 p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#1f1f1f]">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#888888]" />
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Multimodal Cross-Sensor Fusion
            </h4>
          </div>
          <p className="text-[11px] text-[#737373]">
            Active radar (SAR) combined with optical baseline
          </p>
        </div>

        {/* Tab switch */}
        <div className="inline-flex p-0.5 rounded-lg bg-[#141414] border border-[#212121] text-xs self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("fused")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors text-[11px] font-medium",
              activeTab === "fused" ? "bg-[#262626] text-white" : "text-[#737373] hover:text-white"
            )}
          >
            <Sparkles className="w-3 h-3 text-[#888888]" />
            Fused Output
          </button>
          <button
            onClick={() => setActiveTab("sar")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors text-[11px] font-medium",
              activeTab === "sar" ? "bg-[#262626] text-white" : "text-[#737373] hover:text-white"
            )}
          >
            <Radio className="w-3 h-3 text-[#888888]" />
            SAR (Radar)
          </button>
          <button
            onClick={() => setActiveTab("optical")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors text-[11px] font-medium",
              activeTab === "optical" ? "bg-[#262626] text-white" : "text-[#737373] hover:text-white"
            )}
          >
            <Cloud className="w-3 h-3 text-[#888888]" />
            Optical (Cloudy)
          </button>
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#050505] rounded-xl overflow-hidden border border-[#212121]">
        <img
          src={
            activeTab === "fused"
              ? data.fusedImage
              : activeTab === "sar"
              ? data.sarImage
              : data.opticalImage
          }
          alt={activeTab}
          className="w-full h-full object-cover"
        />

        {/* Dynamic Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/85 border border-white/20 text-[10px] font-mono text-white flex items-center gap-1.5">
          {activeTab === "fused" ? (
            <>
              <Sparkles className="w-3 h-3 text-white" />
              <span>TERRAMIND FUSED REPRESENTATION • 410 ha FLOODING</span>
            </>
          ) : activeTab === "sar" ? (
            <>
              <Radio className="w-3 h-3 text-white" />
              <span>SENTINEL-1 C-BAND SAR • 100% CLOUD PENETRATION</span>
            </>
          ) : (
            <>
              <Cloud className="w-3 h-3 text-white" />
              <span>SENTINEL-2 OPTICAL • 88.4% CLOUD OBSCURATION</span>
            </>
          )}
        </div>

        {onOpenViewer && (
          <button
            onClick={() =>
              onOpenViewer(
                activeTab === "fused"
                  ? "Fused Multimodal Analysis"
                  : activeTab === "sar"
                  ? "SAR Backscatter Radar Layer"
                  : "Optical Cloud Covered Acquisition",
                activeTab === "fused"
                  ? data.fusedImage
                  : activeTab === "sar"
                  ? data.sarImage
                  : data.opticalImage
              )
            }
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/80 border border-white/20 text-[#d4d4d4] hover:text-white transition-colors"
            title="Expand View"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Sensor Interpretation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
        <div
          onClick={() => setActiveTab("optical")}
          className={cn(
            "p-3 rounded-xl border transition-colors cursor-pointer text-xs space-y-1",
            activeTab === "optical" ? "bg-[#1c1c1c] border-[#444444]" : "bg-[#121212] border-[#212121] hover:border-[#303030]"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-[#737373]">Optical Layer</span>
            <Cloud className="w-3 h-3 text-[#737373]" />
          </div>
          <p className="text-[11px] text-[#a3a3a3] leading-relaxed">{data.opticalInsight}</p>
        </div>

        <div
          onClick={() => setActiveTab("sar")}
          className={cn(
            "p-3 rounded-xl border transition-colors cursor-pointer text-xs space-y-1",
            activeTab === "sar" ? "bg-[#1c1c1c] border-[#444444]" : "bg-[#121212] border-[#212121] hover:border-[#303030]"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-[#737373]">SAR Backscatter</span>
            <Radio className="w-3 h-3 text-[#737373]" />
          </div>
          <p className="text-[11px] text-[#a3a3a3] leading-relaxed">{data.sarInsight}</p>
        </div>

        <div
          onClick={() => setActiveTab("fused")}
          className={cn(
            "p-3 rounded-xl border transition-colors cursor-pointer text-xs space-y-1",
            activeTab === "fused" ? "bg-[#1c1c1c] border-[#444444]" : "bg-[#121212] border-[#212121] hover:border-[#303030]"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-[#737373]">Fused Intelligence</span>
            <Sparkles className="w-3 h-3 text-[#888888]" />
          </div>
          <p className="text-[11px] text-[#a3a3a3] leading-relaxed">{data.fusedInsight}</p>
        </div>
      </div>
    </div>
  );
}

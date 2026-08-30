"use client";

import React, { useState } from "react";
import { SATELLITE_IMAGES } from "@/lib/satellite-assets";
import { Layers, Calendar, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChangeShowcase() {
  const [activeView, setActiveView] = useState<"slider" | "before" | "after" | "mask">("slider");
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section className="py-24 bg-black border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              TEMPORAL DIFFERENTIAL ANALYSIS
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
              Isolate genuine Earth changes across time.
            </h2>
            <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
              Compare Sentinel-2 and Landsat timestamps with sub-pixel alignment. SatQuery separates permanent structural expansions from seasonal crop cycles.
            </p>
          </div>

          {/* View mode toggle buttons */}
          <div className="inline-flex p-1 rounded-xl bg-[#121212] border border-[#262626] text-xs self-start sm:self-auto">
            <button
              onClick={() => setActiveView("slider")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors",
                activeView === "slider" ? "bg-[#262626] text-white" : "text-[#737373] hover:text-white"
              )}
            >
              Interactive Slider
            </button>
            <button
              onClick={() => setActiveView("before")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors",
                activeView === "before" ? "bg-[#262626] text-white" : "text-[#737373] hover:text-white"
              )}
            >
              Before (2024)
            </button>
            <button
              onClick={() => setActiveView("after")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors",
                activeView === "after" ? "bg-[#262626] text-white" : "text-[#737373] hover:text-white"
              )}
            >
              After (2025)
            </button>
            <button
              onClick={() => setActiveView("mask")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors",
                activeView === "mask" ? "bg-[#262626] text-white" : "text-[#737373] hover:text-white"
              )}
            >
              Change Mask
            </button>
          </div>
        </div>

        {/* Big Interactive Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Display */}
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#080808] rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-card select-none">
              {activeView === "slider" ? (
                <div
                  className="relative w-full h-full cursor-ew-resize overflow-hidden"
                  onMouseMove={handleSliderMove}
                  onTouchMove={handleTouchMove}
                >
                  {/* After Image */}
                  <img
                    src={SATELLITE_IMAGES.puneAfter}
                    alt="After acquisition 2025"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Before Image with clipping */}
                  <div
                    className="absolute inset-0 h-full overflow-hidden border-r border-white"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <img
                      src={SATELLITE_IMAGES.puneBefore}
                      alt="Before acquisition 2024"
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/85 border border-white/20 text-[10px] font-mono text-white">
                      BEFORE • 2024-01-12
                    </div>
                  </div>

                  {/* After Tag */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/85 border border-white/20 text-[10px] font-mono text-white pointer-events-none">
                    AFTER • 2025-01-18
                  </div>

                  {/* Divider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none flex items-center justify-center"
                    style={{ left: `calc(${sliderPos}% - 2px)` }}
                  >
                    <div className="w-7 h-7 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center shadow-card">
                      ↔
                    </div>
                  </div>
                </div>
              ) : activeView === "before" ? (
                <div className="relative w-full h-full">
                  <img
                    src={SATELLITE_IMAGES.puneBefore}
                    alt="Before acquisition"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/85 border border-white/20 text-[10px] font-mono text-white">
                    BEFORE • 2024-01-12 (Sentinel-2 10m)
                  </div>
                </div>
              ) : activeView === "after" ? (
                <div className="relative w-full h-full">
                  <img
                    src={SATELLITE_IMAGES.puneAfter}
                    alt="After acquisition"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/85 border border-white/20 text-[10px] font-mono text-white">
                    AFTER • 2025-01-18 (Sentinel-2 10m)
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={SATELLITE_IMAGES.puneChangeMask}
                    alt="Segmented change mask"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/85 border border-white/20 text-[10px] font-mono text-white">
                    DETECTED DIFFERENTIAL MASK • 12.4 ha EXPANSION
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Metrics & Analytical Explanation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-[#262626] space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#737373]">
                  SYNTHESIZED INSIGHT
                </span>
                <p className="text-sm text-white font-medium leading-relaxed">
                  "Built-up area expanded across the northern portion of the AOI. 12.4 hectares of new industrial and logistics infrastructure detected."
                </p>
              </div>

              <div className="h-[1px] bg-[#1f1f1f]" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#888888]">Net Expansion</span>
                  <span className="font-mono font-semibold text-white">12.4 ha</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#888888]">Baseline Shift</span>
                  <span className="font-mono text-white">+8.2% non-permeable</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#888888]">Coregistration RMSE</span>
                  <span className="font-mono text-white">&lt; 0.18 pixels</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#888888]">Confidence Score</span>
                  <span className="font-mono text-white">87% (High)</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] text-xs text-[#737373] space-y-1.5">
              <span className="font-mono text-[10px] uppercase text-[#525252] block">
                SPECIALIST MODEL ROUTE
              </span>
              <p className="text-[#a3a3a3]">
                Processed via <strong>Change Detection Model</strong> + <strong>GeoChat</strong> spatial grounding for vector delineation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

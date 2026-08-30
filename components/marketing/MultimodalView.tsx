"use client";

import React, { useState } from "react";
import { SATELLITE_IMAGES } from "@/lib/satellite-assets";
import { Radio, Cloud, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function MultimodalView() {
  const [selectedModality, setSelectedModality] = useState<"optical" | "sar" | "fused">("fused");

  return (
    <section className="py-24 bg-black border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
            CROSS-MODAL EARTH OBSERVATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            Optical + SAR: Fused understanding.
          </h2>
          <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
            Earth observation data extends far beyond standard photography. SatQuery unifies passive optical multispectral bands with active Sentinel-1 C-band synthetic aperture radar (SAR) to reason through persistent monsoon clouds and wildfire smoke.
          </p>
        </div>

        {/* 3-Panel Visual Composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Panel 1: Optical */}
          <div
            onClick={() => setSelectedModality("optical")}
            className={cn(
              "p-4 rounded-2xl border transition-all cursor-pointer space-y-3",
              selectedModality === "optical"
                ? "bg-[#141414] border-white shadow-card"
                : "bg-[#0a0a0a] border-[#212121] hover:border-[#333333]"
            )}
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black border border-[#1f1f1f] relative">
              <img
                src={SATELLITE_IMAGES.opticalCloudy}
                alt="Optical multispectral"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                OPTICAL (S2)
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-white">
                <Cloud className="w-3.5 h-3.5 text-[#888888]" />
                <span>Multispectral Optical</span>
              </div>
              <p className="text-[11px] text-[#737373] leading-relaxed">
                Captures high-resolution spectral reflectances but suffers 88% obscuration during heavy cloud cover.
              </p>
            </div>
          </div>

          {/* Panel 2: SAR */}
          <div
            onClick={() => setSelectedModality("sar")}
            className={cn(
              "p-4 rounded-2xl border transition-all cursor-pointer space-y-3",
              selectedModality === "sar"
                ? "bg-[#141414] border-white shadow-card"
                : "bg-[#0a0a0a] border-[#212121] hover:border-[#333333]"
            )}
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black border border-[#1f1f1f] relative">
              <img
                src={SATELLITE_IMAGES.sarRadar}
                alt="SAR Synthetic Aperture Radar"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                SAR (SENTINEL-1)
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-white">
                <Radio className="w-3.5 h-3.5 text-[#888888]" />
                <span>C-Band Radar Backscatter</span>
              </div>
              <p className="text-[11px] text-[#737373] leading-relaxed">
                100% cloud-penetrating radar. Specular backscatter (-22.4 dB) identifies standing flood water and surface roughness.
              </p>
            </div>
          </div>

          {/* Panel 3: Fused */}
          <div
            onClick={() => setSelectedModality("fused")}
            className={cn(
              "p-4 rounded-2xl border transition-all cursor-pointer space-y-3",
              selectedModality === "fused"
                ? "bg-[#171717] border-white shadow-card"
                : "bg-[#0c0c0c] border-[#262626] hover:border-[#383838]"
            )}
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black border border-[#1f1f1f] relative">
              <img
                src={SATELLITE_IMAGES.fusedMultimodal}
                alt="Fused multimodal understanding"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                FUSED INTELLIGENCE
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-white">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>TerraMind Multimodal Fusion</span>
              </div>
              <p className="text-[11px] text-[#a3a3a3] leading-relaxed">
                Joint embedding aligns optical topography with calibrated SAR vectors, extracting a verified 410 ha flood inundation zone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

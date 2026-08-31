"use client";

import React from "react";
import {
  MessageSquare,
  Layers,
  Radio,
  Compass,
  Database,
  History,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";

export function FeaturesGrid() {
  const features = [
    {
      id: "ask",
      title: "Ask Your Imagery",
      category: "Vision-Language Grounding",
      description: "Natural-language visual question answering over satellite imagery, aerial orthophotos, and multispectral scenes.",
      icon: MessageSquare,
      colSpan: "md:col-span-2",
      metadata: "Sub-meter to 30m GSD • Zero-shot reasoning",
    },
    {
      id: "change",
      title: "Temporal Change Analysis",
      category: "Bi-Temporal Comparison",
      description: "Automated sub-pixel coregistration and difference vector mapping to isolate permanent structural expansion from seasonal phenology.",
      icon: Layers,
      colSpan: "md:col-span-1",
      metadata: "12.4 ha quantification • Sentinel-2 / Landsat",
    },
    {
      id: "multimodal",
      title: "Optical + SAR Understanding",
      category: "Cross-Modal Intelligence",
      description: "Fuse passive optical reflectances with active Sentinel-1 C-band radar backscatter to analyze flood inundation through persistent cloud cover.",
      icon: Radio,
      colSpan: "md:col-span-1",
      metadata: "All-weather penetration • Specular watermask",
    },
    {
      id: "grounding",
      title: "Grounded Spatial Evidence",
      category: "Pixel Bounding & Masks",
      description: "Every generated insight is anchored in verifiable pixel coordinates, bounding boxes, or segmentation overlays rather than abstract text.",
      icon: Compass,
      colSpan: "md:col-span-2",
      metadata: "EPSG:32643 UTM Grid • Normalized centroids",
    },
    {
      id: "retrieval",
      title: "Automated Catalog Retrieval",
      category: "STAC Integration",
      description: "Retrieve cloud-free satellite acquisitions instantly based on named AOIs, bounding coordinates, and temporal windows.",
      icon: Database,
      colSpan: "md:col-span-1",
      metadata: "Copernicus Hub • USGS Landsat STAC",
    },
    {
      id: "memory",
      title: "Conversational Multi-Turn Memory",
      category: "Stateful Session",
      description: "Maintain geospatial context across queries—drill down into specific agricultural parcels, zoom into industrial sectors, and export reports.",
      icon: History,
      colSpan: "md:col-span-1",
      metadata: "Persistent AOI context • Session continuity",
    },
    {
      id: "trace",
      title: "Confidence & Execution Trace",
      category: "Observable Pipeline",
      description: "Inspect every deterministic stage—from radiometric calibration to model routing—with exact timing and confidence calibration.",
      icon: Activity,
      colSpan: "md:col-span-1",
      metadata: "100% Deterministic • Observable stages",
    },
  ];

  return (
    <section id="features" className="py-24 bg-black border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
            CORE CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            Engineered for Earth observation intelligence.
          </h2>
          <p className="text-base text-[#888888] leading-relaxed">
            Seven specialized capabilities built specifically to understand planetary-scale raster data.
          </p>
        </div>

        {/* Editorial Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <BorderGlow
                key={f.id}
                className={`p-6 sm:p-7 rounded-2xl bg-[#141414] border border-[#333333] shadow-card transition-all flex flex-col justify-between space-y-6 ${f.colSpan}`}
                borderRadius={16}
                glowColor="0 0 100"
                colors={["#ffffff", "#ffffff", "#ffffff"]}
                backgroundColor="#141414"
                glowIntensity={1.0}
                edgeSensitivity={30}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-[#1c1c1c] border border-[#383838] text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-white/80 tracking-wider font-medium">
                      {f.category}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-medium text-white">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#888888]">
                  <span>{f.metadata}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80 text-white" />
                </div>
              </BorderGlow>
            );
          })}
        </div>
      </div>
    </section>
  );
}

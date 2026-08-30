"use client";

import React from "react";
import { SAMPLE_PROMPTS } from "@/lib/mock-data";
import { SATELLITE_IMAGES } from "@/lib/satellite-assets";
import { Attachment } from "@/lib/types";
import { Layers, Sparkles, Compass, Radio, ArrowUpRight } from "lucide-react";

interface EmptyStateProps {
  onSelectPrompt: (prompt: string, sampleAttachments?: Attachment[]) => void;
}

export function EmptyState({ onSelectPrompt }: EmptyStateProps) {
  const sampleScenarios = [
    {
      title: "Temporal Change Analysis",
      prompt: "What changed between these two Sentinel-2 images? Outline new industrial expansion in northern Pune.",
      tag: "Bi-Temporal • 10m",
      icon: Layers,
      attachments: [
        {
          id: `sample-att-1`,
          name: "sentinel2_pune_2024.tif",
          size: "14.2 MB",
          type: "image/geotiff" as const,
          url: SATELLITE_IMAGES.puneBefore,
          sensor: "Sentinel-2" as const,
          date: "2024-01-12",
          resolution: "10m",
          role: "before" as const,
        },
        {
          id: `sample-att-2`,
          name: "sentinel2_pune_2025.tif",
          size: "14.8 MB",
          type: "image/geotiff" as const,
          url: SATELLITE_IMAGES.puneAfter,
          sensor: "Sentinel-2" as const,
          date: "2025-01-18",
          resolution: "10m",
          role: "after" as const,
        }
      ]
    },
    {
      title: "Optical + SAR Inundation Mapping",
      prompt: "Assess monsoon flooding in the Mithi catchment through cloud cover using Sentinel-1 SAR backscatter.",
      tag: "Multimodal Radar",
      icon: Radio,
      attachments: [
        {
          id: `sample-att-3`,
          name: "sentinel1_sar_mumbai.tif",
          size: "22.4 MB",
          type: "image/geotiff" as const,
          url: SATELLITE_IMAGES.sarRadar,
          sensor: "Sentinel-1 SAR" as const,
          date: "2026-08-28",
          resolution: "10m",
          role: "sar" as const,
        }
      ]
    },
    {
      title: "Built-up Feature Grounding",
      prompt: "Identify and ground all industrial and infrastructure facilities with coordinate bounding boxes.",
      tag: "Spatial VQA",
      icon: Compass,
      attachments: [
        {
          id: `sample-att-4`,
          name: "sentinel2_aoi_overview.tif",
          size: "12.6 MB",
          type: "image/geotiff" as const,
          url: SATELLITE_IMAGES.puneBefore,
          sensor: "Sentinel-2" as const,
          date: "2024-01-12",
          resolution: "10m",
          role: "primary" as const,
        }
      ]
    },
    {
      title: "Multispectral Canopy Stress",
      prompt: "Evaluate crop moisture stress and vegetative vigor across this agricultural sector using NDVI and NDRE.",
      tag: "Multispectral",
      icon: Sparkles,
      attachments: [
        {
          id: `sample-att-5`,
          name: "sentinel2_multispectral_ndvi.tif",
          size: "16.1 MB",
          type: "image/geotiff" as const,
          url: SATELLITE_IMAGES.puneBefore,
          sensor: "Sentinel-2" as const,
          date: "2026-08-20",
          resolution: "10m",
          role: "primary" as const,
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto py-12 px-4 text-center space-y-8 select-none">
      {/* Brand Heading */}
      <div className="space-y-2.5">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#141414] border border-[#2e2e2e] shadow-subtle mb-1">
          <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
          SATQUERY AI
        </h2>
        <p className="text-sm text-[#888888] font-normal max-w-md mx-auto">
          Ask your Earth observation imagery anything. Upload scenes to quantify changes, fuse radar and optical bands, and generate evidence-grounded reports.
        </p>
      </div>

      {/* Preset Query Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        {sampleScenarios.map((sc, idx) => {
          const Icon = sc.icon;
          return (
            <button
              key={idx}
              onClick={() => onSelectPrompt(sc.prompt, sc.attachments)}
              className="group p-3.5 rounded-2xl bg-[#121212] hover:bg-[#171717] border border-[#242424] hover:border-[#383838] transition-all text-left space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white">
                    <Icon className="w-3.5 h-3.5 text-[#888888] group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">{sc.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#737373] bg-[#1a1a1a] px-1.5 py-0.5 rounded">
                    {sc.tag}
                  </span>
                </div>
                <p className="text-[11px] text-[#888888] group-hover:text-[#b5b5b5] transition-colors line-clamp-2 leading-relaxed">
                  "{sc.prompt}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[#1a1a1a] text-[10px] text-[#525252] group-hover:text-[#888888]">
                <span>Load demo scenario</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

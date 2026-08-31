import React from "react";
import { Layers, Terminal, Cpu, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-black border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
            THE REMOTE-SENSING BOTTLENECK
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            Earth observation data is everywhere. Direct access is not.
          </h2>
          <p className="text-base text-[#888888] leading-relaxed">
            Conventional Earth observation analysis demands complex GIS software, custom raster python pipelines, and deep domain expertise. SatQuery turns the entire workflow into a direct conversational interface.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional GIS Workflow */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#333333] space-y-6 shadow-card">
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-white font-semibold">
                CONVENTIONAL WORKFLOW
              </span>
              <h3 className="text-lg font-medium text-white">
                Fragmented GIS & Scripting
              </h3>
            </div>

            <ul className="space-y-3.5 text-xs text-[#d4d4d4]">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Manual scene searching across multiple STAC catalogs and cloud buckets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Complex GDAL/rasterio commands required for simple reprojections and band math.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Separate specialist tools for radar (SNAP) and optical (QGIS) data processing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Hours spent writing scripts to compute simple temporal difference polygons.</span>
              </li>
            </ul>
          </div>

          {/* SatQuery AI Agentic Paradigm */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#333333] space-y-6 shadow-card">
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-white font-semibold">
                SATQUERY AI PARADIGM
              </span>
              <h3 className="text-lg font-medium text-white">
                Conversational Remote-Sensing Agent
              </h3>
            </div>

            <ul className="space-y-3.5 text-xs text-[#d4d4d4]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Ask natural-language questions directly over uploaded scenes or AOI coordinates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Automated sub-pixel coregistration, cloud masking, and spatial grounding.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Unified reasoning over multimodal optical and SAR synthetic aperture radar.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Instant hectarage quantification with observable execution traces and confidence metrics.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

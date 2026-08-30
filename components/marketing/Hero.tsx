"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Layers, Radio, Globe, Shield, Terminal } from "lucide-react";
import { SATELLITE_IMAGES } from "@/lib/satellite-assets";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export function Hero() {
  const [activeSensorBadge, setActiveSensorBadge] = useState<"optical" | "sar" | "dem">("optical");

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-black">
      {/* Background Geo-Grid & Radial Radar Texture */}
      <div className="absolute inset-0 bg-geo-grid pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-radar-gradient pointer-events-none opacity-80" />

      {/* Topographic Contour Lines SVG Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none">
          <path
            d="M -100 400 C 300 300 600 600 1540 380"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          <path
            d="M -100 460 C 320 360 620 660 1540 440"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <path
            d="M -100 520 C 340 420 640 720 1540 500"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Text Container */}
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2e2e2e] text-xs font-mono text-[#a3a3a3] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>REMOTE-SENSING INTELLIGENCE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.08]">
            Talk to satellite imagery.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#888888] font-normal leading-relaxed max-w-2xl">
            Ask questions about Earth observation data, compare imagery across time, inspect regions, and get evidence-grounded answers through an agentic remote-sensing workflow.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/app"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-[#e5e5e5] text-black rounded-xl text-sm font-semibold tracking-wide transition-all shadow-card hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Try SatQuery AI</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href="#preview" className="inline-flex items-center">
              <LiquidMetalButton label="Explore Platform" />
            </Link>
          </div>
        </div>

        {/* Sophisticated Satellite Visualization Card */}
        <div className="relative w-full rounded-2xl border border-[#262626] bg-[#0c0c0c] p-2 sm:p-4 shadow-card overflow-hidden">
          {/* Top Bar with Geospatial Telemetry */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 border-b border-[#1c1c1c] text-xs font-mono text-[#737373]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-white">
                <Globe className="w-3.5 h-3.5 text-[#888888]" />
                <span>COPERNICUS STAC PIPELINE</span>
              </span>
              <span>•</span>
              <span>ORBIT TRACK: DESCENDING 43N</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">GSD: 10m / 20m</span>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#141414] border border-[#212121]">
              <button
                type="button"
                onClick={() => setActiveSensorBadge("optical")}
                className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all select-none ${
                  activeSensorBadge === "optical"
                    ? "bg-[#262626] text-white font-medium shadow-subtle border border-[#383838]"
                    : "text-[#737373] hover:text-white border border-transparent"
                }`}
              >
                Sentinel-2
              </button>
              <button
                type="button"
                onClick={() => setActiveSensorBadge("sar")}
                className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all select-none ${
                  activeSensorBadge === "sar"
                    ? "bg-[#262626] text-white font-medium shadow-subtle border border-[#383838]"
                    : "text-[#737373] hover:text-white border border-transparent"
                }`}
              >
                Sentinel-1 SAR
              </button>
              <button
                type="button"
                onClick={() => setActiveSensorBadge("dem")}
                className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all select-none ${
                  activeSensorBadge === "dem"
                    ? "bg-[#262626] text-white font-medium shadow-subtle border border-[#383838]"
                    : "text-[#737373] hover:text-white border border-transparent"
                }`}
              >
                Copernicus DEM
              </button>
            </div>
          </div>

          {/* Hero Geospatial Screen with Fixed Height & Aspect */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[280px] sm:min-h-[420px] bg-[#050505] rounded-xl overflow-hidden mt-3 border border-[#1f1f1f]">
            <img
              src={
                activeSensorBadge === "optical"
                  ? SATELLITE_IMAGES.puneAfter
                  : activeSensorBadge === "sar"
                  ? SATELLITE_IMAGES.sarRadar
                  : SATELLITE_IMAGES.heroSatelliteGrid
              }
              alt="Satellite Earth Observation Scene"
              className="absolute inset-0 w-full h-full object-cover select-none transition-opacity duration-200"
            />

            {/* Target Area of Interest (AOI) Reticle Overlay */}
            <div className="absolute inset-x-8 inset-y-8 sm:inset-x-20 sm:inset-y-12 border border-white/20 rounded-lg pointer-events-none flex flex-col justify-between p-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-white/70">
                <span>[ 18°31&apos;48&quot;N, 73°51&apos;18&quot;E ]</span>
                <span>AOI_04_PUNE_NORTH</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-white/70">
                <span>CRS: EPSG:32643</span>
                <span>SPECTRAL BANDS: B02, B03, B04, B08</span>
              </div>
            </div>

            {/* Live Interactive Floating Tag */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 p-3 rounded-xl bg-black/90 border border-white/20 backdrop-blur-md space-y-1 max-w-xs sm:max-w-sm">
              <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>Agentic Spatial Grounding</span>
              </div>
              <p className="text-[11px] text-[#a3a3a3] leading-relaxed">
                Natural-language questions are routed to specialist models, coregistered across time, and grounded in explicit pixel coordinates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Globe, Compass, ShieldCheck, ArrowRight, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white selection:bg-[#333333] selection:text-white">
        <Navbar />

        <main className="pt-32 pb-24 space-y-24">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2e2e2e] text-xs font-mono text-[#a3a3a3] uppercase tracking-wider">
              <span>PROJECT OVERVIEW</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-3xl leading-tight">
              An agentic interface for Earth observation.
            </h1>
            <p className="text-base sm:text-lg text-[#888888] max-w-2xl leading-relaxed">
              Satellite imagery is among humanity's most valuable datasets, yet analyzing it has historically required specialized GIS software and manual scripting. SatQuery turns remote-sensing workflows into a conversational interface.
            </p>
          </div>

          {/* Core Philosophy Editorial Blocks */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#0c0c0c] border border-[#212121] space-y-4">
                <span className="text-xs font-mono uppercase text-[#737373] tracking-wider">
                  01 / THE CHALLENGE
                </span>
                <h2 className="text-xl font-medium text-white">
                  The Remote-Sensing Bottleneck
                </h2>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  Every day, petabytes of multispectral, hyperspectral, and synthetic aperture radar (SAR) imagery are captured by constellations like Sentinel and Landsat. However, extracting actionable answers—such as flood boundaries, crop stress, or urban expansion—requires complex reprojections, sub-pixel coregistration, and specialized software.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#0c0c0c] border border-[#212121] space-y-4">
                <span className="text-xs font-mono uppercase text-[#737373] tracking-wider">
                  02 / THE SOLUTION
                </span>
                <h2 className="text-xl font-medium text-white">
                  Agentic Task Routing
                </h2>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  SatQuery acts as an intelligent coordinator. When a user asks a question, the agent validates the coordinate reference system, evaluates cloud cover, and routes the request to specialized foundation models like GeoChat, Prithvi-EO, and TerraMind.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#0c0c0c] border border-[#212121] space-y-4">
                <span className="text-xs font-mono uppercase text-[#737373] tracking-wider">
                  03 / VERIFIABILITY
                </span>
                <h2 className="text-xl font-medium text-white">
                  Evidence-Grounded Intelligence
                </h2>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  In geospatial analysis, hallucinated answers are unacceptable. Every response in SatQuery is coupled with inspectable visual evidence: pixel-level bounding reticles, difference vector masks, and calibrated confidence intervals.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#0c0c0c] border border-[#212121] space-y-4">
                <span className="text-xs font-mono uppercase text-[#737373] tracking-wider">
                  04 / MULTIMODAL
                </span>
                <h2 className="text-xl font-medium text-white">
                  Beyond Optical Photography
                </h2>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  By treating remote-sensing data as multidimensional rasters—rather than simple RGB images—SatQuery reasons over active radar backscatter (SAR), Near-Infrared vegetative indices, and elevation topographies seamlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Launch CTA */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#121212] border border-[#2e2e2e] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-medium text-white">
                  Experience conversational remote sensing.
                </h3>
                <p className="text-xs sm:text-sm text-[#888888]">
                  Open the SatQuery application and begin analyzing satellite scenes.
                </p>
              </div>
              <Link
                href="/app"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-xs rounded-xl hover:bg-[#e5e5e5] transition-colors shrink-0"
              >
                <span>Try SatQuery AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

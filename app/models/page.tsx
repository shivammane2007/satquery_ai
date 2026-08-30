import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { MODEL_STACK } from "@/lib/mock-data";
import { Cpu, Layers, CheckCircle2, ShieldCheck, ArrowRight, Binary } from "lucide-react";

export default function ModelsPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white selection:bg-[#333333] selection:text-white">
        <Navbar />

        <main className="pt-32 pb-24 space-y-24">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2e2e2e] text-xs font-mono text-[#a3a3a3] uppercase tracking-wider">
              <span>FOUNDATION MODEL ARCHITECTURE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-3xl leading-tight">
              Specialist models for Earth observation.
            </h1>
            <p className="text-base sm:text-lg text-[#888888] max-w-2xl leading-relaxed">
              SatQuery does not treat satellite data as generic RGB photos. It coordinates dedicated remote-sensing foundation models trained on multispectral physics and radar backscatter.
            </p>
          </div>

          {/* Model Cards Deep Dive */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {MODEL_STACK.map((model) => (
              <div
                key={model.id}
                id={model.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#0c0c0c] border border-[#212121] space-y-8"
              >
                {/* Model Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1f1f1f]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-medium text-white">{model.name}</h2>
                      <span className="text-[10px] font-mono text-white bg-[#1c1c1c] border border-[#2e2e2e] px-2.5 py-1 rounded-full">
                        {model.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#888888]">{model.category}</p>
                  </div>

                  <div className="text-xs font-mono text-[#737373] text-right">
                    <span>Resolution: {model.resolutionSupport}</span>
                  </div>
                </div>

                {/* Model Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase text-[#737373] tracking-wider block">
                        Architecture Role
                      </span>
                      <p className="text-sm text-[#d4d4d4] leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase text-[#737373] tracking-wider block">
                        Primary Tasks & Functions
                      </span>
                      <ul className="space-y-2 text-xs text-[#a3a3a3]">
                        {model.purpose.map((p, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-4 font-mono text-xs">
                    <span className="text-[10px] text-[#737373] uppercase tracking-wider block">
                      Technical Profile
                    </span>

                    <div className="space-y-2.5 text-[11px]">
                      <div>
                        <span className="text-[#737373] block">Supported Modalities</span>
                        <span className="text-white font-medium">{model.modalities.join(" • ")}</span>
                      </div>

                      <div className="h-[1px] bg-[#212121]" />

                      <div>
                        <span className="text-[#737373] block">Spatial Grounding</span>
                        <span className="text-white font-medium">{model.groundingCapabilities}</span>
                      </div>

                      <div className="h-[1px] bg-[#212121]" />

                      <div>
                        <span className="text-[#737373] block">Core Strengths</span>
                        <ul className="space-y-1 text-[#a3a3a3] pt-1">
                          {model.strengths.map((str, i) => (
                            <li key={i}>• {str}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Launch CTA */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#121212] border border-[#2e2e2e] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-medium text-white">
                  Experience the model stack in action.
                </h3>
                <p className="text-xs sm:text-sm text-[#888888]">
                  Run visual question-answering and temporal change queries in the live application.
                </p>
              </div>
              <Link
                href="/app"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-xs rounded-xl hover:bg-[#e5e5e5] transition-colors shrink-0"
              >
                <span>Launch SatQuery AI</span>
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

import React from "react";
import Link from "next/link";
import { MODEL_STACK } from "@/lib/mock-data";
import { Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export function ModelsOverview() {
  return (
    <section id="models" className="py-24 bg-black border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              FOUNDATION MODEL STACK
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
              One interface. Specialist Earth models.
            </h2>
            <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
              SatQuery does not rely on a generic LLM. It coordinates specialized remote-sensing foundation models optimized for multispectral physics, SAR radar backscatter, and spatial grounding.
            </p>
          </div>

          <Link
            href="/models"
            className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-[#d4d4d4] transition-colors shrink-0"
          >
            <span>Read full architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MODEL_STACK.slice(0, 2).map((model) => (
            <div
              key={model.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#141414] hover:bg-[#171717] border border-[#333333] hover:border-[#444444] shadow-card transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-lg font-medium text-white">{model.name}</h3>
                    <p className="text-xs text-[#a3a3a3] font-mono">{model.category}</p>
                  </div>
                  <span className="text-[10px] font-mono text-white bg-[#1c1c1c] border border-[#383838] px-2 py-0.5 rounded-full">
                    {model.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">
                  {model.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase text-white font-semibold tracking-wider block">
                    Core Capabilities
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#d4d4d4]">
                    {model.purpose.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#888888]">
                <span>Modalities: {model.modalities.join(" • ")}</span>
                <span>{model.resolutionSupport}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

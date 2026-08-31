"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Search,
  CheckCircle2,
  GitFork,
  Cpu,
  Layers,
  ShieldCheck,
  Check,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function WorkflowTrace() {
  const [activeStep, setActiveStep] = useState(3);

  const steps = [
    {
      id: 0,
      title: "User Question",
      category: "Natural Language Input",
      desc: "Natural-language query received alongside single or multi-temporal imagery files or STAC bounding coordinates.",
      icon: MessageSquare,
      detail: "Input: 'What changed in northern Pune?' + Sentinel-2 TIFFs (2024 vs 2025)",
    },
    {
      id: 1,
      title: "Query Understanding",
      category: "Intent & Spatial Parsing",
      desc: "Agent parses query intent, extracts temporal constraints, AOI geographic coordinates, and sensor requirements.",
      icon: Search,
      detail: "Extracted intent: Temporal Change Detection • AOI: Pune Northern Corridor",
    },
    {
      id: 2,
      title: "Input Validation",
      category: "Geospatial Normalization",
      desc: "Verifies CRS projection (EPSG:32643), cloud cover threshold, and performs sub-pixel tie-point coregistration.",
      icon: CheckCircle2,
      detail: "CRS Matched • Cloud Obscuration < 5% • Sub-pixel alignment RMSE: 0.18 px",
    },
    {
      id: 3,
      title: "Task Routing",
      category: "Specialist Dispatch",
      desc: "Agentic router dynamically selects optimal specialist models and raster processing routines for the specific task.",
      icon: GitFork,
      detail: "Dispatched to: Change Detection Model + GeoChat VQA Grounding Layer",
    },
    {
      id: 4,
      title: "Specialist Execution",
      category: "Foundation Inference",
      desc: "Deep feature difference extraction and multispectral band embeddings isolate permanent surface transformations.",
      icon: Cpu,
      detail: "Change Detection Model generated 12.4 ha difference vector polygon",
    },
    {
      id: 5,
      title: "Evidence Generation",
      category: "Spatial Grounding",
      desc: "Produces coregistered raster difference masks, bounding box reticles, and GIS-compatible vector contours.",
      icon: Layers,
      detail: "Created 12.4 ha change mask + 2 industrial cluster bounding reticles",
    },
    {
      id: 6,
      title: "Confidence Scoring",
      category: "Uncertainty Calibration",
      desc: "Calculates statistical confidence bounds based on radiometric quality, coregistration precision, and model probability.",
      icon: ShieldCheck,
      detail: "Calibrated Confidence: 87% (High Tier • ±0.3 ha statistical bound)",
    },
    {
      id: 7,
      title: "Synthesized Answer",
      category: "Grounded Delivery",
      desc: "Delivers a clear technical explanation directly tied to interactive visual evidence and observable execution trace.",
      icon: Check,
      detail: "Comprehensive report with split slider, metric breakdown, and export options",
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
            AGENTIC EXECUTION PIPELINE
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            How SatQuery thinks.
          </h2>
          <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
            SatQuery does not hallucinate answers. Every question travels through an observable, deterministic pipeline that validates projections, routes to specialist models, and grounds explanations in spatial evidence.
          </p>
        </div>

        {/* Interactive Pipeline Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Steps list */}
          <div className="lg:col-span-6 space-y-2">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 select-none shadow-card",
                    isActive
                      ? "bg-[#1f1f1f] border-white text-white ring-1 ring-white/50"
                      : "bg-[#141414] border-[#333333] text-[#d4d4d4] hover:text-white hover:bg-[#1a1a1a] hover:border-[#444444]"
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 font-mono font-bold",
                        isActive ? "bg-white text-black" : "bg-[#242424] text-white"
                      )}
                    >
                      0{step.id + 1}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-white truncate">{step.title}</p>
                      <p className="text-[10px] font-mono text-[#a3a3a3] truncate">
                        {step.category}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-transform",
                      isActive ? "text-white translate-x-0.5" : "text-[#888888]"
                    )}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Step Observable Inspector */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#333333] shadow-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-white font-semibold tracking-wider">
                    STAGE 0{activeStep + 1} / 08
                  </span>
                  <h3 className="text-lg font-medium text-white">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#1c1c1c] border border-[#383838] text-[10px] font-mono text-white">
                  Deterministic
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-white font-semibold block">
                    Execution Role
                  </span>
                  <p className="text-sm text-[#d4d4d4] leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626] space-y-1.5 font-mono text-xs">
                  <span className="text-[10px] uppercase text-white/70 block font-semibold">
                    Live Telemetry & Output State
                  </span>
                  <p className="text-white font-medium">{steps[activeStep].detail}</p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[#888888] border-t border-[#262626]">
                <span>Observable remote-sensing pipeline</span>
                <span>Zero Hallucination Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { ShieldCheck, Compass, Binary, Layers, CheckCircle2 } from "lucide-react";

export function TrustSection() {
  const trustPillars = [
    {
      title: "Pixel-Level Grounding",
      desc: "Every answer generates normalized pixel bounding reticles and vector masks, ensuring spatial claims are visually inspectable.",
      icon: Compass,
    },
    {
      title: "Sub-Pixel Coregistration",
      desc: "Automatic tie-point alignment with residual RMSE < 0.2 pixels prevents false positives caused by orbital shifting.",
      icon: Layers,
    },
    {
      title: "Calibrated Confidence",
      desc: "Confidence percentages reflect radiometric quality, cloud obscuration levels, and model variance rather than arbitrary scores.",
      icon: ShieldCheck,
    },
    {
      title: "GIS-Native Compatibility",
      desc: "Outputs are structured in standard EPSG CRS coordinates ready for direct export into QGIS, ArcGIS, or GeoJSON formats.",
      icon: Binary,
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
            VERIFIABLE REMOTE SENSING
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            Built for mission-critical Earth observation.
          </h2>
          <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
            In geospatial intelligence, ungrounded claims are useless. SatQuery is engineered from the ground up for strict spatial verifiability.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0c0c] border border-[#212121] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-[#171717] border border-[#2e2e2e] flex items-center justify-center text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-medium text-white">{p.title}</h3>
                  <p className="text-xs text-[#888888] leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-2 border-t border-[#171717] flex items-center gap-1.5 text-[10px] font-mono text-[#525252]">
                  <CheckCircle2 className="w-3 h-3 text-[#737373]" />
                  <span>Audited Remote-Sensing Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import {
  MessageSquare,
  Layers,
  Radio,
  Compass,
  Database,
  History,
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Table,
} from "lucide-react";

export default function FeaturesPage() {
  const sensorMatrix = [
    { sensor: "Sentinel-2 MSI", bands: "13 Spectral Bands", gsd: "10m / 20m / 60m", revisit: "5 Days", primaryUse: "LULC, NDVI, Urban Expansion, Water Bodies" },
    { sensor: "Sentinel-1 SAR", bands: "C-Band (VV, VH, HH, HV)", gsd: "10m (IW Mode)", revisit: "6-12 Days", primaryUse: "All-Weather Flood Inundation, Soil Roughness" },
    { sensor: "Landsat-8/9 OLI/TIRS", bands: "11 Bands (VNIR, SWIR, Thermal)", gsd: "15m / 30m / 100m", revisit: "8 Days (Constellation)", primaryUse: "Multi-Decadal Baseline Trends, Thermal Mapping" },
    { sensor: "PlanetScope", bands: "8 Bands (SuperDove)", gsd: "3m GSD", revisit: "Daily", primaryUse: "High-Frequency Daily Infrastructure & Agriculture" },
    { sensor: "Custom GeoTIFF", bands: "Single/Multi-band Orthos", gsd: "Arbitrary (Sub-meter to km)", revisit: "User Ingest", primaryUse: "Drone Orthophotos, Aerial Imagery, DEM Rasters" },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white selection:bg-[#333333] selection:text-white">
        <Navbar />
        
        <main className="pt-32 pb-24 space-y-24">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2e2e2e] text-xs font-mono text-[#a3a3a3] uppercase tracking-wider">
              <span>CORE SYSTEM SPECIFICATION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-3xl leading-tight">
              Features engineered for Earth observation data.
            </h1>
            <p className="text-base sm:text-lg text-[#888888] max-w-2xl leading-relaxed">
              Explore the technical capabilities, sensor integrations, and grounded workflows powering SatQuery AI.
            </p>
          </div>

          {/* Deep-Dive Feature Sections */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Capability 1: Natural-Language VQA */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#0a0a0a] border border-[#1f1f1f]">
              <div className="lg:col-span-6 space-y-4">
                <div className="p-2.5 rounded-xl bg-[#141414] border border-[#262626] text-white w-fit">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-white">
                  Conversational Visual Question Answering
                </h2>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  Query satellite imagery using natural language. SatQuery resolves spatial relationships, extracts features, and returns answers grounded in verified pixel coordinates.
                </p>
                <ul className="space-y-2 text-xs text-[#d4d4d4] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Zero-shot recognition across urban, agricultural, and hydrological landscapes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Normalized pixel coordinates for bounding boxes and spatial centroids</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-3 font-mono text-xs">
                <span className="text-[10px] text-[#737373] uppercase tracking-wider block">Sample Interaction</span>
                <p className="text-[#a3a3a3]">Q: "Identify all solar farm arrays in this scene and extract their area."</p>
                <div className="p-3 rounded-lg bg-[#080808] border border-[#1f1f1f] text-[#d4d4d4] space-y-1 text-[11px]">
                  <p className="text-white font-semibold">SatQuery: Found 3 solar panel installations (total 42.1 ha).</p>
                  <p className="text-[#737373]">Grounded boxes: [28.4% N, 77.2% E] • Spectral reflectance: Low NIR, High PV signature</p>
                </div>
              </div>
            </div>

            {/* Capability 2: Bi-Temporal Change Detection */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#0a0a0a] border border-[#1f1f1f]">
              <div className="lg:col-span-6 space-y-4">
                <div className="p-2.5 rounded-xl bg-[#141414] border border-[#262626] text-white w-fit">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-white">
                  Sub-Pixel Coregistered Change Detection
                </h2>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  Compare two satellite timestamps to isolate genuine surface transformations. Automatic tie-point matching eliminates orbital jitter and atmospheric artifacts.
                </p>
                <ul className="space-y-2 text-xs text-[#d4d4d4] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Difference vector masks with hectarage metrics (± statistical bounds)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Distinguishes permanent construction from seasonal crop cycles</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-3 font-mono text-xs">
                <span className="text-[10px] text-[#737373] uppercase tracking-wider block">Differential Metrics</span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#080808] border border-[#1f1f1f] rounded-lg">
                    <span className="text-[10px] text-[#737373]">Net Growth</span>
                    <p className="text-sm font-semibold text-white">12.4 ha</p>
                  </div>
                  <div className="p-3 bg-[#080808] border border-[#1f1f1f] rounded-lg">
                    <span className="text-[10px] text-[#737373]">Coregistration RMSE</span>
                    <p className="text-sm font-semibold text-white">&lt; 0.18 px</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Capability 3: Multimodal Optical + SAR */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#0a0a0a] border border-[#1f1f1f]">
              <div className="lg:col-span-6 space-y-4">
                <div className="p-2.5 rounded-xl bg-[#141414] border border-[#262626] text-white w-fit">
                  <Radio className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-white">
                  All-Weather Optical & SAR Radar Fusion
                </h2>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  Persistent cloud cover and night conditions no longer block analysis. SatQuery fuses Sentinel-1 SAR radar backscatter with optical baselines.
                </p>
                <ul className="space-y-2 text-xs text-[#d4d4d4] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Calibrated gamma0 backscatter coefficients for water surface delineation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Topographic DEM slope correction and double-bounce urban filtering</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-3 font-mono text-xs">
                <span className="text-[10px] text-[#737373] uppercase tracking-wider block">Radar Water Mask</span>
                <p className="text-[#a3a3a3]">Specular threshold: -22.4 dB in VV polarization</p>
                <p className="text-[#737373]">100% cloud penetration verified across heavy monsoon storm scene.</p>
              </div>
            </div>
          </div>

          {/* Supported Sensor Integration Matrix */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#737373]">
                SENSOR INTEROPERABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-white">
                Supported Earth Observation Sensors
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#212121] bg-[#0c0c0c]">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#1f1f1f] bg-[#121212] font-mono text-[#737373] uppercase text-[10px]">
                    <th className="p-4">Sensor / Constellation</th>
                    <th className="p-4">Spectral Channels</th>
                    <th className="p-4">Spatial Resolution (GSD)</th>
                    <th className="p-4">Revisit Cycle</th>
                    <th className="p-4">Primary Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#171717]">
                  {sensorMatrix.map((s, idx) => (
                    <tr key={idx} className="hover:bg-[#121212] transition-colors">
                      <td className="p-4 font-medium text-white font-mono">{s.sensor}</td>
                      <td className="p-4 text-[#a3a3a3]">{s.bands}</td>
                      <td className="p-4 text-[#a3a3a3] font-mono">{s.gsd}</td>
                      <td className="p-4 text-[#a3a3a3] font-mono">{s.revisit}</td>
                      <td className="p-4 text-[#888888]">{s.primaryUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Launch CTA */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#121212] border border-[#2e2e2e] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-medium text-white">
                  Ready to test SatQuery with your imagery?
                </h3>
                <p className="text-xs sm:text-sm text-[#888888]">
                  Upload your own scenes or test preloaded scenarios in the live workspace.
                </p>
              </div>
              <Link
                href="/app"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-xs rounded-xl hover:bg-[#e5e5e5] transition-colors shrink-0"
              >
                <span>Open SatQuery Workspace</span>
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

"use client";

import React, { useState } from "react";
import { EvidenceData } from "@/lib/types";
import { Maximize2, ZoomIn, ZoomOut, RotateCcw, Download, Eye, Layers, MapPin, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface EvidenceViewerProps {
  evidence: EvidenceData;
  onOpenModal?: (title: string, image: string, metrics?: { label: string; value: string }[]) => void;
}

export function EvidenceViewer({ evidence, onOpenModal }: EvidenceViewerProps) {
  const [showBoundingBoxes, setShowBoundingBoxes] = useState(true);
  const [showMask, setShowMask] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  const currentImage = showMask && evidence.changeMask ? evidence.changeMask : evidence.sourceImage;

  return (
    <div className="w-full rounded-2xl border border-[#262626] bg-[#0f0f0f] p-4 space-y-3.5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#1f1f1f]">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#888888]" />
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Spatial Evidence & Grounding
            </h4>
          </div>
          {evidence.aoi && (
            <p className="text-[11px] text-[#737373] flex items-center gap-1.5 font-mono">
              <MapPin className="w-3 h-3 text-[#525252]" />
              <span>{evidence.aoi.name}</span>
              <span>•</span>
              <span>{evidence.aoi.coordinates}</span>
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          {evidence.boundingBoxes && evidence.boundingBoxes.length > 0 && (
            <button
              onClick={() => setShowBoundingBoxes((prev) => !prev)}
              className={cn(
                "flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors",
                showBoundingBoxes
                  ? "bg-[#212121] text-white border-[#333333]"
                  : "bg-transparent text-[#737373] border-transparent hover:text-white"
              )}
            >
              <Eye className="w-3 h-3" />
              <span>Bounding Boxes ({evidence.boundingBoxes.length})</span>
            </button>
          )}

          {evidence.changeMask && (
            <button
              onClick={() => setShowMask((prev) => !prev)}
              className={cn(
                "flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors",
                showMask
                  ? "bg-[#212121] text-white border-[#333333]"
                  : "bg-transparent text-[#737373] border-transparent hover:text-white"
              )}
            >
              <span>Mask Overlay</span>
            </button>
          )}

          <div className="h-4 w-[1px] bg-[#262626] mx-0.5 hidden sm:block" />

          {/* Zoom controls */}
          <button
            onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5))}
            className="p-1.5 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors"
            title="Zoom in"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))}
            className="p-1.5 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors"
            title="Zoom out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="p-1.5 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {onOpenModal && (
            <button
              onClick={() =>
                onOpenModal(
                  evidence.aoi?.name || "Spatial Grounding Evidence",
                  currentImage,
                  evidence.metrics?.map((m) => ({ label: m.label, value: m.value }))
                )
              }
              className="p-1.5 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors"
              title="Fullscreen view"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={handleDownload}
            className="p-1.5 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors"
            title="Export GeoTIFF / Vector Layer"
          >
            {downloaded ? <Check className="w-3.5 h-3.5 text-white" /> : <Download className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-[#050505] rounded-xl overflow-hidden border border-[#212121]">
        <div
          className="w-full h-full relative transition-transform duration-150 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={currentImage}
            alt="Spatial Evidence"
            className="w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Render Bounding Boxes if Active */}
          {showBoundingBoxes &&
            evidence.boundingBoxes &&
            evidence.boundingBoxes.map((box) => {
              const [ymin, xmin, ymax, xmax] = box.coordinates;
              return (
                <div
                  key={box.id}
                  className="absolute border-2 border-white bg-white/10 rounded-sm pointer-events-none transition-all"
                  style={{
                    top: `${ymin}%`,
                    left: `${xmin}%`,
                    width: `${xmax - xmin}%`,
                    height: `${ymax - ymin}%`,
                  }}
                >
                  <div className="absolute -top-6 left-0 px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono font-bold whitespace-nowrap shadow-card">
                    {box.label} ({Math.round(box.confidence * 100)}%)
                  </div>
                </div>
              );
            })}
        </div>

        {/* Zoom indicator */}
        {zoomLevel !== 1 && (
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 border border-white/20 text-[10px] font-mono text-white">
            {Math.round(zoomLevel * 100)}%
          </div>
        )}
      </div>

      {/* Grounded Metrics Footer */}
      {evidence.metrics && evidence.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          {evidence.metrics.map((m, idx) => (
            <div key={idx} className="p-2.5 bg-[#141414] border border-[#212121] rounded-xl space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-[#737373] block truncate">
                {m.label}
              </span>
              <p className="text-xs font-semibold text-white font-mono">{m.value}</p>
              {m.change && (
                <span className="text-[10px] text-[#888888]">{m.change}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

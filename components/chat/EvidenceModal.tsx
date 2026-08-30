"use client";

import React, { useState } from "react";
import { useChat } from "@/components/providers/ChatContext";
import { X, ZoomIn, ZoomOut, RotateCcw, Download, Check, MapPin, Layers } from "lucide-react";

export function EvidenceModal() {
  const { evidenceModalData, setEvidenceModalData } = useChat();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [downloaded, setDownloaded] = useState(false);

  if (!evidenceModalData) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-5xl h-[85vh] bg-[#121212] border border-[#2e2e2e] rounded-2xl flex flex-col shadow-modal overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#212121] bg-[#0d0d0d]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e]">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                {evidenceModalData.title}
              </h3>
              <p className="text-xs text-[#737373] font-mono">
                Full-Resolution Spatial Evidence • UTM Projection
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 3))}
              className="p-2 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors"
              title="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))}
              className="p-2 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors"
              title="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-2 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className="h-4 w-[1px] bg-[#262626] mx-1" />

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1f1f1f] hover:bg-[#262626] text-white rounded-lg text-xs font-medium transition-colors"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Saved</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Export</span>
                </>
              )}
            </button>

            <button
              onClick={() => setEvidenceModalData(null)}
              className="p-2 rounded-lg text-[#737373] hover:text-white hover:bg-[#1a1a1a] transition-colors ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Canvas Body */}
        <div className="flex-1 overflow-auto bg-[#080808] relative flex items-center justify-center p-4 select-none">
          <div
            className="transition-transform duration-150 ease-out max-w-full max-h-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={evidenceModalData.image}
              alt={evidenceModalData.title}
              className="max-h-[60vh] sm:max-h-[65vh] object-contain rounded-lg shadow-card border border-[#212121]"
            />
          </div>

          {zoomLevel !== 1 && (
            <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-lg bg-black/85 border border-white/20 text-xs font-mono text-white">
              Zoom: {Math.round(zoomLevel * 100)}%
            </div>
          )}
        </div>

        {/* Footer Metrics */}
        {evidenceModalData.metrics && (
          <div className="px-6 py-3 border-t border-[#212121] bg-[#0d0d0d] flex items-center gap-4 text-xs">
            {evidenceModalData.metrics.map((m: any, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-[#737373]">{m.label}:</span>
                <span className="font-mono font-semibold text-white">{m.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

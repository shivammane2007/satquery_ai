"use client";

import React, { useState, useRef, useEffect } from "react";
import { Attachment, SensorType } from "@/lib/types";
import { AttachmentChip } from "./AttachmentChip";
import { SATELLITE_IMAGES } from "@/lib/satellite-assets";
import { ArrowUp, Paperclip, Image as ImageIcon, Layers, Radio, Globe, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComposerProps {
  onSendMessage: (text: string, attachments: Attachment[]) => void;
  isStreaming?: boolean;
  initialText?: string;
  initialAttachments?: Attachment[];
}

export function Composer({
  onSendMessage,
  isStreaming = false,
  initialText = "",
  initialAttachments = [],
}: ComposerProps) {
  const [text, setText] = useState(initialText);
  const [attachments, setAttachments] = useState<Attachment[]>(initialAttachments);
  const [isDragOver, setIsDragOver] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialText) setText(initialText);
  }, [initialText]);

  useEffect(() => {
    if (initialAttachments && initialAttachments.length > 0) {
      setAttachments(initialAttachments);
    }
  }, [initialAttachments]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        180
      )}px`;
    }
  }, [text]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleSend = () => {
    if ((!text.trim() && attachments.length === 0) || isStreaming) return;
    onSendMessage(text, attachments);
    setText("");
    setAttachments([]);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newAttachments: Attachment[] = Array.from(files).map((file, idx) => ({
      id: `upload-${Date.now()}-${idx}`,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      type: (file.type as any) || "image/geotiff",
      url: SATELLITE_IMAGES.puneBefore, // Default high-res fallback raster preview
      sensor: "Sentinel-2",
      resolution: "10m",
      date: new Date().toISOString().split("T")[0],
    }));

    setAttachments((prev) => [...prev, ...newAttachments]);
    setMenuOpen(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAddPresetSensor = (sensor: SensorType, name: string, url: string) => {
    const newAtt: Attachment = {
      id: `preset-${Date.now()}-${Math.random()}`,
      name,
      size: "14.4 MB",
      type: "image/geotiff",
      url,
      sensor,
      resolution: "10m",
      date: new Date().toISOString().split("T")[0],
    };
    setAttachments((prev) => [...prev, newAtt]);
    setMenuOpen(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-4">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".tif,.tiff,.geotiff,.png,.jpg,.jpeg"
        onChange={handleFileUpload}
        className="hidden"
      />

      <div
        className={cn(
          "relative rounded-2xl bg-[#141414] border transition-all duration-200 shadow-card",
          isDragOver ? "border-white bg-[#1a1a1a]" : "border-[#2e2e2e] focus-within:border-[#4d4d4d]"
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const files = Array.from(e.dataTransfer.files);
            const droppedAtts: Attachment[] = files.map((file, idx) => ({
              id: `drop-${Date.now()}-${idx}`,
              name: file.name,
              size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
              type: (file.type as any) || "image/geotiff",
              url: SATELLITE_IMAGES.puneBefore,
              sensor: "Custom GeoTIFF",
              resolution: "10m",
            }));
            setAttachments((prev) => [...prev, droppedAtts[0]]);
          }
        }}
      >
        {/* Attachment Chips Preview Bar */}
        {attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 p-3 pb-0 border-b border-[#212121]">
            {attachments.map((att) => (
              <AttachmentChip
                key={att.id}
                attachment={att}
                onRemove={handleRemoveAttachment}
              />
            ))}
          </div>
        )}

        {/* Text Input Area */}
        <div className="flex items-end gap-2 p-3">
          {/* Attachment Selector Button */}
          <div className="relative shrink-0" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className={cn(
                "p-2 rounded-xl border transition-colors flex items-center justify-center",
                menuOpen || attachments.length > 0
                  ? "bg-[#212121] border-[#383838] text-white"
                  : "bg-[#171717] border-[#262626] text-[#737373] hover:text-white hover:bg-[#1f1f1f]"
              )}
              title="Attach satellite imagery or select sensor"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            {/* Quick Attachment Dropdown */}
            {menuOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-64 bg-[#171717] border border-[#303030] rounded-2xl p-2 shadow-modal z-50 space-y-1 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-2.5 py-1.5 text-[10px] uppercase font-mono text-[#737373] tracking-wider">
                  Select Imagery Source
                </div>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-[#e5e5e5] hover:text-white hover:bg-[#262626] rounded-xl transition-colors text-left"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#888888]" />
                  <div>
                    <p className="font-medium">Upload File (GeoTIFF, PNG)</p>
                    <p className="text-[10px] text-[#737373]">Single or multi-temporal raster</p>
                  </div>
                </button>

                <div className="h-[1px] bg-[#262626] my-1" />

                <div className="px-2.5 py-1 text-[10px] font-mono text-[#525252]">
                  Preset Satellite Layers
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleAddPresetSensor(
                      "Sentinel-2",
                      "sentinel2_pune_2025.tif",
                      SATELLITE_IMAGES.puneAfter
                    )
                  }
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-[#d4d4d4] hover:text-white hover:bg-[#262626] rounded-lg transition-colors text-left"
                >
                  <Layers className="w-3 h-3 text-[#888888]" />
                  <span>Sentinel-2 MSI (10m Optical)</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleAddPresetSensor(
                      "Sentinel-1 SAR",
                      "sentinel1_sar_c_band.tif",
                      SATELLITE_IMAGES.sarRadar
                    )
                  }
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-[#d4d4d4] hover:text-white hover:bg-[#262626] rounded-lg transition-colors text-left"
                >
                  <Radio className="w-3 h-3 text-[#888888]" />
                  <span>Sentinel-1 C-Band SAR (Radar)</span>
                </button>
              </div>
            )}
          </div>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask questions about Earth observation data, compare dates, or inspect features..."
            className="flex-1 max-h-[180px] bg-transparent text-sm text-white placeholder-[#525252] focus:outline-none resize-none py-1.5 leading-relaxed font-normal"
          />

          {/* Send Button */}
          <button
            type="button"
            onClick={handleSend}
            disabled={(!text.trim() && attachments.length === 0) || isStreaming}
            className={cn(
              "w-8 h-8 rounded-xl flex items-center justify-center transition-all shrink-0",
              (text.trim() || attachments.length > 0) && !isStreaming
                ? "bg-white text-black hover:bg-[#e5e5e5] shadow-subtle cursor-pointer"
                : "bg-[#212121] text-[#525252] cursor-not-allowed"
            )}
            title="Send query"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Understated Disclaimer */}
      <p className="text-[10px] text-center text-[#525252] font-mono mt-2 select-none">
        SatQuery AI synthesizes spatial evidence and coregistered raster indices. Verify mission-critical metrics.
      </p>
    </div>
  );
}

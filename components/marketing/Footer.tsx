import React from "react";
import Link from "next/link";
import { Globe, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1f1f1f] text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded border border-[#444444] bg-[#121212] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="font-semibold text-sm tracking-wider uppercase font-mono">
                SATQUERY AI
              </span>
            </Link>
            <p className="text-xs text-[#737373] leading-relaxed max-w-sm">
              The agentic remote-sensing interface for Earth observation data. Natural language VQA, temporal change detection, and optical-SAR multimodal fusion.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#525252]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              <span>Copernicus & STAC Pipelines Operational</span>
            </div>
          </div>

          {/* Nav Col 1: Platform */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase text-[#737373] tracking-wider block">
              PLATFORM
            </span>
            <ul className="space-y-2 text-xs text-[#a3a3a3]">
              <li>
                <Link href="/app" className="hover:text-white transition-colors">
                  Try SatQuery AI
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/models" className="hover:text-white transition-colors">
                  Foundation Models
                </Link>
              </li>
              <li>
                <Link href="/#preview" className="hover:text-white transition-colors">
                  Product Preview
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: Research */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase text-[#737373] tracking-wider block">
              RESEARCH & EO
            </span>
            <ul className="space-y-2 text-xs text-[#a3a3a3]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Project
                </Link>
              </li>
              <li>
                <Link href="/models#geochat" className="hover:text-white transition-colors">
                  GeoChat VQA
                </Link>
              </li>
              <li>
                <Link href="/models#terramind" className="hover:text-white transition-colors">
                  TerraMind SAR
                </Link>
              </li>
              <li>
                <Link href="/models#prithvi" className="hover:text-white transition-colors">
                  Prithvi-EO
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Col 3: Connect */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase text-[#737373] tracking-wider block">
              CONNECT
            </span>
            <ul className="space-y-2 text-xs text-[#a3a3a3]">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#525252]" />
                </a>
              </li>
              <li>
                <span className="text-[#525252]">SIH Presentation 2026</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#525252]">
          <p>© 2026 SatQuery AI. Grounded Earth Observation Intelligence.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#888888] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#888888] transition-colors">
              Inquiries
            </Link>
            <span className="font-mono text-[11px] text-[#404040]">UTM ZONE 43N</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

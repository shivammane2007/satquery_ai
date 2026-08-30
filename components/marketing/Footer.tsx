"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SocialCloud } from "@/components/ui/footer-section-4-utils/social-cloud";
import { ArrowRight, Check, Globe, Send, ShieldCheck } from "lucide-react";

const FOOTER_TITLE = "Talk to the Earth. Ask your imagery anything.";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { label: "Try SatQuery AI", href: "/app" },
        { label: "Capabilities", href: "/features" },
        { label: "Foundation Models", href: "/models" },
        { label: "Product Preview", href: "/#preview" },
      ],
    },
    {
      title: "Research & EO",
      links: [
        { label: "About Project", href: "/about" },
        { label: "GeoChat VQA", href: "/models#geochat" },
        { label: "TerraMind SAR", href: "/models#terramind" },
        { label: "Prithvi-EO", href: "/models#prithvi-eo" },
      ],
    },
    {
      title: "Sensors",
      links: [
        { label: "Sentinel-2 MSI", href: "/features" },
        { label: "Sentinel-1 SAR", href: "/features" },
        { label: "Landsat-8/9 OLI", href: "/features" },
        { label: "Custom GeoTIFF", href: "/app" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact & Inquiries", href: "/contact" },
        { label: "GitHub Repository", href: "https://github.com/shivammane2007/satquery_ai" },
        { label: "SIH 2026 Demo", href: "/about" },
        { label: "Privacy & Ephemeral", href: "/app" },
      ],
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="py-12 px-4 bg-black border-t border-[#1f1f1f] text-white select-none">
      <motion.div
        className="container mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row gap-4 h-full">
          {/* Left Brand & Mission Card */}
          <motion.div
            className="relative w-full lg:w-1/3 min-h-[320px] lg:min-h-[560px] overflow-hidden rounded-2xl bg-[#0c0c0c] border border-[#262626] flex flex-col justify-between p-8 sm:p-10 shadow-card"
            variants={itemVariants}
          >
            {/* SVG Noise & Grid Overlay */}
            <div className="absolute inset-0 bg-geo-grid pointer-events-none opacity-30 z-0" />
            <svg
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none mix-blend-screen z-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilterSatQuery">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilterSatQuery)" opacity="0.15" />
            </svg>

            {/* Top Logo */}
            <div className="relative z-10 space-y-2">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-6 h-6 rounded-lg border border-[#444444] bg-[#141414] flex items-center justify-center group-hover:border-white transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
                <span className="font-semibold text-sm tracking-wider uppercase font-mono text-white">
                  SATQUERY AI
                </span>
              </Link>
              <p className="text-xs text-[#737373] leading-relaxed max-w-xs font-mono">
                Agentic Earth observation assistant. Deterministic VQA, temporal change detection, and optical-SAR fusion.
              </p>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-5">
              <h3 className="text-base sm:text-lg font-medium text-white leading-snug">
                {FOOTER_TITLE}
              </h3>

              <SocialCloud className="text-white/80 gap-3" />

              <div className="space-y-1 pt-2 border-t border-[#1f1f1f] text-[11px] font-mono text-[#737373]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  <span>Copernicus STAC Pipelines Operational</span>
                </div>
                <p className="text-[10px] text-[#525252]">
                  &copy; {new Date().getFullYear()} SatQuery AI. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Navigation & Research Digest Card */}
          <motion.div
            className="w-full lg:w-2/3 rounded-2xl bg-[#090909] border border-[#262626] p-8 sm:p-10 flex flex-col justify-between min-h-[460px] lg:min-h-[560px]"
            variants={itemVariants}
          >
            {/* Top Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {footerLinks.map((section, idx) => (
                <div key={idx} className="flex flex-col space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373] font-semibold">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col space-y-2.5 text-xs text-[#a3a3a3]">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        {link.href.startsWith("http") ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Research Digest / Newsletter */}
            <div className="space-y-3 mt-10 pt-8 border-t border-[#1a1a1a]">
              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  Earth Observation Research Digest
                </h4>
                <p className="text-xs text-[#737373]">
                  Receive updates on new remote-sensing model checkpoints, STAC catalog integrations, and release notes.
                </p>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#141414] border border-[#2a2a2a] text-xs text-white">
                  <Check className="w-4 h-4 text-white" />
                  <span>Subscribed to SatQuery research updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-lg w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="analyst@geospatial-lab.org"
                    className="flex-1 rounded-xl px-4 py-2.5 text-xs bg-[#121212] text-white border border-[#262626] focus:border-[#4d4d4d] focus:outline-none transition-colors placeholder-[#525252]"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-white hover:bg-[#e5e5e5] text-black px-5 py-2.5 text-xs font-semibold tracking-wide transition-all shadow-subtle flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              <div className="flex items-center justify-between text-[11px] text-[#525252] font-mono pt-1">
                <span>WGS84 • UTM EPSG:32643</span>
                <span>Deterministic Geospatial Engine</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}

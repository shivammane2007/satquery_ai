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
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          {/* Left Brand & Mission Card */}
          <motion.div
            className="relative w-full lg:w-1/3 overflow-hidden rounded-2xl bg-[#0c0c0c] border border-[#262626] flex flex-col justify-between p-6 sm:p-8 shadow-card"
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

            {/* Top Brand Info */}
            <div className="relative z-10 space-y-3">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-6 h-6 rounded-lg border border-[#ded9ce] dark:border-[#444444] bg-[#f7f6f2] dark:bg-[#141414] flex items-center justify-center group-hover:border-[#18181b] dark:group-hover:border-white transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#18181b] dark:bg-white" />
                </div>
                <span className="font-semibold text-sm tracking-wider uppercase font-mono text-[#18181b] dark:text-white">
                  SATQUERY AI
                </span>
              </Link>
              <p className="text-xs text-[#52525b] dark:text-[#737373] leading-relaxed max-w-xs font-mono">
                Agentic Earth observation assistant. Deterministic VQA, temporal change detection, and optical-SAR fusion.
              </p>
            </div>

            {/* Middle & Bottom Content */}
            <div className="relative z-10 space-y-4 pt-6">
              <h3 className="text-sm sm:text-base font-medium text-[#18181b] dark:text-white leading-snug">
                {FOOTER_TITLE}
              </h3>

              <SocialCloud className="text-[#18181b] dark:text-white/80 gap-2.5" />

              <div className="space-y-1 pt-3 border-t border-[#ded9ce] dark:border-[#1f1f1f] text-[11px] font-mono text-[#71717a] dark:text-[#737373]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  <span>Copernicus STAC Pipelines Operational</span>
                </div>
                <p className="text-[10px] text-[#71717a] dark:text-[#525252]">
                  &copy; {new Date().getFullYear()} SatQuery AI. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Navigation & Research Digest Card */}
          <motion.div
            className="w-full lg:w-2/3 rounded-2xl bg-[#ffffff] dark:bg-[#090909] border border-[#ded9ce] dark:border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-card"
            variants={itemVariants}
          >
            {/* Top Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {footerLinks.map((section, idx) => (
                <div key={idx} className="flex flex-col space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717a] dark:text-[#737373] font-semibold">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col space-y-2 text-xs text-[#52525b] dark:text-[#a3a3a3]">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        {link.href.startsWith("http") ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#52525b] dark:text-[#a3a3a3] hover:text-[#18181b] dark:hover:text-white transition-colors font-medium"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-[#52525b] dark:text-[#a3a3a3] hover:text-[#18181b] dark:hover:text-white transition-colors font-medium"
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
            <div className="space-y-2.5 pt-5 border-t border-[#ded9ce] dark:border-[#1a1a1a]">
              <div className="space-y-0.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#18181b] dark:text-white font-semibold">
                  Earth Observation Research Digest
                </h4>
                <p className="text-[11px] text-[#52525b] dark:text-[#737373]">
                  Receive updates on new remote-sensing model checkpoints, STAC catalog integrations, and release notes.
                </p>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#edeae3] dark:bg-[#141414] border border-[#ded9ce] dark:border-[#2a2a2a] text-xs text-[#18181b] dark:text-white">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-white" />
                  <span>Subscribed to SatQuery research updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-lg w-full">
                  <input
                    type="email"
                    required
                    suppressHydrationWarning
                    autoComplete="off"
                    data-lpignore="true"
                    data-form-type="other"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="analyst@geospatial-lab.org"
                    className="flex-1 rounded-xl px-3.5 py-2 text-xs bg-[#f7f6f2] dark:bg-[#121212] text-[#18181b] dark:text-white border border-[#ded9ce] dark:border-[#262626] focus:border-[#18181b] dark:focus:border-[#4d4d4d] focus:outline-none transition-colors placeholder-[#71717a] dark:placeholder-[#525252]"
                  />
                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="rounded-xl bg-[#18181b] dark:bg-white text-white dark:text-black hover:bg-[#27272a] dark:hover:bg-[#e5e5e5] px-4 py-2 text-xs font-semibold tracking-wide transition-all shadow-subtle flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span className="!text-white dark:!text-black">Subscribe</span>
                    <ArrowRight className="w-3 h-3 !text-white dark:!text-black" />
                  </button>
                </form>
              )}

              <div className="flex items-center justify-between text-[10px] text-[#71717a] dark:text-[#525252] font-mono pt-0.5">
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

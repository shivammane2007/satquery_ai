"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Check, Send, Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white selection:bg-[#333333] selection:text-white">
        <Navbar />

        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Header */}
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2e2e2e] text-xs font-mono text-[#a3a3a3] uppercase tracking-wider">
                <span>INQUIRIES & COLLABORATION</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
                Contact the SatQuery team.
              </h1>
              <p className="text-base sm:text-lg text-[#888888] leading-relaxed">
                Connect with our research team regarding Earth observation foundation model integration, SIH demonstrations, or institutional workspace deployments.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Contact Form */}
              <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0c0c0c] border border-[#212121] shadow-card">
                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white">
                      Message Dispatched
                    </h3>
                    <p className="text-xs sm:text-sm text-[#888888] max-w-sm mx-auto">
                      Thank you for contacting SatQuery AI. Our geospatial engineering team will review your inquiry shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", organization: "", message: "" });
                      }}
                      className="px-4 py-2 rounded-xl bg-[#171717] hover:bg-[#212121] border border-[#2e2e2e] text-xs font-medium text-white transition-colors mt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#a3a3a3]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Shivam..."
                        className="w-full bg-[#141414] border border-[#262626] focus:border-[#4d4d4d] rounded-xl px-4 py-3 text-xs text-white placeholder-[#525252] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#a3a3a3]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="shivam@earthobs.org"
                        className="w-full bg-[#141414] border border-[#262626] focus:border-[#4d4d4d] rounded-xl px-4 py-3 text-xs text-white placeholder-[#525252] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#a3a3a3]">
                        Organization / University / Affiliation
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="Geospatial Lab / SIH 2026 Team"
                        className="w-full bg-[#141414] border border-[#262626] focus:border-[#4d4d4d] rounded-xl px-4 py-3 text-xs text-white placeholder-[#525252] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#a3a3a3]">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Describe your research inquiry, STAC integration requirements, or demonstration request..."
                        className="w-full bg-[#141414] border border-[#262626] focus:border-[#4d4d4d] rounded-xl px-4 py-3 text-xs text-white placeholder-[#525252] focus:outline-none transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-white hover:bg-[#e5e5e5] text-black font-semibold text-xs rounded-xl transition-all shadow-card hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Details Panel */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 rounded-3xl bg-[#0c0c0c] border border-[#212121] space-y-6 text-xs">
                  <span className="text-[10px] font-mono uppercase text-[#737373] tracking-wider block">
                    PROJECT DISPATCH
                  </span>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">Direct Channel</p>
                        <p className="text-[#737373] font-mono">contact@satquery.ai</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">Research Focus</p>
                        <p className="text-[#737373]">Earth Observation Foundation Models & Agentic GIS</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">Reference AOI</p>
                        <p className="text-[#737373] font-mono">UTM Zone 43N / EPSG:32643</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1f1f1f] flex flex-col space-y-2">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-[#a3a3a3] hover:text-white transition-colors"
                    >
                      <span>GitHub Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href="/models"
                      className="flex items-center justify-between text-[#a3a3a3] hover:text-white transition-colors"
                    >
                      <span>Foundation Model Stack</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

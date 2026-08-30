import React from "react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import FAQLuxury from "@/components/ContentBlocks/FAQ/tsx/FAQLuxury";

export const metadata = {
  title: "Frequently Asked Questions | SatQuery AI",
  description: "Explore technical architecture, supported sensors, foundation models, and privacy protocols for SatQuery AI.",
};

export default function FAQPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white selection:bg-[#333333] selection:text-white">
        <Navbar />
        <main className="pt-24">
          <FAQLuxury
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about conversational remote sensing, model pipelines, and STAC ingestion."
          />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

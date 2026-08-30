import React from "react";
import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { ProductPreview } from "@/components/marketing/ProductPreview";
import { ProblemSolution } from "@/components/marketing/ProblemSolution";
import { FeaturesGrid } from "@/components/marketing/FeaturesGrid";
import { ChangeShowcase } from "@/components/marketing/ChangeShowcase";
import { MultimodalView } from "@/components/marketing/MultimodalView";
import { WorkflowTrace } from "@/components/marketing/WorkflowTrace";
import { ModelsOverview } from "@/components/marketing/ModelsOverview";
import { TrustSection } from "@/components/marketing/TrustSection";
import { CTASection } from "@/components/marketing/CTASection";
import FAQLuxury from "@/components/ContentBlocks/FAQ/tsx/FAQLuxury";
import { Footer } from "@/components/marketing/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export default function LandingPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white selection:bg-[#333333] selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <ProductPreview />
          <ProblemSolution />
          <FeaturesGrid />
          <ChangeShowcase />
          <MultimodalView />
          <WorkflowTrace />
          <ModelsOverview />
          <TrustSection />
          <CTASection />
          <FAQLuxury />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

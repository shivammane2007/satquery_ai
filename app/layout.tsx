import type { Metadata } from "next";
import "./globals.css";
import { ChatProvider } from "@/components/providers/ChatContext";

export const metadata: Metadata = {
  title: "SatQuery AI — Remote-Sensing Intelligence",
  description:
    "Agentic remote-sensing assistant. Talk to satellite imagery, compare bi-temporal changes, and fuse optical-SAR data with evidence-grounded reasoning.",
  keywords: [
    "SatQuery AI",
    "Satellite Imagery",
    "Remote Sensing",
    "Earth Observation",
    "Sentinel-2",
    "Sentinel-1 SAR",
    "Change Detection",
    "GeoChat",
    "Prithvi-EO",
    "TerraMind",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased selection:bg-[#333333] selection:text-white">
        <ChatProvider>{children}</ChatProvider>
      </body>
    </html>
  );
}

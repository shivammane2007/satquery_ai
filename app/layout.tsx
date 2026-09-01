import type { Metadata } from "next";
import "./globals.css";
import { Prata, Hanken_Grotesk } from "next/font/google";

const prata = Prata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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

import { ChatProvider } from "@/components/providers/ChatContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${prata.variable} ${hankenGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('satquery_theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'light' || (!stored && !prefersDark)) {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className="bg-black text-white antialiased selection:bg-[#333333] selection:text-white font-sans transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <ChatProvider>{children}</ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

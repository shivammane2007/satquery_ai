"use client";

import React, { useState, useEffect, useRef } from "react";

interface SensorModeData {
  id: string;
  label: string;
  name: string;
  video: string;
  still: string;
  cutout: string;
  badge: string;
  description: string;
  spinClass: string;
  glowClass: string;
}

const MODES: Record<string, SensorModeData> = {
  earth: {
    id: "earth",
    label: "SENTINEL-2",
    name: "EARTH OBSERVATION",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_3ffb4889-c520-432d-8458-038009eb40df.mp4",
    still:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_508c64b8-a31e-4290-bdfc-1187df70e0a6.png",
    cutout:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202005_3346cc4d-ec3b-44ab-825c-b18e49f5021a.png",
    badge: "MULTISPECTRAL • 10M GSD",
    description:
      "Ask questions about Earth observation data, compare imagery across time, inspect regions, and get evidence-grounded answers through an agentic remote-sensing workflow.",
    spinClass: "animate-planet-earth",
    glowClass: "drop-shadow-[0_0_24px_rgba(100,180,255,0.45)]",
  },
  venus: {
    id: "venus",
    label: "SENTINEL-1 SAR",
    name: "SYNTHETIC APERTURE RADAR",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_b211cd74-013b-4dd3-bfd0-64491d8696fa.mp4",
    still:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_cf55d1d8-7b59-4a64-80da-d72052ae974e.png",
    cutout:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202012_640b239a-d08a-4200-adb2-741bbe129ac8.png",
    badge: "RADAR BACKSCATTER • CLOUD PENETRATION",
    description:
      "Penetrate cloud cover and dense atmospheric smoke using C-band radar backscatter (VV/VH) fused with coregistered baseline optical rasters.",
    spinClass: "animate-planet-venus",
    glowClass: "drop-shadow-[0_0_24px_rgba(230,200,140,0.4)]",
  },
  mars: {
    id: "mars",
    label: "TERRAIN DEM",
    name: "TOPOGRAPHIC ELEVATION",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_51eae59a-2459-4c84-907c-cc5edfe5fea7.mp4",
    still:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_0ba6de7c-285d-43dc-b7ab-8c54c73707cb.png",
    cutout:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202018_3d559490-f613-4ed7-a3bb-3b7e9fc90fb8.png",
    badge: "COPERNICUS DEM • ELEVATION PROFILE",
    description:
      "Quantify geomorphology, volumetric soil displacement, slope gradient risks, and hyper-resolution terrain changes with specialized foundation models.",
    spinClass: "animate-planet-mars",
    glowClass: "drop-shadow-[0_0_24px_rgba(240,110,60,0.45)]",
  },
};

const ORDER = ["earth", "venus", "mars"];

export function Hero() {
  const [currentMode, setCurrentMode] = useState<string>("earth");
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const rest = ORDER.filter((id) => id !== currentMode);
  const leftId = rest[0];
  const rightId = rest[1];

  const handleWarm = (key: string) => {
    const video = videoRefs.current[key];
    if (video && !video.src && video.dataset.src) {
      video.preload = "auto";
      video.src = video.dataset.src;
      video.load();
    }
  };

  const switchMode = (next: string) => {
    if (!MODES[next] || next === currentMode) return;
    setCurrentMode(next);

    ORDER.forEach((key) => {
      const v = videoRefs.current[key];
      if (!v) return;
      if (key === next) {
        if (!v.src && v.dataset.src) {
          v.src = v.dataset.src;
        }
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  };

  useEffect(() => {
    const activeVideo = videoRefs.current["earth"];
    if (activeVideo) {
      activeVideo.play().catch(() => {});
    }

    const timer = setTimeout(() => {
      ORDER.forEach((key) => handleWarm(key));
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const activeData = MODES[currentMode];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#04101f] text-white select-none">
      {/* Dynamic Physics Style Block for Celestial Rotation */}
      <style jsx global>{`
        @keyframes planet-axial-prograde {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes planet-axial-retrograde {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes celestial-orbit-l {
          0%, 100% {
            transform: translate3d(0, 0px, 0);
          }
          50% {
            transform: translate3d(-3px, -10px, 0);
          }
        }
        @keyframes celestial-orbit-r {
          0%, 100% {
            transform: translate3d(0, 0px, 0);
          }
          50% {
            transform: translate3d(3px, 10px, 0);
          }
        }
        .animate-planet-earth {
          animation: planet-axial-prograde 36s linear infinite;
        }
        .animate-planet-venus {
          animation: planet-axial-retrograde 75s linear infinite;
        }
        .animate-planet-mars {
          animation: planet-axial-prograde 48s linear infinite;
        }
        .orbit-float-left {
          animation: celestial-orbit-l 8s ease-in-out infinite;
        }
        .orbit-float-right {
          animation: celestial-orbit-r 9.5s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Cinematic Planet Video Sky Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 pointer-events-none"
        style={{ backgroundImage: `url('${activeData.still}')` }}
      >
        {ORDER.map((key) => (
          <video
            key={key}
            ref={(el) => {
              videoRefs.current[key] = el;
            }}
            data-planet={key}
            data-src={MODES[key].video}
            src={key === "earth" ? MODES[key].video : undefined}
            poster={MODES[key].still}
            autoPlay={key === "earth"}
            muted
            loop
            playsInline
            preload={key === "earth" ? "auto" : "none"}
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              currentMode === key ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
        {/* Topographic and Vignette Ambient Overlay */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_25%,rgba(4,16,31,0.75)_100%] pointer-events-none" />
      </div>

      {/* 2. Hero Content Container (Shifted Higher Up) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-4 -mt-24 sm:-mt-36 md:-mt-44 flex flex-col items-center text-center space-y-4 sm:space-y-5">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-mono tracking-widest text-[#79dce8] uppercase animate-in fade-in duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#79dce8] animate-pulse" />
          <span>REMOTE-SENSING INTELLIGENCE</span>
        </div>

        {/* Serif Main Brand Headline: SATQUERY AI */}
        <div className="space-y-2">
          <h1
            className="text-6xl sm:text-8xl md:text-9xl font-normal tracking-wide text-white leading-none drop-shadow-2xl font-serif"
            style={{ fontFamily: "var(--font-serif, 'Prata', serif)" }}
          >
            SATQUERY AI
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 tracking-tight">
            Talk to satellite imagery.
          </p>
        </div>

        {/* Cyan Accent Bar */}
        <div className="w-24 sm:w-28 h-1 sm:h-1.5 rounded-full bg-[#79dce8] shadow-[0_0_16px_rgba(121,220,232,0.6)]" />




      </div>

      {/* 4. Left Bottom Corner Planet Button */}
      <button
        type="button"
        onClick={() => switchMode(leftId)}
        onPointerEnter={() => handleWarm(leftId)}
        onFocus={() => handleWarm(leftId)}
        aria-label={`Switch to ${MODES[leftId].name}`}
        className="orbit-float-left group absolute bottom-6 left-6 sm:bottom-10 sm:left-10 md:bottom-12 md:left-12 flex items-center cursor-pointer transition-transform duration-300 hover:scale-115 active:scale-95 z-30"
      >
        <div
          className={`relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 shrink-0 rounded-full transition-all duration-500 ${MODES[leftId].glowClass}`}
        >
          {ORDER.map((p) => (
            <img
              key={p}
              src={MODES[p].cutout}
              alt=""
              className={`absolute inset-0 w-full h-full object-contain rounded-full transition-opacity duration-300 will-change-transform ${
                MODES[p].spinClass
              } ${leftId === p ? "opacity-100 block" : "opacity-0 hidden"}`}
            />
          ))}
        </div>
      </button>

      {/* 5. Right Bottom Corner Planet Button */}
      <button
        type="button"
        onClick={() => switchMode(rightId)}
        onPointerEnter={() => handleWarm(rightId)}
        onFocus={() => handleWarm(rightId)}
        aria-label={`Switch to ${MODES[rightId].name}`}
        className="orbit-float-right group absolute bottom-6 right-6 sm:bottom-10 sm:right-10 md:bottom-12 md:right-12 flex items-center cursor-pointer transition-transform duration-300 hover:scale-115 active:scale-95 z-30"
      >
        <div
          className={`relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 shrink-0 rounded-full transition-all duration-500 ${MODES[rightId].glowClass}`}
        >
          {ORDER.map((p) => (
            <img
              key={p}
              src={MODES[p].cutout}
              alt=""
              className={`absolute inset-0 w-full h-full object-contain rounded-full transition-opacity duration-300 will-change-transform ${
                MODES[p].spinClass
              } ${rightId === p ? "opacity-100 block" : "opacity-0 hidden"}`}
            />
          ))}
        </div>
      </button>

      {/* 6. Center Bottom Scroll Indicator */}
      <a
        href="#preview"
        aria-label="Scroll to product experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-[#181e2a]/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#79dce8] transition-all hover:scale-110"
      >
        <svg viewBox="0 0 26 33" fill="none" className="w-4 h-5" aria-hidden="true">
          <path
            d="M13 1.5 V31.5 M1.9 20.4 L13 31.5 L24.1 20.4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </a>
    </section>
  );
}

export default Hero;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "/#preview" },
    { name: "Features", href: "/features" },
    { name: "Models", href: "/models" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-200 select-none",
        scrolled
          ? "bg-[#000000]/80 backdrop-blur-md border-b border-[#212121] py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-6 h-6 rounded-lg border border-[#444444] bg-[#121212] flex items-center justify-center group-hover:border-white transition-colors">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <span className="font-semibold text-sm tracking-wider uppercase text-white font-mono">
            SATQUERY AI
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs tracking-wide transition-colors font-medium",
                  isActive
                    ? "text-white"
                    : "text-[#888888] hover:text-white"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-xs text-[#888888] hover:text-white transition-colors font-medium"
          >
            Contact
          </Link>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#e5e5e5] text-black rounded-xl text-xs font-semibold tracking-wide transition-all shadow-subtle hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Try SatQuery AI</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="p-2 rounded-lg text-[#888888] hover:text-white md:hidden"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#212121] px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#d4d4d4] hover:text-white py-1"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#d4d4d4] hover:text-white py-1"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2 border-t border-[#212121]">
            <Link
              href="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black rounded-xl text-xs font-semibold tracking-wide"
            >
              <span>Try SatQuery AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

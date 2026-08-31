"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { SwipeMaskNav } from "@/components/Navigation&Structures/Navbar/tsx/SwipeMaskNav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // Always show at top
      if (currentScrollY <= 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
        // Scrolling down -> hide navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
        // Scrolling up -> show navbar
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "/#preview" },
    { name: "Features", href: "/features" },
    { name: "Models", href: "/models" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 select-none",
        visible || mobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-[#212121] py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-6 h-6 rounded-lg border border-[#444444] bg-[#121212] flex items-center justify-center group-hover:border-white transition-colors shadow-subtle">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm tracking-wider uppercase text-white font-mono">
              SATQUERY AI
            </span>
            <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#141414] border border-[#262626] text-[#737373]">
              v1.0
            </span>
          </div>
        </Link>

        {/* Center SwipeMaskNav */}
        <div className="hidden md:flex items-center">
          <SwipeMaskNav items={navLinks} pathname={pathname} />
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className={cn(
              "text-xs tracking-wide font-medium transition-colors",
              pathname === "/contact"
                ? "text-white"
                : "text-[#888888] hover:text-white"
            )}
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
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="p-2 rounded-xl bg-[#141414] border border-[#262626] text-[#888888] hover:text-white md:hidden transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-[#212121] px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#d4d4d4] hover:text-white py-2 px-3 rounded-lg hover:bg-[#171717] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#d4d4d4] hover:text-white py-2 px-3 rounded-lg hover:bg-[#171717] transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="pt-3 border-t border-[#212121] space-y-2">
            <Link
              href="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-[#e5e5e5] text-black rounded-xl text-xs font-semibold tracking-wide transition-all shadow-subtle"
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

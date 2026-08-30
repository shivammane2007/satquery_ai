"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type NavItem = { name: string; href: string };
export interface NavProps {
  items: NavItem[];
  className?: string;
  pathname?: string;
}

// ============================================================================
// 4. THE "SWIPE MASK" NAV
// Physics: Diagonal/vertical color fill mask.
// ============================================================================
export const SwipeMaskNav = ({ items, className, pathname }: NavProps) => {
  return (
    <nav
      className={cn(
        "flex gap-0 border border-[#262626] rounded-full overflow-hidden p-1 bg-[#0c0c0c]/90 backdrop-blur-md",
        className
      )}
    >
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className="relative px-5 py-1.5 group overflow-hidden rounded-full transition-colors"
          >
            <span
              className={cn(
                "relative z-10 transition-colors duration-300 text-xs font-medium tracking-wide",
                isActive ? "text-black font-semibold" : "text-[#888888] group-hover:text-black"
              )}
            >
              {item.name}
            </span>
            <span
              className={cn(
                "absolute inset-0 bg-white transition-transform duration-300 ease-out rounded-full",
                isActive ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
};

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon, Laptop, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options: { id: "system" | "dark" | "light"; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "system", label: "System", icon: Laptop },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "light", label: "Light", icon: Sun },
  ];

  const CurrentIcon =
    theme === "system" ? Laptop : theme === "dark" ? Moon : Sun;

  return (
    <div className={cn("relative inline-block text-left select-none", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Select theme"
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-[#141414] hover:bg-[#edeae3] dark:hover:bg-[#1f1f1f] text-[#18181b] dark:text-[#d4d4d4] hover:text-[#18181b] dark:hover:text-white border border-[#ded9ce] dark:border-[#2e2e2e] transition-all shadow-subtle focus:outline-none"
      >
        <CurrentIcon className="w-3.5 h-3.5" />
        <span className="capitalize hidden sm:inline">{theme}</span>
        <ChevronDown className={cn("w-3 h-3 transition-transform text-[#71717a] dark:text-[#888888]", open && "rotate-180")} />
      </button>

      {open && (
        <div className="theme-dropdown-menu absolute right-0 mt-1.5 w-36 rounded-xl bg-white dark:bg-[#0f0f0f] border border-[#ded9ce] dark:border-[#2e2e2e] shadow-2xl p-1.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="space-y-0.5">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setTheme(opt.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors",
                    isSelected
                      ? "bg-[#edeae3] dark:bg-[#242424] text-[#18181b] dark:text-white font-semibold"
                      : "text-[#52525b] dark:text-[#a3a3a3] hover:text-[#18181b] dark:hover:text-white hover:bg-[#f7f6f2] dark:hover:bg-[#1a1a1a]"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{opt.label}</span>
                  </div>
                  {isSelected && <Check className="w-3 h-3 text-[#18181b] dark:text-white" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

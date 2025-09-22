"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";

export type Theme = "gradient" | "dark" | "light" | "light-minimal";

interface ThemeConfig {
  name: string;
  description: string;
}

const themes: Record<Theme, ThemeConfig> = {
  gradient: {
    name: "Modern Gradient",
    description: "AI/Tech vibe with gradients",
  },
  dark: {
    name: "Flat Dark Mode",
    description: "Clean dark interface",
  },
  light: {
    name: "Light Minimalist",
    description: "Clean light interface",
  },
  "light-minimal": {
    name: "Light Minimal",
    description: "Black text, no gradients",
  },
};

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light-minimal");

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    console.log("Theme applied:", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    console.log("Changing theme from", theme, "to", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="flex">
      <button
        onClick={() => handleThemeChange("gradient")}
        className={`p-2 rounded-md transition-all duration-200 relative group ${
          theme === "gradient"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Modern Gradient"
      >
        {/* Tooltip */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
          Modern Gradient
        </div>
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="url(#gradient)"
          />
        </svg>
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`p-2 rounded-md transition-all duration-200 relative group ${
          theme === "dark"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Flat Dark Mode"
      >
        {/* Tooltip */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
          Flat Dark Mode
        </div>
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#1a1a1a" />
        </svg>
      </button>
      <button
        onClick={() => handleThemeChange("light")}
        className={`p-2 rounded-md transition-all duration-200 relative group ${
          theme === "light"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Light Color"
      >
        {/* Tooltip */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
          Light Color
        </div>
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="#ffffff"
            stroke="#e5e7eb"
          />
        </svg>
      </button>
      <button
        onClick={() => handleThemeChange("light-minimal")}
        className={`p-2 rounded-md transition-all duration-200 relative group ${
          theme === "light-minimal"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Light Flat"
      >
        {/* Tooltip */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
          Light Flat
        </div>
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="#000000"
            stroke="#000000"
          />
        </svg>
      </button>
    </div>
  );
}

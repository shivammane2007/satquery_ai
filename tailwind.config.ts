import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: {
          DEFAULT: "#0d0d0d",
          50: "#262626",
          100: "#212121",
          200: "#1a1a1a",
          300: "#171717",
          400: "#121212",
          500: "#0d0d0d",
          600: "#080808",
        },
        border: {
          DEFAULT: "#262626",
          subtle: "#1c1c1c",
          strong: "#333333",
          hover: "#404040",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a3a3a3",
          muted: "#737373",
          faint: "#525252",
        },
        accent: {
          DEFAULT: "#888888",
          light: "#aaaaaa",
          subtle: "#333333",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      borderRadius: {
        DEFAULT: "8px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.5)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.7)",
        modal: "0 20px 40px -10px rgba(0, 0, 0, 0.9)",
        glow: "0 0 20px -5px rgba(255, 255, 255, 0.05)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
        "spring-bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

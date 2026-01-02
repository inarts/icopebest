import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        background: "var(--bg)",
        "background-muted": "var(--bg-muted)",
        foreground: "var(--text)",
        "foreground-muted": "var(--text-muted)",
        border: "var(--border)",
        navy: {
          900: "var(--navy-900)",
          800: "var(--navy-800)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
      letterSpacing: {
        tightest: "-0.02em",
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        googleblue: "#0b57d0",
        googlehover: "#e7eefa",
        googlebg: "#f0f4f9",
        googlebluedark: "#a8c7fa",
        googlehoverdark: "#1d2026",
        googlebgdark: "#1e1f20",
        googlebgdarkpanel: "#0e0e0e"

      },
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"], // Tambahkan font di sini
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text:"#93C5FD",
        scandry:"#3B82F6",
        distinct:"#2563EB",
      },
    },
  },
  plugins: [],
} satisfies Config;

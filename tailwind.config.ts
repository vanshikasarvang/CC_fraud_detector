// fileName: tailwind.config.ts

import type { Config } from "tailwindcss"

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  darkMode: "class",
  
  theme: {
    extend: {},
  },
  
  plugins: [
    require('tailwindcss-animate'),
  ],
} satisfies Config

export default config
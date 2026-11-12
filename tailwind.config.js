/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F7F2E9",
          50: "#FCFAF6",
          100: "#F7F2E9",
          200: "#EFE6D6",
          300: "#E5D8BF",
        },
        earth: {
          DEFAULT: "#493126",
          light: "#5E4032",
          dark: "#352219",
          deep: "#2B1A12",
        },
        terracotta: {
          DEFAULT: "#A75D3B",
          light: "#BD7351",
          dark: "#8D4A2B",
          50: "#FAF2EE",
          100: "#F3E2DA",
        },
        gold: {
          DEFAULT: "#B69760",
          light: "#C9AD78",
          dark: "#9E8049",
          50: "#F8F5EE",
          100: "#EFE8D6",
        },
        beige: {
          DEFAULT: "#E9DDCC",
          light: "#F3ECE1",
          dark: "#D8C7AF",
        },
        charcoal: {
          DEFAULT: "#24211F",
          light: "#3A3633",
          dark: "#171514",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cinzel", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      backgroundImage: {
        'traditional-pattern': "radial-gradient(#B69760 0.75px, transparent 0.75px), radial-gradient(#B69760 0.75px, #F7F2E9 0.75px)",
      },
      boxShadow: {
        'artisan': '0 4px 20px -2px rgba(73, 49, 38, 0.08), 0 2px 6px -1px rgba(73, 49, 38, 0.04)',
        'artisan-hover': '0 12px 30px -4px rgba(73, 49, 38, 0.16), 0 4px 10px -2px rgba(73, 49, 38, 0.08)',
        'gold-glow': '0 0 25px -5px rgba(182, 151, 96, 0.35)',
      },
    },
  },
  plugins: [],
};


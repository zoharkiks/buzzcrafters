/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans"],
      },
      colors: {
        "surface-primary": "#2F2F2F",
        "surface-secondary": "#FEFEFC",
        "surface-tertiary": "#F7F7F7",
        "accent-primary": "#FD6A13",
        "accent-secondary": "#51514C",
        "text-primary": "#F5F0EA",
        "text-secondary": "#000000",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        tab: { min: "768px", max: "1024px" },
        tabmd: { min: "820px", max: "1180px" },
        tabxl: { min: "1024px" },
        xs: { min: "350px", max: "767px" },
        xss: { min: "250px", max: "767px" },
        xxl: { min: "1441px" },
        xm: { min: "360px", max: "500px" },
        mm: { min: "500px", max: "767px" },
        xxs: { min: "250px", max: "500px" },
      },
    },
  },
  plugins: [],
};

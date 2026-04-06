/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "primary-hover": "#1d4ed8",
        "primary-light": "#eff6ff",
        "primary-border": "#bfdbfe",
        heading: "#0f172a",
        body: "#334155",
        muted: "#64748b",
        placeholder: "#94a3b8",
        border: "#e2e8f0",
        surface: "#fafaf9",
        "surface-alt": "#f8fafc",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Indigo
        secondary: "#D1D5DB", // Gray
        accent: "#2563EB", // Blue
        light: "#F9FAFB", // Light background
        dark: "#111827", // Dark text
        red: "#DC2626", // Red for danger
        green: "#16A34A", // Green for success
      },
    },
  },
  plugins: [],
};

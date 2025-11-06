const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EBF5FF",
          100: "#DCEEFF",
          500: "#2563FF", // primary CTA
          600: "#1E4FE6",
        },
        accent: {
          500: "#F7B500", // slightly deeper yellow accent
        },
        bg: {
          900: "#050712", // page background
          800: "#0A1022", // gradient end
          card: "#0B0E1C",
        },
        text: {
          muted: "#B5B5C3",
        },
        neutral: {
          100: "#F8F9FA", // off-white for text
          200: "#E9ECEF", // light gray for text
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#6C757D",
          700: "#495057",
          800: "#343A40",
          900: "#212529", // darker gray
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
      },
      inset: {
        "2/5": "40%",
        "3/5": "60%",
      },
      width: {
        "3/5": "60%",
        "7/20": "35%", // Added for .glow-after
        "13/20": "65%", // Added for .pricing-head_before
      },
      boxShadow: {
        "glow-blue":
          "0 6px 30px rgba(37,99,255,0.14), inset 0 0 20px rgba(37,99,255,0.04)",
      },
      keyframes: {
        pulseGlow: {
          "0%": { boxShadow: "0 0 0 rgba(37,99,255,0.18)" },
          "50%": { boxShadow: "0 0 30px rgba(37,99,255,0.22)" },
          "100%": { boxShadow: "0 0 0 rgba(37,99,255,0.18)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

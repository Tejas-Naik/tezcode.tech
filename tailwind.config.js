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
          900: "#050712", // page background (Deepest Black)
          800: "#0A1022", // gradient end
          card: "#0B0E1C",
          glass: "rgba(11, 14, 28, 0.7)", // Glass effect base
        },
        neon: {
          blue: "#2ef2ff",
          purple: "#9d4edd",
          pink: "#ff007f",
        },
        text: {
          muted: "#B5B5C3",
          light: "#F8F9FA",
        },
        neutral: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#6C757D",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(46, 242, 255, 0.5), 0 0 20px rgba(46, 242, 255, 0.3)',
        'neon-purple': '0 0 10px rgba(157, 78, 221, 0.5), 0 0 20px rgba(157, 78, 221, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'neon-gradient': 'linear-gradient(to right, #2ef2ff, #9d4edd)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 5px #2ef2ff, 0 0 10px #2ef2ff' },
          'to': { boxShadow: '0 0 10px #2ef2ff, 0 0 20px #2ef2ff' },
        },
      },
      inset: {
        "2/5": "40%",
        "3/5": "60%",
      },
      width: {
        "3/5": "60%",
        "7/20": "35%",
        "13/20": "65%",
      },
    },
  },
  plugins: [],
};

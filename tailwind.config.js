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
          500: "#2563FF",
          600: "#1E4FE6",
        },
        accent: {
          500: "#F7B500",
        },
        bg: {
          900: "#050816", // spec: deep dark blue/black
          800: "#0A1022",
          card: "#080c1a",
          glass: "rgba(8, 12, 26, 0.7)",
        },
        neon: {
          blue: "#00f5ff",   // spec: cyan #00F5FF
          purple: "#8c00ff", // spec: purple gradient
          pink: "#ff007f",
        },
        text: {
          muted: "#A0A0A0", // spec: subtext #A0A0A0
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
        // Upgraded to spec: strong glow 0 0 20px rgba(0,255,255,0.5)
        'neon-blue':   '0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.25), 0 0 80px rgba(0, 245, 255, 0.1)',
        'neon-purple': '0 0 20px rgba(140, 0, 255, 0.5), 0 0 40px rgba(140, 0, 255, 0.25)',
        'neon-blue-sm': '0 0 10px rgba(0, 245, 255, 0.4), 0 0 20px rgba(0, 245, 255, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 0 30px rgba(0, 245, 255, 0.08), 0 20px 40px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        // Page-level radial gradient per spec
        'page': `
          radial-gradient(circle at 20% 20%, rgba(0, 245, 255, 0.08), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(140, 0, 255, 0.08), transparent 40%)
        `,
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
        // Cyan → blue CTA gradient per spec
        'neon-gradient': 'linear-gradient(135deg, #00f5ff, #0066ff, #8c00ff)',
        'neon-gradient-h': 'linear-gradient(to right, #00f5ff, #8c00ff)',
        // Section separator line
        'section-sep': 'linear-gradient(to right, transparent, rgba(0,245,255,0.3), rgba(140,0,255,0.3), transparent)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'particle-drift': 'particleDrift 12s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px rgba(0,245,255,0.4), 0 0 20px rgba(0,245,255,0.2)' },
          'to':   { boxShadow: '0 0 25px rgba(0,245,255,0.7), 0 0 50px rgba(0,245,255,0.35)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        borderSpin: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        particleDrift: {
          '0%':   { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '0.5' },
          '100%': { transform: 'translateY(-120px) translateX(30px) scale(0)', opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
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

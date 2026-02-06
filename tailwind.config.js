/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D32F2F", // Deep Red
          hover: "#B71C1C",
          light: "#EF5350",
        },
        secondary: {
          DEFAULT: "#FF6F00", // Warm Orange
          hover: "#E65100",
          light: "#FFA000",
        },
        background: {
          DEFAULT: "#FFF8E1", // Cream
          paper: "#FFFFFF",
          dark: "#1A1A1A",
        },
        text: {
          primary: "#212121", // Dark Charcoal
          secondary: "#757575",
          light: "#E0E0E0",
        },
        success: {
          DEFAULT: "#4CAF50", // Fresh Green
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};

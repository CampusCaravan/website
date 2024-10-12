import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brown: {
          100: '#D6C6B8',
          200: '#C6B1A6',
          300: '#B29A8E',
          400: '#A08473',
          500: '#917054',
          600: '#7B593B',
          700: '#5B3E29',
          800: '#3B2417',
          900: '#1D110B',
        },
      },
    },
  },
  
};

export default config;

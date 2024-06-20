import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E13122",
        'custom-purple':"#6b58cd",
        'custom-green':"#6fefa2",
        'light-white': 'rgba(255, 255, 255, 0.5)',


      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-t": "linear-gradient(to top, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 0%)"
      },
      screens: {
        '3xl': '2560px'
      },
      fontFamily: {
        'luckiest': ['Asap', 'sans-serif'],
      },
      boxShadow: {
        strong: '4px 4px 6px rgba(0, 0, 0, 5.5)',
      },
      zIndex: {
        '10': '10',
      },
      fontSize: {
        '12px': '12px',
      },
      spacing: {
        '70p': '70%',
        '62p': '62%',
      }
      
    },
  },
  plugins: [],
};
export default config;

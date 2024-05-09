import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'adm': "url(/asset 8.jpeg)",
        'trib': "url(/asset 8.jpeg)",
        'civil': "url(/asset 8.jpeg)",
      },
     colors: {
      blue: {
        800: '#013148',
        950: '#00222F',
        900: '#013148cc'
      },
      gray: {
        900: '#666666',
        800: '#777777',
        700: '#999999',
        600: '#AAAAAA',
        500: '#C5C5C5',
        400: '#CBCBCB',
        300: '#EDEDED',
        200: '#EEEEEE',
        100: '#F0F0F0',
      },
     }
    },
  },
  plugins: [],
};
export default config;

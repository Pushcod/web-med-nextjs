import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily:{
      oswald: 'var(--font-oswald)',
      roboto: 'var(--font-roboto)',
    },
    backgroundImage:{
    },
    extend: {
      backgroundImage: {
       hero: 'url(/assets/img/hero/abstract.jpg)',
       medic: 'url(/assets/img/spec/medic.jpg)'
       
      },
      
      colors: {
        
      },
    },
  },
  plugins: [],
};
export default config;

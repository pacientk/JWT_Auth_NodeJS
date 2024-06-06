import type { Config } from 'tailwindcss';

const config: Config = {
   content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         colors: {
            transparent: 'transparent',
            current: 'currentColor',
            brand: '#FFD500',
            backgr: '#253746',
            backgr_dark: '#1C2D3AFF',
         },
         backgroundImage: {
            bgColored: 'url(/assets/images/bg-colored_01.jpg)',
         },

         // backgroundImage: {
         //    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
         //    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         // },

         fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            // openSans: ['Open Sans', 'sans-serif'],
            // noto: ['Poppins', 'sans-serif'],
            // notoHebrew: ['Noto Sans Hebrew', 'sans-serif'],
            // notoArabic: ['Noto Sans Arabic', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
export default config;

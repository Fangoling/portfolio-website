import {nextui} from '@nextui-org/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx},\r\n    ./components/**/*.{js,ts,jsx,tsx,mdx},\r\n    ./app/**/*.{js,ts,jsx,tsx,mdx},",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-montserrat)'],
        mono: ['var(--font-montserrat)']
      },
      colors: {
        primary: '#1F2833',
        secondary: '#0FA4AF',
        font: '#ededed',
        card: '#0B0C10',
      },
      backgroundImage: {
        
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config

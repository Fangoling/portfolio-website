import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-poppins)']
      },
      colors: {
        primary: '#1d1b26',
        secondary: '#e34234',
        font: '#ededed',
        customred: '#e34234'
      },
      backgroundImage: {
        
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
      },
    },
  },
  plugins: [],
}
export default config

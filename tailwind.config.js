/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主色系
        primary: {
          DEFAULT: '#240046', // 深紫罗兰
          light: '#3A0070',  
          dark: '#1A0033',   
        },
        // 强调色系
        accent: {
          DEFAULT: '#00FFD1', // 赛博青
          light: '#33FFD9',  
          dark: '#00E6BC',   
        },
        // 辅助色系
        secondary: {
          magenta: {
            DEFAULT: '#FF2E63', // 霓虹玫红
            light: '#FF5C85',
            dark: '#FF0044',
          },
          yellow: {
            DEFAULT: '#FFB800', // 金黄
            light: '#FFC633',
            dark: '#E6A600',
          },
        },
        // 中性色系
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
    },
  },
  plugins: [],
};
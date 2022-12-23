/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '376px',
      sm: '640px',
      md: '768px',
      'md-max': { max: '767px' },
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      base: ['14px', { lineHeight: '22px' }],
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      lg: ['16px', { lineHeight: '24px' }],
      '2lg': ['16px', { lineHeight: '28px' }],
      xl: ['18px', { lineHeight: '24px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '5xl': ['48px', { lineHeight: '54px' }],
      label: ['14px', { lineHeight: '22px', letterSpacing: '1px' }],
    },
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        xl: '24px'
      },
      screens: {
        xl: '1248px'
      }
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        blue: '#326EC7',
        red: '#d6293e',
        dark: '#181d38',
        'light-blue': '#5B93E8',
        navi: '#00327C',
        'light-navi': '#2456A0',
        orange: '#F87F11',
        'light-orange': '#FF9431',
        'grey-1': '#F1F4F9',
        'grey-2': '#EAEAE9',
        'grey-4': '#B6B6B6',
        'grey-5': '#737373',
        'grey-7': '#2C2C2C',
        'grey-9': '#050320',
        green: '#50B240',
        'custom-1': '#F7CD52',
        'custom-2': '#FEF6E0',
        'custom-3': '#486174',
        'custom-4': '#754AC4',
        'custom-5': '#E7F6F8',
        'custom-6': '#1EA4B9',
        'custom-7': '#989898',
        'custom-8': '#d6d6d6',
      },
      boxShadow: {
        0: '0'
      },
      maxWidth: {
        md: '704px',
        lg: '925px',
        xl: '1290px'
      }
    },
  },
  variants: {},
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}

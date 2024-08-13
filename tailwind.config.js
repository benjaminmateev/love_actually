/* eslint-disable quote-props */
/* eslint-disable indent */
/* eslint-disable key-spacing */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: ['acid', 'dark', {
        'love-actually': {
          'primary' : '#65c3c8',
          'primary-focus' : '#42b2b8',
          'primary-content' : '#efeae6',

          'secondary' : '#ef9fbc',
          'secondary-focus' : '#e7739e',
          'secondary-content' : '#efeae6',

          'accent' : '#eeaf3a',
          'accent-focus' : '#e09915',
          'accent-content' : '#efeae6',

          'neutral' : '#261230',
          'neutral-focus' : '#200f29',
          'neutral-content' : '#efeae6',

          'base-100' : '#faf7f5',
          'base-200' : '#efeae6',
          'base-300' : '#e7e2df',
          'base-content' : '#261230',

          'info' : '#1c92f2',
          'success' : '#009485',
          'warning' : '#ff9900',
          'error' : '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '1.9rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px'
        }
      }
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true // Shows info about daisyUI version and used config in the console when building your CSS
  }
}

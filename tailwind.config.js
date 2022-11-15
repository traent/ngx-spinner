/** @type {import('tailwindcss').Config} */

const traent_tw = require('../traent-design-system/tailwind/tw-base-theme');
const tw_plugins = require('../traent-design-system/tailwind/tw-plugins');

module.exports = {
  prefix: 'tw-',
  content: [
    "./projects/ngx-t3-spinner/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: { ...traent_tw.theme },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({ ':root': { ...tw_plugins.extractPalette(theme('colors')) } });
    },
  ],
}

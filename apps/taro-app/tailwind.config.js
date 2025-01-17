const path = require('node:path')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')
const { icestackPlugin } = require('@icestack/tailwindcss')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {},
    // colors: {}
  },
  // plugins: [require('@icestack/ui')({})],
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['mdi', 'grommet-icons']),
    }),
    icestackPlugin({
      loadDirectory: path.resolve(__dirname, './my-ui'),
      loadConfig: true,
    }),

  ],
  corePlugins: {
    preflight: false,
  },
}

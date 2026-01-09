/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto'],
      },
    },
  },
  plugins: [
    require("flyonui"),
    require("@iconify/tailwind").addDynamicIconSelectors(),
  ],
  flyonui: {
    themes: true,
  },
}

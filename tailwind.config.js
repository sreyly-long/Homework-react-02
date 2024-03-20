/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  //...
  plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
};


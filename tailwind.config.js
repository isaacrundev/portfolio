/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: ["Noto Sans", ...defaultTheme.fontFamily.sans] },
    extends: {
      fontFamily: {
        // sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        pressStart2p: ["Press Start 2P", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#1a1313",
        white: "#f0ebeb",
      },
      plugins: [],
    },
  },
};

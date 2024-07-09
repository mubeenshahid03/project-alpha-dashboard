/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        h1_lh: "74.4px",
        h2_lh: "62.5px",
        h3_lh: "32px",
      },
      colors: {
        green_600: "#4CAF50",
        green_900: "#0E2510",
        green_100: "#F3FAF3",
        light_gray: "#F5F5F5",
        dark_gray: "#3C4959",
        medium_gray: "#333333",
        bluish: "#011632",
        p_color: "#52525B",
      },
      fontSize: {
        h1_size: "62px",
        h2_size: "42px",
        h3_size: "24px",
        p_size: "18px",
        mb_logo_size: "32px",
      },
      keyframes: {
        "bubble-pulse": {
          "0%": { transform: "scale(1)", opacity: ".75" },
          "25%": { transform: "scale(1)", opacity: ".75" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      animation: {
        "bubble-pulse": "bubble-pulse 1.5s linear infinite",
      },
      boxShadow: {
        custom: "0px 8.33px 40px 0px #00000014",
        reviewcardShadow: "0px 10px 40px 0px #00000014",
        tagShadow: "0px 2px 10px 0px #00000014",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      FormPhoto: "url(./conponents/pages/bgimg/FormPhoto.png)",
      FormPhoto_2: "url(./conponents/pages/bgimg/FormPhoto_2.png)",
      Checkingbox: "url(./conponents/pages/bgimg/UploadedImage.png)",
      ReportCompleted: "url(./conponents/pages/bgimg/ReportCompleted.png)",
      FormPhoto_3:
        "url(./conponents/pages/bgimg/PersolnalData1280formphoto.png)",
      FormPhoto_4: "url(./conponents/pages/bgimg/FormPhoto768.png)",
    },
    screens: {
      xsm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "103%": "103%",
      "100%": "100%",
      "120%": "120%",
      "110%": "110%",
    },
    extend: {},
  },
  plugins: [],
};

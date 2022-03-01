module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://news.files.bbci.co.uk/vj/live/idt-images/image-slider-hello/SMOG_vdyw4.jpg')",
      },
    },
  },
  plugins: [],
};

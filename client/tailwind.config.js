
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iceberg: ["Iceberg"],

      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

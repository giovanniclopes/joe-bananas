/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        mbl: { max: "630px" }, // mbl == mobile
        // => @media (max-width: 630px) { ... }
        
      },
      fontFamily: {
        openSans: "Open Sans, sans-serif",
        climateCrisis: "Climate Crisis, cursive",
      },
      backgroundImage: {
        headerBg: "url(../src/assets/bg-header.webp)",
      },
      colors: {
        black: {
          100: "#cecece",
          200: "#9e9e9e",
          300: "#6d6d6d",
          400: "#3d3d3d",
          500: "#0c0c0c",
          600: "#0a0a0a",
          700: "#070707",
          800: "#050505",
          900: "#020202",
        },
        indigo: {
          100: "#e1e3e6",
          200: "#c4c7cc",
          300: "#a6aab3",
          400: "#898e99",
          500: "#6b7280",
          600: "#565b66",
          700: "#40444d",
          800: "#2b2e33",
          900: "#15171a"
},
        yellow: {
          100: "#fff5cc",
          200: "#ffeb99",
          250: "#FFEA80",
          300: "#ffe266",
          400: "#ffd833",
          500: "#ffce00",
          550: "#E4BE1A",
          600: "#cca500",
          700: "#997c00",
          800: "#665200",
          900: "#332900",
        },
        green: {
          100: "#cce6cc",
          200: "#99cc99",
          300: "#66b366",
          400: "#339933",
          500: "#008000",
          600: "#006600",
          700: "#004d00",
          800: "#003300",
          900: "#001a00",
        },
        blue: {
          100: "#ccccff",
          200: "#9999ff",
          300: "#6666ff",
          400: "#3333ff",
          500: "#0000ff",
          600: "#0000cc",
          700: "#000099",
          800: "#000066",
          900: "#000033",
        },
        red: {
          100: "#f8ced4",
          200: "#f29da8",
          300: "#eb6c7d",
          400: "#e53b51",
          500: "#de0a26",
          600: "#b2081e",
          700: "#850617",
          800: "#59040f",
          900: "#2c0208",
        },
        pink: {
          100: "#fcf6f9",
          200: "#faedf2",
          300: "#f7e5ec",
          400: "#f5dce5",
          500: "#f2d3df",
          600: "#c2a9b2",
          700: "#917f86",
          800: "#615459",
          900: "#302a2d",
        },
        violet: {
          100: "#ffe2eb",
          200: "#ffc5d8",
          300: "#ffa8c4",
          400: "#ff8bb1",
          500: "#ff6e9d",
          600: "#cc587e",
          700: "#99425e",
          800: "#662c3f",
          900: "#33161f"
},
      },
    },
  },
  plugins: [],
};

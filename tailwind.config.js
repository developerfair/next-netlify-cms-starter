module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        "brand-100": "#F0EFFF",
        "brand-200": "#DBD8FF",
        "brand-500": "#6D62FF",
        "brand-700": "#413B99",
        "brand-800": "#312C73",
        "brand-gray": "#f5f8fb",
        "illustration-accent": "#8989c0",
        "illustration-bg": "#dbc7be",
        "brand-bg": "#f5f1e9",
        "brand-color": "#342e52",
        "brand-text": "#1a181b",
        "brand-text-gray": "#3B5146",
        transparent: "transparent",
      },
    },
  },
  variants: {},
  plugins: [],
};

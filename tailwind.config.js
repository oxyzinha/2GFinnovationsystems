module.exports = {
  content: [

    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all source files are included
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "@shadcn/ui/dist/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
;

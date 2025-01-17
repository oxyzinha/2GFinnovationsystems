module.exports = {
  content: [

    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all source files are included
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "@shadcn/ui/dist/**/*.{js,jsx,ts,tsx}",

    './src/**/*.{html,js,jsx,ts,tsx,vue}', // Include all source files that use Tailwind
    './public/index.html', // Also include your HTML files if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
;

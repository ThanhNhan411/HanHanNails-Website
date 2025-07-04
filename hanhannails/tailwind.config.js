/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Quét toàn bộ mã nguồn React
    "./public/index.html",         // Quét file index.html nếu có class ở đó
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



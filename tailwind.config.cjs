/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                custom: "45rem auto",
            },
            boxShadow: {
                custom: "0 2px 3px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};

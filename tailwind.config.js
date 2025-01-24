/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "20px",
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1140px",
                    "2xl": "1360px",
                },
            },
            colors: {
                "purple": '#815ccb',
                "sky": "#1BABFE",

            },
            fontSize: {
                "custom-3xl": '32px',
                "custom-4xl": '34px',
            },
            lineHeight: {
                'custom-sm': '120%',
                'custom-xl': '150%',

            },
           
        },
    },
    plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    400: '#2C74B3',
                    500: '#205295',
                    600: '#144272',
                    700: '#0A2647',
                },
                'primary-light': '#00A9F2',
                secondary: '#FE16A1',
                tertiary: '#08173C',
            },
        },
    },
    plugins: [],
}

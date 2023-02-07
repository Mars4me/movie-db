/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#423F71',
                header: '#292841',
                body: '#1C1B29',
            },
            fontFamily: {
                sans: ['Quicksand', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            screens: {
                mobile: {
                    max: '768px',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
};

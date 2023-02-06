/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#423F71',
                header: '#292841',
                body: '#1C1829',
            },
            fontFamily: {
                sans: ['Quicksand', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};

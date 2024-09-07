/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        fontFamily: {
            'poppins': ["Poppins", "sans-serif"]
        },
        extend: {
            keyframes: {
                slide: {
                    '0%': { transform: "translateX(0)" },
                    '100%': { transform: "translateX(-100%)" },
                }
            },
            animation: {
                slide: 'slide 5s linear infinite',
            }
        }
    },
    variants: {
        animation: ['responsive', 'hover', 'focus'],
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.animation-paused': {
                    'animation-play-state': 'paused',
                },
                '.animation-running': {
                    'animation-play-state': 'running',
                },
            }, ['responsive', 'hover']);
        },
    ],
}
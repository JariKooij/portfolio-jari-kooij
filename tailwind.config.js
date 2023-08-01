/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                noise: "url('/images/noise_bg.png')",
            },
            maxWidth: {
                full: "1320px",
                small: "1024px",
            },
            colors: {
                dark: "#151515",
                black: "#090909",
                blue: "#DAF6FF",
                transparent: {
                    DEFAULT: "rgba(0, 0, 0, 0)",
                    grey: "rgba(61, 61, 61, 0.44)",
                    white: "rgba(255, 255, 255, 0.2)",
                    black: "rgba(21,21,21,0.33)",
                },
            },
            height: {
                navbarHeight: "80px",
            },
            spacing: {
                navbarHeight: "80px",
                small: "16px",
                small_medium: "24px",
                medium: "32px",
                large: "48px",
                huuge: "64px",
            },
            margin: {
                mobile_gap: "256px",
                desktop_gap: "300px",
            },
            lineHeight: {
                1: "1em",
            },
            borderRadius: {
                DEFAULT: "1rem",
            },
            fontSize: {
                "12px": ".75rem",
                "14px": ".875rem",
                "16px": "1rem",
                "20px": "1.25rem",
                "24px": "1.5rem",
                "32px": "2rem",
                "40px": "2.5rem",
                "48px": "3rem",
                "64px": "4rem",
            },
            letterSpacing: {
                huuge: ".75em",
            },
            transitionProperty: {
                size: "height, width",
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#F52200",
                comp1: "#DE0B14",
                comp2: "#DE460B",
                comp3: "#FA720D",
                comp4: "#FA0D8E",
                background: "#e9e9e9",
            },
        },
    },
    plugins: [],
};

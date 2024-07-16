import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import flowbiteReact from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
        flowbiteReact.content(),
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                default: ["Noto Sans"],
            },
            colors: {
                primary: "#4200CD",
                "semi-primary": "#9EADFE",
                "gray-primary": "#F2F2F2",
                "light-blue": "#637CFB",
                "light-salmon": "#FEAF9E",
                "light-turqoise": "#33C9C0",
                "light-periwinkle": "#9EADFE",
            },
        },
    },

    plugins: [forms, flowbiteReact.plugin()],
};

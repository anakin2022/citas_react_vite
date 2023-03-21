/** @type {import('tailwindcss').Config} */
module.exports = {
    /*
    en la version local la linea es:
    content: ["./index.html", ...

    en la version de despliegue o deployment es:
    content: ["index.html", ... 
    */

    purge: ["index.html", "./src/**/*.jsx"],
    theme: {
        extend: {},
    },
    plugins: [],
}
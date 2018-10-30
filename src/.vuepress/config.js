module.exports = {
    title: 'Iridium',
    description: 'A UI framework with no UI',
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.js"),
            require("autoprefixer")
        ]
    },
    themeConfig: {}
}

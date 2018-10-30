module.exports = {
    title: 'Iridium',
    description: 'A UI framework with no UI',
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.js"),
            require("autoprefixer")
        ]
    },
    themeConfig: {
        navigation: {
            global: [
                { name: 'Videos', url: 'https://www.youtube.com/channel/UCrdw4aUCfIAnFNB9q_80dqQ' },
                { name: 'Github', url: 'https://github.com/iridiumui/iridium' },
                { name: 'Twitter', url: 'https://twitter.com/IridiumUI' },
            ]
        }
    }
}

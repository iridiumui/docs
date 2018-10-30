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
            ],
            sidebar: [
                {
                    name: 'Getting Started',
                    slug: 'getting-started',
                    links: [
                        { name: 'What is Iridium?', slug: 'what-is-iridium' },
                        { name: 'Installation', slug: 'installation' },
                        { name: 'Renderless Components', slug: 'renderless-components' },
                        { name: 'Accessibility', slug: 'accessibility' },
                        { name: 'Components', slug: 'components' },
                        { name: 'Helpers', slug: 'helpers' },
                        { name: 'Transitions', slug: 'transitions' },
                    ]
                },
                {
                    name: 'Components',
                    slug: 'components',
                    links: [
                        { name: 'Hamburger Nav', slug: 'hamburger-nav' },
                    ]
                },
                {
                    name: 'Helpers',
                    slug: 'helpers',
                    links: [
                        { name: 'Fixed', slug: 'fixed', 'sublinks': [
                            { name: 'Fixed Top', slug: 'fixed-top' },
                            { name: 'Fixed Right', slug: 'fixed-right' },
                            { name: 'Fixed Bottom', slug: 'fixed-bottom' },
                            { name: 'Fixed Left', slug: 'fixed-left' },
                        ]},
                        { name: 'Breakpoint', slug: 'breakpoint', 'sublinks': [
                            { name: 'Breakpoint XS', slug: 'breakpoint-xs' },
                            { name: 'Breakpoint SM', slug: 'breakpoint-sm' },
                            { name: 'Breakpoint MD', slug: 'breakpoint-md' },
                            { name: 'Breakpoint LG', slug: 'breakpoint-lg' },
                            { name: 'Breakpoint XL', slug: 'breakpoint-xl' },
                        ]},
                    ]
                },
                {
                    name: 'Accessibility',
                    slug: 'accessibility',
                    links: [
                        { name: 'Visually Hidden', slug: 'visually-hidden' },
                    ]
                }
            ]
        }
    }
}

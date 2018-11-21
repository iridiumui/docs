 const path = require('path')
const glob = require("glob-all");
const PurgecssPlugin = require("purgecss-webpack-plugin");

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

module.exports = {
    title: 'Iridium',
    description: 'A UI framework with no UI',
    ga: 'UA-128629156-1',
    plugins: [
        // '@vuepress/google-analytics'
    ],
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.js"),
            require("autoprefixer")
        ]
    },
    configureWebpack:  {
        plugins: [
            new PurgecssPlugin({
                paths: glob.sync([
                    path.join(__dirname, "./theme/styles/**/*.css"),
                    path.join(__dirname, "./theme/components/**/*.vue"),
                    path.join(__dirname, "./theme/global-components/**/*.vue"),
                    path.join(__dirname, "./theme/layouts/**/*.vue"),
                    path.join(__dirname, "../readme.md"),
                    path.join(__dirname, "../docs/**/*.md"),
                ]),
                extractors: [
                    {
                        extractor: TailwindExtractor,
                        extensions: ["html", "js", "vue", "md"]
                    }
                ]
            })
        ]
    },
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
        ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
    ],
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
                        { name: 'Browser Support', slug: 'browser-support' },
                        { name: 'SSR', slug: 'server-side-rendering' },
                    ]
                },
                {
                    name: 'Components',
                    slug: 'components',
                    links: [
                        { name: 'Hamburger Nav', slug: 'hamburger-nav' },
                        { name: 'Modal', slug: 'modal' },
                    ]
                },
                {
                    name: 'Extra',
                    slug: 'extra',
                    links: [
                        { name: 'Code Block', slug: 'code-block' },
                        { name: 'Cookie Banner', slug: 'cookie-banner' },
                    ]
                },
                {
                    name: 'Helpers',
                    slug: 'helpers',
                    links: [
                        { name: 'Breakpoint', slug: 'breakpoint', 'sublinks': [
                            { name: 'Screen XS', slug: 'screen-xs' },
                            { name: 'Screen SM', slug: 'screen-sm' },
                            { name: 'Screen MD', slug: 'screen-md' },
                            { name: 'Screen LG', slug: 'screen-lg' },
                            { name: 'Screen XL', slug: 'screen-xl' },
                        ]},
                        { name: 'Click Outside', slug: 'click-outside' },
                        { name: 'Fixed', slug: 'fixed', 'sublinks': [
                            { name: 'Fixed Top', slug: 'fixed-top' },
                            { name: 'Fixed Right', slug: 'fixed-right' },
                            { name: 'Fixed Bottom', slug: 'fixed-bottom' },
                            { name: 'Fixed Left', slug: 'fixed-left' },
                            { name: 'Fixed Top Right', slug: 'fixed-top-right' },
                            { name: 'Fixed Top Left', slug: 'fixed-top-left' },
                            { name: 'Fixed Bottom Right', slug: 'fixed-bottom-right' },
                            { name: 'Fixed Bottom Left', slug: 'fixed-bottom-left' },
                        ]},
                        { name: 'In View', slug: 'in-view' },
                        { name: 'Scroll To', slug: 'scroll-to' },
                    ]
                },
                {
                    name: 'Accessibility',
                    slug: 'accessibility',
                    links: [
                        { name: 'Visually Hidden', slug: 'visually-hidden' },
                        { name: 'Focus Trap', slug: 'focus-trap' },
                    ]
                },
                {
                    name: 'Transitions',
                    slug: 'transition',
                    links: [
                    ]
                }
            ]
        }
    }
}

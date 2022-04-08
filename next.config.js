const nextConfig = {
    i18n: {
        locales: ['en', 'en-IE'],
        defaultLocale: 'en',
        localeDetection: false,
        domains: [
            {
                domain: 'localhost:3000',
                defaultLocale: 'en'
            },
            {
                domain: 'locale-demo-88.netlify.app',
                defaultLocale: 'en-IE'
            }
        ]
    }
}

module.exports = nextConfig
const nextConfig = {
    i18n: {
        locales: ['en', 'en-IE'],
        defaultLocale: 'en',
        localeDetection: false,
        domains: [
            {
                domain: 'localhost:3000',
                defaultLocale: 'en',
                http: true
            },
            {
                domain: 'local-ie:3000',
                defaultLocale: 'en-IE',
                http: true
            }
        ]
    }
}

module.exports = nextConfig
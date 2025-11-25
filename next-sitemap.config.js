/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.djdiptayan.in',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}

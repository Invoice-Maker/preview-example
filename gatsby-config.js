const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

// eslint-disable-next-line no-console
console.log(`Using environment config: '${activeEnv}'`)

// If we are in dev, ignore the fact that we are using a fake SSL certificate
if (activeEnv === 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

require('dotenv').config({
    path: `.env.${activeEnv}`,
})

const path = require(`path`)

module.exports = {
    siteMetadata: {
        locale: `en_US`, // Fallback
        siteName: `Preview Test`, // Fallback
        title: ``,
        description: ``,
        author: ``,
        siteUrl: `${process.env.PROTOCOL}://${process.env.BASE_URL}`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-react-helmet`,
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => activeEnv,
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                },
            },
        },
        {
            resolve: `gatsby-source-wordpress-experimental`,
            options: {
                url: `${process.env.API_PROTOCOL}://${process.env.API_BASE_URL}/graphql`,
                auth: {
                    htaccess: {
                        username: process.env.BASIC_AUTH_USER,
                        password: process.env.BASIC_AUTH_PASS,
                    },
                },
                verbose: true,
                schema: {
                    perPage: 20,
                },
                develop: {
                    hardCacheMediaFiles: false,
                },
                type: {
                    Template: {
                        limit:
                            process.env.NODE_ENV === `development`
                                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                                  300
                                : // and we don't actually need more than 5000 in production for this particular site
                                  5000,
                    },
                },
                html: {
                    imageMaxWidth: 620,
                    fallbackImageMaxWidth: 200,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaultQuality: 90,
            },
        },
        { resolve: `gatsby-transformer-sharp` },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Open Sans`,
                        variants: [`400`, `400i`, `600`, `600i`],
                    },
                ],
            },
        },
        { resolve: `gatsby-plugin-sass` },
    ],
}

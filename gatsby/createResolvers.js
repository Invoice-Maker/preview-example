const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const fs = require(`fs-extra`)
const he = require('he')
const decodeEntities = require(`../utils/decodeEntities.js`)
const limitString = require(`../utils/limitString.js`)
const stripTags = require(`../utils/stripTags.js`)

/**
 * Create cleaned up titles and description. Moved the weight from the front
 * end to the build process.
 */
module.exports = async function createResolvers({ createResolvers }) {
    createResolvers({
        WpTemplate: {
            cleanTitle: {
                type: 'String',
                resolve(source, args, context, info) {
                    return he.unescape(source?.title || '')
                },
            },
            cleanExcerpt: {
                type: 'String',
                resolve(source, args, context, info) {
                    const seo = source?.seo.metaDesc || ''
                    const excerpt = source?.excerpt || ''
                    return he.unescape(stripTags(seo || limitString(excerpt)))
                },
            },
        },
    })
}

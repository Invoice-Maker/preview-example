const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
    const { data } = await graphql(/* GraphQL */ `
        {
            allWpTemplate(
                sort: { fields: modifiedGmt, order: DESC }
                filter: { status: { eq: "publish" } }
            ) {
                nodes {
                    uri
                    id
                }
            }
        }
    `)

    // Make individual templates.
    await Promise.all(
        data.allWpTemplate.nodes.map(async (page, index) => {
            await actions.createPage({
                component: path.resolve('src/templates/template.js'),
                path: page.uri,
                context: {
                    id: page.id,
                },
            })
        })
    )
}

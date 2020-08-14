import React from 'react'

import { graphql } from 'gatsby'

import Breadcrumb from '../components/Breadcrumb'
import Wysiwyg from '../components/Wysiwyg'
import Container from '../containers/Container'
import Layout from '../containers/Layout'
import style from '../sass/templates/Template.module.scss'

const TemplateTemplate = (props) => {
    const {
        data: {
            wpTemplate: { cleanTitle, content, ancestors },
        },
        postURI,
    } = props

    // Fallback if no ancestors nodes provided
    const breadcrumbs = ancestors?.nodes || []
    breadcrumbs.reverse() // Put in hierarchy order.

    return (
        <Layout>
            <Container>
                <main className={style.templateWrap} role="main">
                    <Breadcrumb
                        crumbs={[
                            ...breadcrumbs,
                            {
                                title: cleanTitle,
                                uri: postURI,
                            },
                        ]}
                    />
                    <h1 className={style.title}>{cleanTitle}</h1>
                    <div className={style.flex}>
                        <article className={style.article}>
                            <Wysiwyg content={content} />
                        </article>
                    </div>
                </main>
            </Container>
        </Layout>
    )
}

export default TemplateTemplate

export const pageQuery = graphql`
    query PostByID($id: String!) {
        site {
            siteMetadata {
                title
            }
        }

        wpTemplate(id: { eq: $id }) {
            title
            cleanTitle
            content
            excerpt
            cleanExcerpt
            status
            date
            modified
            ancestors {
                nodes {
                    ... on WpTemplate {
                        title
                        uri
                    }
                }
            }
            featuredImage {
                node {
                    altText
                    title
                    remoteFile {
                        ...Base64
                        ...Facebook
                        ...Twitter
                    }
                }
            }
        }
    }
`

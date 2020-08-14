import { useStaticQuery, graphql } from 'gatsby'

function useSiteDefaults() {
    return useStaticQuery(
        graphql`
            {
                wp {
                    allSettings {
                        generalSettingsDescription
                        generalSettingsTitle
                        readingSettingsPostsPerPage
                    }
                }
                site {
                    siteMetadata {
                        siteName
                        description
                        author
                        siteUrl
                    }
                }
            }
        `
    )
}

export default useSiteDefaults

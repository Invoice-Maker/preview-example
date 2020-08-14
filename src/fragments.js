import { graphql } from 'gatsby'

export const fragments = graphql`
    fragment Base64 on File {
        childImageSharp {
            image260: sizes(base64Width: 258, quality: 100) {
                base64
            }
        }
    }

    fragment Facebook on File {
        childImageSharp {
            facebook: fixed(width: 1024, height: 512) {
                src
                width
                height
            }
        }
    }

    fragment Twitter on File {
        childImageSharp {
            twitter: fixed(width: 1200, height: 630) {
                src
            }
        }
    }
`

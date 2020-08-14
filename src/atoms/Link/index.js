import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
    activeClassName,
    children,
    partiallyActive,
    rel,
    target,
    to,
    ...other
}) => {
    let url = to

    // If linking to a full invoice maker URL. Cleanup url to pass to
    // correct function below.
    if (
        url.includes('https://invoicemaker.com') ||
        url.includes('https://www.invoicemaker.com') ||
        url.includes('cms.invoicemaker.com')
    ) {
        url = url.split('invoicemaker.com').pop()
    }

    let relTag = rel || ''
    if (target !== '_self') {
        relTag = `noopener`
    }

    const internal = /^\/(?!\/)/.test(url)
    if (internal) {
        return (
            <GatsbyLink
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                rel={relTag}
                target={target}
                to={url}
                // eslint-disable-next-line
                {...other}
            >
                {children}
            </GatsbyLink>
        )
    }
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <a href={url} rel={relTag} target={target} {...other}>
            {children}
        </a>
    )
}
export default Link

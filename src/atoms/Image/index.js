import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import style from './style.module.scss'

const Image = ({ absolute, image, objectFit, preview, shadow }) => {
    const imageFluid = image?.imageFile?.childImageSharp?.fluid || false

    let styled = { position: 'relative' }

    if (absolute) {
        styled = {
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            width: '100%',
        }
    }

    if (!preview && imageFluid) {
        return (
            <Img
                alt={image.altText ? image.altText : ''}
                className={shadow ? style.shadow : style.image}
                fluid={imageFluid}
                objectFit={objectFit}
                style={styled}
                title={image.title ? image.title : ''}
            />
        )
    }

    if (preview && image.sourceUrl) {
        return (
            <img
                alt={image.altText ? image.altText : ''}
                className={shadow ? style.shadow : style.image}
                src={image.mediaItemUrl}
                style={styled}
                title={image.title ? image.title : ''}
            />
        )
    }

    return null
}

export default Image

import React from 'react'
import convertShortcode from '../../utils/convertShortcode'
import style from './style.module.scss'
import './wysiwygGeneral.scss'

const Wysiwyg = ({ content }) => {
    return (
        <div
            className={`${style.wysiwygContent} wysiwyg`}
            /* eslint-disable react/no-danger */
            dangerouslySetInnerHTML={{
                __html: convertShortcode(content),
            }}
        />
    )
}

export default Wysiwyg

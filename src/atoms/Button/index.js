import React from 'react'
import Link from '../Link'

import buttonStyle from './style.module.scss'

const IconWrap = ({ children, icon, iconLeft }) => {
    if (icon) {
        const wrapClasses = [buttonStyle.iconWrap]
        if (iconLeft) {
            wrapClasses.push(buttonStyle.iconLeft)
        }
        return <div className={wrapClasses.join(' ')}>{children}</div>
    }
    // if there is no icon, return normally
    return <>{children}</>
}

/**
 * Button component
 * @param {dom element} children Elements to be wrapped by the button
 * @param {string} color Specific colour from list
 * @param {bool} fluid Only as large as it needs to be
 * @param {bool} full 100% width override.
 * @param {bool} icon Is an icon included in the button?
 * @param {bool} iconLeft Should the button be positioned to the left
 * @param {string} id ID to be applied to the link/button
 * @param {bool} small Is the button small, like the form 'add' button
 * @param {bool} large Is the button large like the download button
 * @param {string} name Name of the button if a button and not a link
 * @param {bool} newPage If a link, is the link opening a new page
 * @param {func} onClick The function to be triggered on click
 * @param {object} style Custom style to be added to the link element
 * @param {string} to If the button is a link, the URL to navigate to
 * @param {string} type If the button is a button type or a link
 * @param {string} value If the button is a button, the value to add to the elem
 */
const Button = ({
    children,
    color,
    fluid,
    full,
    icon,
    iconLeft,
    id,
    large,
    name,
    newPage,
    onClick,
    small,
    style,
    to,
    type,
    value,
}) => {
    const classes = [buttonStyle.button]

    if (large) {
        classes.push(buttonStyle.button_large)
    }

    if (small) {
        classes.push(buttonStyle.button_small)
    }

    if (color) {
        classes.push(buttonStyle[`button_color_${color}`])
    }

    if (fluid) {
        classes.push(buttonStyle.fluid)
    }

    if (full) {
        classes.push(buttonStyle.button_full)
    }

    if (to) {
        return (
            <Link
                className={classes.join(' ')}
                id={id}
                style={style}
                target={newPage ? '_blank' : null}
                to={to}
            >
                <IconWrap icon={icon} iconLeft={iconLeft}>
                    {children}
                </IconWrap>
            </Link>
        )
    }

    /* eslint-disable */
    return (
        <button
            className={classes.join(' ')}
            onClick={onClick}
            style={style}
            type={type || 'button'}
            value={value}
            name={name}
            id={id}
        >
            <IconWrap icon={icon} iconLeft={iconLeft}>
                {children}
            </IconWrap>
        </button>
    )
    /* eslint-enable */
}

Button.defaultProps = {
    type: 'button',
}

export default Button

import React from 'react'

import style from './style.module.scss'

const Container = ({ children, hideOnMobile, thin }) => {
    const styles = [style.container]
    if (thin) { styles.push(style.container_thin) }
    if (hideOnMobile) { styles.push(style.container_hideOnMobile) }
    return <div className={styles.join(' ')}>{children}</div>
}

export default Container

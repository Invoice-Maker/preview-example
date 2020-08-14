import React from 'react'
import Link from '../../atoms/Link'
import style from './style.module.scss'

const Breadcrumb = ({ crumbs }) => {
    const currentPage = crumbs.pop()

    const list = crumbs.map((item) => {
        return (
            <Link key={item.name} className={style.crumb} to={item.uri}>
                {item.title}
            </Link>
        )
    })
    return (
        <nav className={style.breadcrumb}>
            <Link key="breadcrumb-home" className={style.crumb} to="/">
                Home
            </Link>
            {list}
            <span className={style.crumb}>{currentPage.title}</span>
        </nav>
    )
}

export default Breadcrumb

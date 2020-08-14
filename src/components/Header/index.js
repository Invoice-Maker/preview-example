import React from 'react'
import Container from '../../containers/Container'
import style from './style.module.scss'

const Header = () => (
    <header className={`${style.header} site-header`}>
        <Container>
            <div className={style.headerWrap}>
                <p>header</p>
            </div>
        </Container>
    </header>
)

export default Header

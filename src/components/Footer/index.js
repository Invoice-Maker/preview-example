import React from 'react'
import Container from '../../containers/Container'
import style from './style.module.scss'

const Footer = () => (
    <footer className={style.footer}>
        <Container thin>
            <div className={style.footerWrap}>
                <p>Footer</p>
            </div>
        </Container>
    </footer>
)

export default Footer

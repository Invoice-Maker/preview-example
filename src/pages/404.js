import React from 'react'
import Container from '../containers/Container'
import Layout from '../containers/Layout'
import style from '../sass/templates/Page404.module.scss'

const NotFoundPage = () => {
    return (
        <Layout>
            <Container>
                <div className={style.page404}>
                    <p>
                        Oooops! Looks like there aren&apos;t any invoices here!
                    </p>
                </div>
            </Container>
        </Layout>
    )
}

export default NotFoundPage

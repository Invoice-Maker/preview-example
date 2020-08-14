import React from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import './style.scss'

export const LayoutBasic = ({ children, className }) => (
    <div className={className ? `siteWrapper ${className}` : 'siteWrapper'}>
        {children}
    </div>
)

const SiteSlider = ({ children, className }) => {
    return (
        <div className="siteSlide">
            <div className="siteSlide_cover" />
            <LayoutBasic className={className}>{children}</LayoutBasic>
            <Footer />
        </div>
    )
}

const Layout = ({ children, className }) => (
    <>
        <Header />
        <SiteSlider>{children}</SiteSlider>
    </>
)

export default Layout

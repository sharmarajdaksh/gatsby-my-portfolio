import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import layoutStyles from "./Layout.module.scss"

export default ({ children }) => {
    return (
        <div className={layoutStyles.layout}>
            <div className={layoutStyles.content}>
                <Header />
                {children}
            </div>
            <Footer/>
        </div>
    )
}

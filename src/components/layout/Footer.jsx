import React from "react"

import footerStyles from "./Footer.module.scss"

export default () => {
    return (
        <div className={footerStyles.footer}>
            Created by Dakshraj Sharma with Gatsby and{" "}
            <span role="img" aria-label="love">❤️</span>.
        </div>
    )
}

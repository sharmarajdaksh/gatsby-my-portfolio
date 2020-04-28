import React from "react"

import headerStyles from "./Header.module.scss"
import { Link } from "gatsby"

export default () => {
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.header__h1}>
                <Link to="/">
                    <div className={headerStyles.header__h1__div}>
                        <div className={headerStyles.header__h1__div__char}>
                            D
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            a
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            k
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            s
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            h
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            r
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            a
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            j
                        </div>
                    </div>
                    <div className={headerStyles.header__h1__div}>
                        <div className={headerStyles.header__h1__div__char}>
                            {"{"}
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            S
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            h
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            a
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            r
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            m
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            a
                        </div>
                        <div className={headerStyles.header__h1__div__char}>
                            {"}"}
                        </div>
                    </div>
                </Link>
            </div>
            <div className={headerStyles.header__div}>
                <p>
                    <a href="https://github.com/sharmarajdaksh?tab=repositories">/projects</a>
                </p>
                <p>
                    <Link to="/blog">/blog</Link>
                </p>
            </div>
        </div>
    )
}

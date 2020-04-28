import React, { useEffect, useState } from "react"

import Header from "./Header"
import Footer from "./Footer"
import layoutStyles from "./Layout.module.scss"
import intersection from "../../shared/intersection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"

export default ({ children }) => {
    useEffect(() => intersection(document.querySelectorAll("[data-src]")), [])

    const scrollDown = (e, ref) => {
        e.preventDefault()
        ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    const [showBackToTop, setShowBackToTop] = useState(false)

    const headerRef = useRef(null)

    const headerIntersection = header => {
        let observer = new IntersectionObserver((entry, self) => {
            if (entry[0].isIntersecting) {
                setShowBackToTop(false)
            } else {
                setShowBackToTop(true)
            }
        })
        observer.observe(header)
    }

    useEffect(() => {
        headerIntersection(headerRef.current)
    }, [])

    return (
        <div className={layoutStyles.layout}>
            <div className={layoutStyles.content}>
                <div ref={headerRef} style={{ height: 0, width: 0 }}></div>
                <Header />
                {children}
            </div>
            <div
                className={layoutStyles.backtotop}
                style={{
                    // display: showBackToTop ? "block" : "none",
                    opacity: showBackToTop ? 1 : 0,
                }}
            >
                <a href={headerRef} onClick={e => scrollDown(e, headerRef)}>
                    <FontAwesomeIcon icon={faChevronCircleUp} />
                </a>
            </div>
            <Footer />
        </div>
    )
}

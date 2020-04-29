import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"

export default ({ title }) => {
    const q = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet>
            <title>{`${title} | ${q.site.siteMetadata.title}`}</title>
            <meta
                name="title"
                content={`${title} | ${q.site.siteMetadata.title}`}
            />
            <meta
                name="description"
                content="Dakshraj Sharma's website and blog!"
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://sharmarajdaksh.xyz/" />
            <meta
                property="og:title"
                content={`${title} | ${q.site.siteMetadata.title}`}
            />
            <meta
                property="og:description"
                content="Dakshraj Sharma's website and blog!"
            />
            <meta
                property="og:image"
                content="https://sharmarajdaksh.xyz/coder_on_desk.svg"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:url"
                content="https://sharmarajdaksh.xyz/"
            />
            <meta
                property="twitter:title"
                content={`${title} | ${q.site.siteMetadata.title}`}
            />
            <meta
                property="twitter:description"
                content="Dakshraj Sharma's website and blog!"
            />
            <meta
                property="twitter:image"
                content="https://sharmarajdaksh.xyz/coder_on_desk.svg"
            />
        </Helmet>
    )
}

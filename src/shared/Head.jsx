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

    return <Helmet title={`${title} | ${q.site.siteMetadata.title}`} />
}

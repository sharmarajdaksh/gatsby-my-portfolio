import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import blogPostStyles from "./BlogPost.module.scss"

export const q = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                date
            }
        }
    }
`

const BlogPost = props => {
    const title = props.data.markdownRemark.frontmatter.title
    const subtitle = props.data.markdownRemark.frontmatter.subtitle
    const date = props.data.markdownRemark.frontmatter.date
    const html = props.data.markdownRemark.html

    return (
        <Layout>
            <article className={blogPostStyles.article}>
                <div className={blogPostStyles.article__frontmatter}>
                    <p>{date}</p>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                <div className={blogPostStyles.article__divider}></div>
                <div
                    className={blogPostStyles.article__content}
                    dangerouslySetInnerHTML={{ __html: html }}
                ></div>
                <div className={blogPostStyles.article__divider}></div>
            </article>
        </Layout>
    )
}

export default BlogPost

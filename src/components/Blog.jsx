import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Head from "../shared/Head"
import blogListItemStyles from "./BlogListItem.module.scss"
import Layout from "./layout/Layout"

const BlogListItem = ({ blog, timeToRead }) => {
    return (
        <div className={blogListItemStyles.bloglistitem}>
            <h2>{blog.title}</h2>
            <p className={blogListItemStyles.date}>
                {blog.date} | {timeToRead} minute read
            </p>
            <p className={blogListItemStyles.subtitle}>{blog.subtitle}</p>
        </div>
    )
}

const Blog = () => {
    const q = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            subtitle
                            date
                            author
                        }
                        timeToRead
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog" />
            <ul>
                {q.allMarkdownRemark.edges
                    .sort((a, b) => parseFloat(b.node.frontmatter.index) - parseFloat(a.node.frontmatter.index))
                    .map(edge => (
                        <Link
                            to={"/blog/" + edge.node.fields.slug}
                            key={edge.node.frontmatter.date}
                        >
                            <li>
                                <BlogListItem
                                    blog={edge.node.frontmatter}
                                    timeToRead={edge.node.timeToRead}
                                />
                            </li>
                        </Link>
                    ))}
            </ul>
        </Layout>
    )
}

export default Blog

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
                            index
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
            <div className={blogListItemStyles.bloglist}>
                <div>
                    <h2>my blog</h2>
                </div>
                <ul>
                    {q.allMarkdownRemark.edges
                        .sort(
                            (a, b) =>
                                parseFloat(a.node.frontmatter.index) -
                                parseFloat(b.node.frontmatter.index)
                        )
                        .map(edge => (
                            <Link
                                to={"/blog/" + edge.node.fields.slug}
                                key={edge.node.frontmatter.index}
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
                {q.allMarkdownRemark.edges.length > 5 ? (
                    <div style={{ height: "5rem" }}></div>
                ) : null}
            </div>
        </Layout>
    )
}

export default Blog

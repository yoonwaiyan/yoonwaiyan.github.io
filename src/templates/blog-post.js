import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tag from "../components/tag"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tags = post.frontmatter.tags
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="mx-auto w-screen xl:w-max max-w-prose px-10 py-6 break-words">
        <div className="divide-y-2 divide-solid">
          <div className="pb-6">
            <div className="flex justify-between items-center">
              <span className="font-light text-gray-600 dark:text-gray-50">
                {post.frontmatter.date}
              </span>
            </div>

            <h1 className="mt-2 prose prose-2xl font-bold dark:text-gray-50">
              {post.frontmatter.title}
            </h1>

            <div className="mt-2 space-x-2">
              {tags.map(tag => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>

            <div
              className="prose mt-2 dark:text-gray-50"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          <div className="pt-6">
            <Bio />

            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

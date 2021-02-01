import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Tag from '../components/tag'

import('../styles/global.css')

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const tags = post.frontmatter.tags
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className="mx-auto max-w-prose px-10 py-6">
        <div className="divide-y-2 divide-solid">
          <div className="pb-6">
            <div className="flex justify-between items-center">
              <span className="font-light text-gray-600">
                {post.frontmatter.date}
              </span>
            </div>

            <h1 className="mt-2 prose prose-2xl font-bold">
              {post.frontmatter.title}
            </h1>

            <div className="mt-2 space-x-2">
              {tags.map(tag => (
                <Tag tag={tag} />
              ))}
            </div>

            <div
              className="prose mt-2"
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
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
  }
`

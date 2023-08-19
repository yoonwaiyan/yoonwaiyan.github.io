import React from "react"
import PropTypes from "prop-types"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata.title
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="mx-auto max-w-prose px-10 py-6">
        <div className="mt-2 prose prose-2xl font-bold">{tagHeader}</div>
        <ul className="mt-2">
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter

            return (
              <TagItem key={slug} slug={slug}>
                {title}
              </TagItem>
            )
          })}
          <TagItem slug={"/tags"}>All tags</TagItem>
        </ul>
      </div>
    </Layout>
  )
}

const TagItem = ({ slug, children }) => {
  return (
    <li key={slug} className="mt-2">
      <Link to={slug} className="shadow-none hover:underline">
        {children}
      </Link>
    </li>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`query ($tag: String) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    limit: 2000
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}`

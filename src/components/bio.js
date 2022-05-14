/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  return (
    <div className="flex flex-col mb-10">
      {author.name}'s sharing on web development.
      <a
        href={`https://twitter.com/${social.twitter}`}
        className="shadow-none hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Follow on Twitter
      </a>
    </div>
  )
}

export default Bio

/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div class="flex flex-row mb-10">
      <Image
        className="mr-4"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p className="flex flex-col">
        {author}'s sharing on web development.
        <a
          href={`https://twitter.com/${social.twitter}`}
          className="shadow-none hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Follow on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio

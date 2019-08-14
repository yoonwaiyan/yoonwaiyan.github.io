import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Wai Yan" />
        <h1>About Me</h1>
        <p>
          I'm a senior full-stack software engineer currently working at
          Petaling Jaya, Malaysia. I do mainly Ruby on Rails, React, Node.js.
        </p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

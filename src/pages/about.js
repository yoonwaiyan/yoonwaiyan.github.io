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
        <div className="mx-auto max-w-prose px-10 py-6">
          <div className="mt-2 prose prose-2xl font-bold">About Wai Yan</div>
          <p>
            I'm a senior full-stack software engineer currently working at Kuala
            Lumpur, Malaysia. I do mainly Ruby on Rails, React, Node.js. I know
            some Docker, Serverless, and Python too.
          </p>
        </div>
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

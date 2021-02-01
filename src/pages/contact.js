import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="Contact Me" />
    <h1>Contact Me</h1>
    <form method="POST" action="https://formspree.io/mail@waiyanyoon.com">
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <input type="hidden" name="_next" value="//waiyanyoon.com" />

      <div className="field">
        <label className="leading-loose">Email</label>
        <div className="control">
          <input
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <input
            className="input"
            name="_subject"
            placeholder="Your subject"
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            required
            className="textarea"
            placeholder="Your message"
            name="message"
          />
        </div>
      </div>

      <div className="control">
        <button type="submit" className="button is-primary">
          Submit
        </button>
      </div>
    </form>
  </Layout>
)

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const formInputClassName =
  'px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'

const Contact = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="Contact Me" />
    <div className="mx-auto px-10 py-6 w-full max-w-prose">
      <div className="mt-2 prose prose-2xl font-bold">Contact Me</div>
      <form method="POST" action="https://formspree.io/f/xleovjzv">
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <input type="hidden" name="_next" value="//waiyanyoon.com" />

        <div className="space-y-4 mt-2">
          <div className="field">
            <label className="label">Email</label>
            <div className="control mt-2">
              <input
                className={formInputClassName}
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Subject</label>
            <div className="control mt-2">
              <input
                className={formInputClassName}
                name="_subject"
                placeholder="Your subject"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control mt-2">
              <textarea
                required
                className={formInputClassName}
                placeholder="Your message"
                name="message"
              />
            </div>
          </div>

          <div className="control">
            <button
              type="submit"
              className="px-4 py-2 rounded-md border-solid border-2 border-gray-700 bg-gray-700 text-gray-100 hover:border-gray-700 hover:bg-gray-100 hover:text-gray-700"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
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

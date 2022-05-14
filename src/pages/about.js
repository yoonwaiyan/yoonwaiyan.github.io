import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const proficient = ["Ruby on Rails", "React"]

const activelyUsed = [
  "Elixir",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "MongoDB",
  "Git",
  "Webpack",
  "CSS/SASS",
  "SASS",
  "UI/UX",
  "Cypress",
]

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Wai Yan" />
      <div className="mx-auto max-w-prose px-10 py-6">
        <section>
          <h2 className="mt-2 prose prose-2xl font-bold">About Wai Yan</h2>
          <p className="mt-2 prose">
            I'm a full-stack software engineer currently based in Kuala Lumpur,
            Malaysia.
          </p>
        </section>

        <section className="mt-4">
          <div className="mt-2 prose prose-xl font-bold">Skills</div>
          <List title="Proficient" list={proficient} />
          <List title="Actively Used" list={activelyUsed} />
        </section>
      </div>
    </Layout>
  )
}

export default About

const List = ({ title, list }) => {
  return (
    <div className="mb-4 prose">
      {title}:
      <ul className="list-disc">
        {list.map(el => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

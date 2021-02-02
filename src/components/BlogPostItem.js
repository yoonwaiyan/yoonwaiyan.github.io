import React from 'react'
import { Link } from 'gatsby'

import Tag from './tag'

const BlogPostItem = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const tags = node.frontmatter.tags

  return (
    <div
      key={node.fields.slug}
      className="mx-auto w-screen xl:w-max max-w-prose px-10 py-6"
    >
      <div className="flex flex-col justify-start sm:justify-between sm:flex-row sm:items-center max-w-full">
        <span className="font-light text-gray-600">
          {node.frontmatter.date}
        </span>
        <div className="space-x-2 overflow-x-hidden my-2 sm:mt-none break-words">
          {tags.map(tag => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>
      <Link
        to={node.fields.slug}
        className="mt-2 prose-xl font-bold text-gray-700 shadow-none no-underline hover:underline"
      >
        {title}
      </Link>
      <p
        className="mt-2 prose"
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}

export default BlogPostItem

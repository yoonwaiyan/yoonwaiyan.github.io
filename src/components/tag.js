import React from "react"
import { Link } from "gatsby"

const Tag = ({ tag }) => {
  return (
    <Link
      to={`/tags/${tag}`}
      key={tag}
      className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 prose-sm"
    >
      {tag}
    </Link>
  )
}

export default Tag

import React from 'react'

const Tag = ({ tag }) => {
  return (
    <span
      key={tag}
      className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
    >
      {tag}
    </span>
  )
}

export default Tag

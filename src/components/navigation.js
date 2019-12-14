import React from 'react'
import { rhythm } from '../utils/typography'

const links = [
  {
    url: '/about',
    title: 'About',
  },
  {
    url: 'https://github.com/yoonwaiyan',
    title: 'Github',
  },
  {
    url: '/contact',
    title: 'Contact',
  },
]

const Navigation = () => (
  <nav style={{ display: 'inline-block' }}>
    {links.map(({ url, title }) => (
      <LinkItem url={url}>{title}</LinkItem>
    ))}
  </nav>
)

const LinkItem = ({ url, children }) => (
  <a href={url} style={{ marginLeft: `${rhythm(1.5)}` }}>
    {children}
  </a>
)

export default Navigation

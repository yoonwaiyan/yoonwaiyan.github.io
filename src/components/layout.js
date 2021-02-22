import React from 'react'
import { Link } from 'gatsby'

import ThemeToggle from './ThemeToggle'

const links = [
  {
    url: '/about',
    pageTitle: 'About',
    type: 'internal',
  },
  {
    url: 'https://github.com/yoonwaiyan',
    pageTitle: 'Github',
    type: 'external',
  },
]

const Layout = ({ title, children }) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="container mx-auto max-w-prose px-10 py-6 flex flex-col sm:flex-row justify-between items-center">
          <Link className="shadow-none font-bold prose-xl" to={`/`}>
            {title}
          </Link>
          <nav className="space-x-12 main-nav sm:flex mt-12 sm:mt-0 flex-col sm:flex-row items-center relative flex-1 justify-end">
            {links.map(item => (
              <NavLink item={item} key={item.url} />
            ))}
            <ThemeToggle />
          </nav>
        </div>
        <main className="container flex flex-wrap flex-col mx-auto">
          {children}
        </main>
        <footer className="container flex flex-wrap mx-auto max-w-prose px-10 py-6">
          © {new Date().getFullYear()}, Built with Gatsby
        </footer>
      </div>
    </>
  )
}

const NavLink = ({ item: { url, pageTitle, type } }) => {
  const classes = 'shadow-none hover:underline'
  if (type === 'internal') {
    return (
      <Link className={classes} to={url}>
        {pageTitle}
      </Link>
    )
  } else {
    return (
      <a
        href={url}
        key={url}
        className={classes}
        target="_blank"
        rel="noreferrer"
      >
        {pageTitle}
      </a>
    )
  }
}

export default Layout

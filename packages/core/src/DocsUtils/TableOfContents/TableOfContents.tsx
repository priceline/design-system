import kebabCase from 'lodash/kebabCase'
import React from 'react'
import { Box } from '../../Box/Box'
import { Link } from '../../Link/Link'

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

/**
 * @public
 */
export type TableOfContentsProps = {
  links: string[]
}

/**
 * A navigation list for jumping to sections within documentation.
 *
 * Renders a list of clickable links that smooth-scroll to matching section IDs.
 * Link text is converted to kebab-case for ID matching. Use at the top of long
 * documentation pages to help users navigate to specific sections.
 *
 * @public
 */
export const TableOfContents = ({ links }: TableOfContentsProps) => (
  <Box my={5}>
    <ul>
      {links.map((link) => {
        const id = kebabCase(link)
        return (
          <Link key={id} onClick={() => scrollTo(id)}>
            <li>{link}</li>
          </Link>
        )
      })}
    </ul>
  </Box>
)

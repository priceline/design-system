import kebabCase from 'lodash/kebabCase'
import React from 'react'
import { Box, Link } from '../..'

const scrollTo = (id: string) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })

export type TableOfContentsProps = {
  links: string[]
}

export const TableOfContents = ({ links }: TableOfContentsProps) => (
  <Box py={5}>
    <ul>
      {links.map((link) => {
        const id = kebabCase(link)
        return (
          <li key={id}>
            <Link onClick={() => scrollTo(id)}>{link}</Link>
          </li>
        )
      })}
    </ul>
  </Box>
)

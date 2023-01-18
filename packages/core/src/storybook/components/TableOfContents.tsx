import React from 'react'
import { Box, Link } from '../..'

const scrollTo = (id: string) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })

export type TableOfContentsProps = {
  links: Record<string, string>
}

export const TableOfContents = ({ links }: TableOfContentsProps) => (
  <Box py={5}>
    <ul>
      {Object.keys(links).map((id) => (
        <li key={id}>
          <Link onClick={() => scrollTo(id)}>{links[id]}</Link>
        </li>
      ))}
    </ul>
  </Box>
)

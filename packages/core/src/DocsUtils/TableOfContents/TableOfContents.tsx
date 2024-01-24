import React from 'react'
import { Box } from '../../Box/Box'
import { Link } from '../../Link/Link'
import { kebabCase } from '../../utils/strings'

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export type TableOfContentsProps = {
  links: string[]
}

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

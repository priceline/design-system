import React from 'react'
import { Heading, Box, Link as DSLink } from 'pcln-design-system'
import Link from 'next/link'
import NavLink from './NavLink'
import Logo from './Logo'
import navigation from './navigation'

export default (props) => (
  <Box px={3} pb={5} color='text' bg='lightGray'>
    <Box px={3} pb={4}>
      <Link href='/'>
        <div>
          <Logo />
        </div>
      </Link>
    </Box>
    {navigation.map((section) =>
      section.section ? (
        <Box key={section.section}>
          <Heading color='text' p={3} bold caps fontSize={0}>
            {section.section}
          </Heading>
          {section.links.map((link) => (
            <NavLink
              key={link.name}
              href={link.path}
              color='gray'
              children={link.title || link.name}
            />
          ))}
        </Box>
      ) : (
        <NavLink key={section.name} href={section.path}>
          {section.name}
        </NavLink>
      )
    )}
  </Box>
)

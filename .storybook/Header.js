import React from 'react'
import { storiesOf } from '@storybook/react'
import { space } from 'styled-system'
import {
  Box,
  Flex,
  Text,
  Link
} from '../src'
import styled from 'styled-components'

const Container = styled(Box)`max-width:1280px`

Container.defaultProps = {
  mx: 'auto'
}

const NavLink = styled(Link)`
  ${space}
`

storiesOf('Header', module)
  .add('Hello', () => (
    <Box color='blue'>
      <Container>
        <Flex align='center'>
          <NavLink href='#!'>
            Priceline
          </NavLink>
          <Box mx='auto' />
            {links.map(link => (
              <NavLink mx={2} {...link} />
            ))}
          <Box mx='auto' />
          <NavLink
            href='#'
            children='Sign In'
            mx={2}
          />
          <NavLink
            href='#'
            children='My Trips'
            mx={2}
          />
          <NavLink
            href='#'
            children='Help'
            mx={2}
          />
        </Flex>
      </Container>
    </Box>
  ))

const links = [
  {
    key: 'hotels',
    children: 'Hotels',
    href: '#!'
  },
  {
    key: 'flights',
    children: 'Flights',
    href: '#!'
  },
  {
    key: 'cars',
    children: 'Cars',
    href: '#!'
  },
  {
    key: 'packages',
    children: 'Packages',
    href: '#!'
  },
  {
    key: 'cruises',
    children: 'Cruises',
    href: '#!'
  },
]

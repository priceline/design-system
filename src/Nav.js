import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Box from './Box'
import Icon from './Icon'
import theme from './theme'
import PropTypes from 'prop-types'

const Nav = styled(Flex)`
  border-bottom: 1px solid ${theme.colors.gray200}
    height: 48px;
    ${props => props.theme.mediaQueries['md']} {
    height: 60px;
  } 
`

Nav.displayName = 'Nav'

export default class Header extends React.Component {
  render() {
    return (
      <Nav
        align="center"
        color={theme.colors.text}
        bg={theme.colors.white}
        justify="space-between"
        px={4}
      >
        <Box>
          <a href="/">
            <Icon name="knotelLogo" size={80} color={theme.colors.gray800} />
          </a>
        </Box>
        <Flex>{this.props.children}</Flex>
      </Nav>
    )
  }
}

import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Icon from './Icon'
import theme from './theme'
import PropTypes from 'prop-types'

const Nav = styled(Flex)`
  border-bottom: 1px solid ${theme.colors.gray200}
  height: 60px;
`

Nav.displayName = 'Nav'

export default class Header extends React.Component {
  render () {
    return (
      <Nav
        align='center'
        color={theme.colors.text}
        bg={theme.colors.white}
        px={3}

      >
        <a href='/'>
          <Icon name='kLogo' size={52} color={theme.colors.gray800} />
        </a>
      </Nav>
    )
  }
}

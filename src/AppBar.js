import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Box from './Box'
import Icon from './Icon'
import theme from './theme'
import PropTypes from 'prop-types'

const AppBar = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
  height: 48px;
  ${props => props.theme.mediaQueries['md']} {
    height: 60px;
  } 
  a {
    color: ${props => props.inverse ? props.theme.colors.white : props.theme.colors.text}
  }
`

export default class AppBarWrapper extends React.Component {
  render () {
    return (
      <AppBar
        align='center'
        bg={this.props.inverse ? this.props.color : theme.colors.white}
        color={this.props.inverse ? theme.colors.white : theme.colors.text}
        justify='space-between'
        px={4}
        inverse={this.props.inverse}
      >
        <Box>
          <a href='/'>
            <Icon name='knotelLogo' size={80} color={this.props.inverse ? theme.colors.white : this.props.color} />
          </a>
        </Box>
        <Flex>{this.props.children}</Flex>
      </AppBar>
    )
  }
}

AppBarWrapper.displayName = 'AppBar'

AppBarWrapper.defaultProps = {
  inverse: false,
  color: theme.colors.gray800,
  theme: theme
}

AppBarWrapper.propTypes = {
  inverse: PropTypes.bool
}

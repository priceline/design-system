import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { space, color, theme } from 'styled-system'

const BaseNavItem = styled.a`
  display: block;
  text-decoration: none;
  font-size: ${theme('fontSizes.1')}px;
  border-radius: ${theme('radius')};
  ${space} ${color} &:hover {
    box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.125);
  }
  &.active {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.16);
  }
`
BaseNavItem.defaultProps = {
  px: 2,
  py: 2,
  color: 'inherit'
}

const RouterNavItem = BaseNavItem.withComponent(NavLink)

const NavItem = props =>
  props.href ? <BaseNavItem {...props} /> : <RouterNavItem {...props} />

export default NavItem

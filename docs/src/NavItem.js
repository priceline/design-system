import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { space, color, theme } from 'styled-system'

const BaseNavItem = styled.a`
  display: block;
  text-decoration: none;
  font-size: ${theme('fontSizes.2')}px;
  ${space} ${color} &:hover {
    color: ${theme('colors.text')};
  }
  &.active {
    color: ${theme('colors.blue')};
    font-weight: ${theme('bold')};
    border-left: 4px solid #007aff;
    margin-left: -4px;
  }
`
BaseNavItem.defaultProps = {
  pl: 3,
  pr: 2,
  py: 1,
  color: 'gray'
}

const RouterNavItem = BaseNavItem.withComponent(NavLink)

const NavItem = props =>
  props.href ? <BaseNavItem {...props} /> : <RouterNavItem {...props} />

export default NavItem

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { space, color, theme } from 'styled-system'

const NavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: ${theme('fontSizes.1')}px;
  opacity: 0.75;
  ${space} ${color} &:hover {
    box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.125);
  }
  &.active {
    opacity: 1;
  }
`
NavItem.defaultProps = {
  px: 3,
  py: 2,
  color: 'inherit'
}

export default NavItem

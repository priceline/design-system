import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Icon = ({ size, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentcolor"
  >
    <path d="M3,13h18v-2H3V13z M3,18h18v-2H3V18z M3,6v2h18V6H3z" />
  </svg>
)

const MenuIcon = styled(Icon)([], space, color)

MenuIcon.displayName = 'MenuIcon'

MenuIcon.defaultProps = {
  size: 24
}

export default MenuIcon

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
    <path d="M10,20.5v-6h4v6h5v-8h3l-10-9l-10,9h3v8H10z" />
  </svg>
)

const HomeIcon = styled(Icon)([], space, color)

HomeIcon.displayName = 'HomeIcon'

HomeIcon.defaultProps = {
  size: 24
}

export default HomeIcon

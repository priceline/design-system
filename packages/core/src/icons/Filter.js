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
    <path d="M10,18h4v-2h-4V18z M3,6v2h18V6H3z M6,13h12v-2H6V13z" />
  </svg>
)

const FilterIcon = styled(Icon)([], space, color)

FilterIcon.displayName = 'FilterIcon'

FilterIcon.defaultProps = {
  size: 24
}

export default FilterIcon

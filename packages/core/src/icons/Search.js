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
    <path
      d="M15.5,14h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2C16,5.9,13.1,3,9.5,3S3,5.9,3,9.5S5.9,16,9.5,16
	c1.6,0,3.1-0.6,4.2-1.6l0.3,0.3v0.8l5,5l1.5-1.5L15.5,14z M9.5,14C7,14,5,12,5,9.5S7,5,9.5,5S14,7,14,9.5S12,14,9.5,14z"
    />
  </svg>
)

const SearchIcon = styled(Icon)([], space, color)

SearchIcon.displayName = 'SearchIcon'

SearchIcon.defaultProps = {
  size: 24
}

export default SearchIcon

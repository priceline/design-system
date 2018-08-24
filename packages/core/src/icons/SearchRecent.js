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
      d="M17,14h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2C17.5,5.9,14.6,3,11,3S4.5,6,4.5,9.5H2l3.8,4l4.2-4H6.5
	C6.5,7,8.5,5,11,5s4.5,2,4.5,4.5c0,2.5-2,4.5-4.5,4.5c-0.7,0-1.3-0.1-1.8-0.4l-1.5,1.5c1,0.6,2.1,0.9,3.3,0.9c1.6,0,3.1-0.6,4.2-1.6
	l0.3,0.3v0.8l5,5L22,19L17,14z"
    />
  </svg>
)

const SearchRecentIcon = styled(Icon)([], space, color)

SearchRecentIcon.displayName = 'SearchRecentIcon'

SearchRecentIcon.defaultProps = {
  size: 24
}

export default SearchRecentIcon

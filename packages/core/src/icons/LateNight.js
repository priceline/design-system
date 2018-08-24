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
      d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M12.8,7c-2.9,0-5.3,2.2-5.3,5
	s2.4,5,5.3,5c1,0,1.9-0.2,2.7-0.7c-1.6-0.9-2.7-2.5-2.7-4.3s1.1-3.5,2.7-4.3C14.7,7.2,13.8,7,12.8,7z"
    />
  </svg>
)

const LateNightIcon = styled(Icon)([], space, color)

LateNightIcon.displayName = 'LateNightIcon'

LateNightIcon.defaultProps = {
  size: 24
}

export default LateNightIcon

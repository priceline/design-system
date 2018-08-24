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
      d="M20,2H4C3.4,2,3,2.4,3,3v3h18V3C21,2.4,20.6,2,20,2z M6,5C5.5,5,5,4.5,5,4s0.5-1,1-1s1,0.5,1,1S6.5,5,6,5z
	 M10,5C9.5,5,9,4.5,9,4s0.5-1,1-1s1,0.5,1,1S10.5,5,10,5z M14,5c-0.5,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S14.5,5,14,5z M18,5
	c-0.5,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S18.5,5,18,5z M3,20c0,0.6,0.4,1,1,1h1v1h2v-1h10v1h2v-1h1c0.6,0,1-0.4,1-1V7H3V20z M7,8h10v1
	H7V8z M5,10h14v9H5V10z"
    />
  </svg>
)

const KitchenetteIcon = styled(Icon)([], space, color)

KitchenetteIcon.displayName = 'KitchenetteIcon'

KitchenetteIcon.defaultProps = {
  size: 24
}

export default KitchenetteIcon

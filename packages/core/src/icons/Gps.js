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
      d="M12,8.4c-2,0-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6S14,8.4,12,8.4z M20.1,11.1
	c-0.5-3.8-3.5-6.8-7.2-7.2V2h-1.8v1.9c-3.8,0.4-6.8,3.4-7.2,7.2H2v1.8h1.9c0.5,3.8,3.5,6.8,7.2,7.2V22h1.8v-1.9
	c3.8-0.5,6.8-3.5,7.2-7.2H22v-1.8H20.1z M12,18.4c-3.5,0-6.4-2.8-6.4-6.4S8.5,5.6,12,5.6s6.4,2.8,6.4,6.4S15.5,18.4,12,18.4z"
    />
  </svg>
)

const GpsIcon = styled(Icon)([], space, color)

GpsIcon.displayName = 'GpsIcon'

GpsIcon.defaultProps = {
  size: 24
}

export default GpsIcon

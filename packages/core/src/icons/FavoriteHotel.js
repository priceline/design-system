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
      d="M12,20.9l-1.4-1.3C5.4,14.9,2,11.8,2,8c0-3.1,2.4-5.5,5.5-5.5c1.7,0,3.4,0.8,4.5,2.1
	c1.1-1.3,2.8-2.1,4.5-2.1C19.6,2.5,22,4.9,22,8c0,3.8-3.4,6.9-8.6,11.5L12,20.9z M9.7,10.7c0.8,0,1.4-0.6,1.4-1.4s-0.6-1.4-1.4-1.4
	C9,7.9,8.4,8.6,8.4,9.3S9,10.7,9.7,10.7z M15.2,7.9h-3.6v3.3H7.9V7H7v7h0.9v-1.4h8.2V14H17V9.8C17,8.8,16.2,7.9,15.2,7.9z"
    />
  </svg>
)

const FavoriteHotelIcon = styled(Icon)([], space, color)

FavoriteHotelIcon.displayName = 'FavoriteHotelIcon'

FavoriteHotelIcon.defaultProps = {
  size: 24
}

export default FavoriteHotelIcon

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
      d="M11,9H9V2H7v7H5V2H3v7c0,2.1,1.7,3.8,3.8,4v9h2.5v-9c2-0.2,3.7-1.9,3.7-4V2h-2V9z M16,6v8h2.5v8
	H21V2C18.2,2,16,4.2,16,6z"
    />
  </svg>
)

const RestaurantIcon = styled(Icon)([], space, color)

RestaurantIcon.displayName = 'RestaurantIcon'

RestaurantIcon.defaultProps = {
  size: 24
}

export default RestaurantIcon

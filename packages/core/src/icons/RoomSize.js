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
      d="M12,13H9.6v3L6,12l3.6-4v3H12h2.4V8l3.6,4l-3.6,4v-3H12z M3,3h18c0.6,0,1,0.4,1,1v16
	c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V4l0,0C2,3.4,2.4,3,3,3L3,3z M4,5v14h16V5H4z"
    />
  </svg>
)

const RoomSizeIcon = styled(Icon)([], space, color)

RoomSizeIcon.displayName = 'RoomSizeIcon'

RoomSizeIcon.defaultProps = {
  size: 24
}

export default RoomSizeIcon

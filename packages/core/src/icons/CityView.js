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
      d="M15,11.5v-6l-3-3l-3,3v2H3v14h18v-10H15z M7,19.5H5v-2h2V19.5z M7,15.5H5v-2h2V15.5z M7,11.5H5
	v-2h2V11.5z M13,19.5h-2v-2h2V19.5z M13,15.5h-2v-2h2V15.5z M13,11.5h-2v-2h2V11.5z M13,7.5h-2v-2h2V7.5z M19,19.5h-2v-2h2V19.5z
	 M19,15.5h-2v-2h2V15.5z"
    />
  </svg>
)

const CityViewIcon = styled(Icon)([], space, color)

CityViewIcon.displayName = 'CityViewIcon'

CityViewIcon.defaultProps = {
  size: 24
}

export default CityViewIcon

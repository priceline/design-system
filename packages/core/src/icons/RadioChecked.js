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
      d="M12,7c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S14.8,7,12,7z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10
	s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z"
    />
  </svg>
)

const RadioCheckedIcon = styled(Icon)([], space, color)

RadioCheckedIcon.displayName = 'RadioCheckedIcon'

RadioCheckedIcon.defaultProps = {
  size: 24
}

export default RadioCheckedIcon

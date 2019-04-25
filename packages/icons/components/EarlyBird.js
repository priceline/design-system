import React from 'react'
import Svg from './Svg'
export const SvgEarlyBird = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M19.1 14.9L22 12l-2.9-2.9V4.9H15L12 2 9.1 4.9H4.9V9L2 12l2.9 2.9V19H9l3 3 2.9-2.9H19v-4.2zM12 17.3c-2.9 0-5.3-2.4-5.3-5.3S9.1 6.7 12 6.7s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z" />
  </Svg>
)
SvgEarlyBird.isIcon = true
SvgEarlyBird.defaultProps = {
  size: 24
}
export default SvgEarlyBird

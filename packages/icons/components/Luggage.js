import React from 'react'
import Svg from './Svg'
export const SvgLuggage = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20 6.5h-4v-2c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zm-6 0h-4v-2h4v2z" />
  </Svg>
)
SvgLuggage.isIcon = true
SvgLuggage.defaultProps = {
  size: 24
}
export default SvgLuggage

import React from 'react'
import Svg from './Svg'
export const SvgCake = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 6a2 2 0 0 0 2-2 1.69 1.69 0 0 0-.3-1L12 0l-1.7 3a1.69 1.69 0 0 0-.3 1 2 2 0 0 0 2 2zm4.6 10l-1.1-1.1-1 1.1a3.57 3.57 0 0 1-4.9 0l-1.1-1.1L7.4 16A3.49 3.49 0 0 1 5 17a3.61 3.61 0 0 1-2-.6V21a1.08 1.08 0 0 0 1 1h16a1.08 1.08 0 0 0 1-1v-4.6a3.38 3.38 0 0 1-2 .6 3.5 3.5 0 0 1-2.4-1zM18 9h-5V7h-2v2H6a3 3 0 0 0-3 3v1.5a2 2 0 0 0 2 2 2 2 0 0 0 1.4-.6l2.1-2.1 2.1 2.1a2.13 2.13 0 0 0 2.8 0l2.1-2.1 2.1 2.1a2 2 0 0 0 1.4.6 2 2 0 0 0 2-2V12a3 3 0 0 0-3-3z" />
  </Svg>
)
SvgCake.isIcon = true
SvgCake.defaultProps = {
  size: 24
}
export default SvgCake

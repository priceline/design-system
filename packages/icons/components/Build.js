import React from 'react'
import Svg from './Svg'
export const SvgBuild = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M21.7 18.3L13.5 10c.8-2.1.4-4.6-1.4-6.3-1.8-1.8-4.5-2.2-6.7-1.2l3.9 3.9-2.7 2.8-4-3.9c-1.1 2.2-.7 4.9 1.2 6.7 1.7 1.7 4.2 2.2 6.3 1.4l8.3 8.3c.4.4.9.4 1.3 0l2.1-2.1c.3-.3.3-1-.1-1.3z" />
  </Svg>
)
SvgBuild.isIcon = true
SvgBuild.defaultProps = {
  size: 24
}
export default SvgBuild

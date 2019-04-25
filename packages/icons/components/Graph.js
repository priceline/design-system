import React from 'react'
import Svg from './Svg'
export const SvgGraph = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M3.5 18.5l6-6 4 4L22 6.9l-1.4-1.4-7.1 8-4-4L2 17l1.5 1.5z" />
  </Svg>
)
SvgGraph.isIcon = true
SvgGraph.defaultProps = {
  size: 24
}
export default SvgGraph

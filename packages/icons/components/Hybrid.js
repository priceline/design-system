import React from 'react'
import Svg from './Svg'
export const SvgHybrid = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M17 7.5c-9 2-11.1 8.2-13.2 13.3l1.9.7.9-2.3c.5.2 1 .3 1.4.3 11 0 14-17 14-17-1 2-8 2.2-13 3.2s-7 5.2-7 7.2 1.8 3.8 1.8 3.8C7 7.5 17 7.5 17 7.5z" />
  </Svg>
)
SvgHybrid.isIcon = true
SvgHybrid.defaultProps = {
  size: 24
}
export default SvgHybrid

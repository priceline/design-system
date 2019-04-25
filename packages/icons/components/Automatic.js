import React from 'react'
import Svg from './Svg'
export const SvgAutomatic = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm2.3-4.7H16L12.9 8h-1.7L8 15.3h1.7l.6-1.4h3.4l.6 1.4zm-3.5-2.7L12 9.7l1.2 2.8h-2.4v.1z" />
  </Svg>
)
SvgAutomatic.isIcon = true
SvgAutomatic.defaultProps = {
  size: 24
}
export default SvgAutomatic

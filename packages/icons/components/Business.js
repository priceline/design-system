import React from 'react'
import Svg from './Svg'
export const SvgBusiness = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M10 16v-1H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-7v1h-4zm10-9h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" />
  </Svg>
)
SvgBusiness.isIcon = true
SvgBusiness.defaultProps = {
  size: 24
}
export default SvgBusiness

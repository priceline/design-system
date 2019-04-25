import React from 'react'
import Svg from './Svg'
export const SvgGallery = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2 2.7 3-3.7 4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
  </Svg>
)
SvgGallery.isIcon = true
SvgGallery.defaultProps = {
  size: 24
}
export default SvgGallery

import React from 'react'
import Svg from './Svg'
export const SvgInformationOutline = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M11 17h2v-6h-2v6zm1-15C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM11 9h2V7h-2v2z" />
  </Svg>
)
SvgInformationOutline.isIcon = true
SvgInformationOutline.defaultProps = {
  size: 24
}
export default SvgInformationOutline

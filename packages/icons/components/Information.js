import React from 'react'
import Svg from './Svg'
export const SvgInformation = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </Svg>
)
SvgInformation.isIcon = true
SvgInformation.defaultProps = {
  size: 24
}
export default SvgInformation

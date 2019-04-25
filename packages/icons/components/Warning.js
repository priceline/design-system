import React from 'react'
import Svg from './Svg'
export const SvgWarning = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 11h-2V7h2v6zm0 4h-2v-2h2v2z" />
  </Svg>
)
SvgWarning.isIcon = true
SvgWarning.defaultProps = {
  size: 24
}
export default SvgWarning

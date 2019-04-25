import React from 'react'
import Svg from './Svg'
export const SvgCityView = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M15 11.5v-6l-3-3-3 3v2H3v14h18v-10h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5v-2h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
  </Svg>
)
SvgCityView.isIcon = true
SvgCityView.defaultProps = {
  size: 24
}
export default SvgCityView

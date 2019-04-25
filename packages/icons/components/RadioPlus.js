import React from 'react'
import Svg from './Svg'
export const SvgRadioPlus = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
  </Svg>
)
SvgRadioPlus.isIcon = true
SvgRadioPlus.defaultProps = {
  size: 24
}
export default SvgRadioPlus

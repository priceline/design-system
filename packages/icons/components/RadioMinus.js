import React from 'react'
import Svg from './Svg'
export const SvgRadioMinus = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M7 11v2h10v-2H7zm5-9C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
  </Svg>
)
SvgRadioMinus.isIcon = true
SvgRadioMinus.defaultProps = {
  size: 24
}
export default SvgRadioMinus

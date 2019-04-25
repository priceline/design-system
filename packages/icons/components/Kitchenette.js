import React from 'react'
import Svg from './Svg'
export const SvgKitchenette = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20 2H4c-.6 0-1 .4-1 1v3h18V3c0-.6-.4-1-1-1zM6 5c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm4 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm4 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm4 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zM3 20c0 .6.4 1 1 1h1v1h2v-1h10v1h2v-1h1c.6 0 1-.4 1-1V7H3v13zM7 8h10v1H7V8zm-2 2h14v9H5v-9z" />
  </Svg>
)
SvgKitchenette.isIcon = true
SvgKitchenette.defaultProps = {
  size: 24
}
export default SvgKitchenette

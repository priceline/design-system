import React from 'react'
import Svg from './Svg'
export const SvgDevices = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M5.4 6.8h15V5h-15c-.9 0-1.7.7-1.7 1.8v9.6H2V19h11.6v-2.6H5.4V6.8zm15.8 1.7h-5c-.5 0-.8.4-.8.8v8.8c0 .5.4.8.8.8h5c.5 0 .8-.4.8-.8V9.4c0-.5-.4-.9-.8-.9zm-.8 7.9H17v-6.2h3.4v6.2z" />
  </Svg>
)
SvgDevices.isIcon = true
SvgDevices.defaultProps = {
  size: 24
}
export default SvgDevices

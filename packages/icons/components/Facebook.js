import React from 'react'
import Svg from './Svg'
export const SvgFacebook = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M20.9 22H3.1c-.6 0-1.1-.5-1.1-1.1V3.1C2 2.5 2.5 2 3.1 2h17.8c.6 0 1.1.5 1.1 1.1v17.8c0 .6-.5 1.1-1.1 1.1zm-5.1 0v-7.7h2.6l.4-3h-3v-2c0-.9.2-1.5 1.5-1.5h1.6V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2h-2.6v3h2.6V22h3.1z" />
  </Svg>
)
SvgFacebook.isIcon = true
SvgFacebook.defaultProps = {
  size: 24
}
export default SvgFacebook

import React from 'react'
import Svg from './Svg'
export const SvgCarCircle = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm4.2 5.6c-.1-.3-.4-.6-.8-.6H8.6c-.4 0-.7.3-.8.6l-1.3 3.7v5c0 .3.3.6.6.6h.6c.3 0 .6-.3.6-.6v-.6h7.3v.6c0 .3.3.6.6.6h.6c.3 0 .6-.3.6-.6v-5l-1.2-3.7zm-7.6 6.3c-.5 0-.9-.4-.9-.9s.4-1 .9-1 .9.4.9.9-.4 1-.9 1zm6.8 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm-7.7-3.1L8.6 8h6.7l.9 2.8H7.7z" />
  </Svg>
)
SvgCarCircle.isIcon = true
SvgCarCircle.defaultProps = {
  size: 24
}
export default SvgCarCircle

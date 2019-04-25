import React from 'react'
import Svg from './Svg'
export const SvgTwitter = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M8.3 19.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-1.3-1.4-3.3-1.7-4.9-.8s-2.5 2.7-2.1 4.5c-3.3-.1-6.3-1.7-8.4-4.3-1.1 1.9-.5 4.3 1.3 5.5-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.6.2-1.2.2-1.9.1.5 1.7 2.1 2.8 3.8 2.8C6.6 17.3 4.8 18 3 18c-.3 0-.7 0-1-.1 1.9 1.2 4.1 1.9 6.3 1.9" />
  </Svg>
)
SvgTwitter.isIcon = true
SvgTwitter.defaultProps = {
  size: 24
}
export default SvgTwitter

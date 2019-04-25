import React from 'react'
import Svg from './Svg'
export const SvgMicrowave = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M21 5.5H3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h1v1h2v-1h12v1h2v-1h1c.6 0 1-.4 1-1v-10c0-.6-.4-1-1-1zm-6 10H4v-8h11v8zm2 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm0-3c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm0-3c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm3 6h-1v-8h1v8z" />
  </Svg>
)
SvgMicrowave.isIcon = true
SvgMicrowave.defaultProps = {
  size: 24
}
export default SvgMicrowave

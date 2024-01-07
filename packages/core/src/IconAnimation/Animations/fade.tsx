import { keyframes, css } from 'styled-components'

const animation = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`

export const fade = css`
  ${animation} 0.7s linear forwards
`

import { keyframes, css } from 'styled-components'

const animation = keyframes`
  from {color: inherit;}
  to {color: red;}
`

export const red = css`
  ${animation} 0.7s linear forwards
`

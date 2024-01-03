import { keyframes, css } from 'styled-components'

export const animation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

export const spin = css`
  ${animation} 1s linear forwards
`

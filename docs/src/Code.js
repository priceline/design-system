import styled from 'styled-components'
import { color, fontSize } from 'styled-system'

const Code = styled.code`
  font-family: 'Roboto Mono', monospace;
  ${color} ${fontSize};
`

Code.defaultProps = {
  fontSize: 1,
  color: 'darkBlue'
}

export default Code

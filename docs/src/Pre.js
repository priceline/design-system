import styled from 'styled-components'
import { space, color, borderRadius, propsTypes } from 'styled-system'

const Pre = styled.pre`
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  margin-bottom: 16px;
  overflow-x: auto;
  ${space} ${color} ${borderRadius};
`

Pre.defaultProps = {
  fontSize: 2,
  p: 3,
  borderRadius: 1,
  color: 'blue',
  bg: 'text'
}

export default Pre

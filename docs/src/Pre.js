import styled from 'styled-components'
import { space, color, borderRadius, propsTypes } from 'styled-system'

const Pre = styled.pre`
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  overflow-x: auto;
  ${space} ${color} ${borderRadius};
`

Pre.defaultProps = {
  px: 3,
  py: (40 - 21) / 2,
  borderRadius: 1,
  color: 'blue',
  bg: 'lightGray'
}

export default Pre

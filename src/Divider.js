import styled from 'styled-components'
import { space, width, borderColor, propTypes } from 'styled-system'

const Divider = styled.hr`
  ${space}
  ${width}
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  ${borderColor}
`

Divider.displayName = 'Divider'

Divider.propTypes = {
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.borderColor
}

export default Divider

import styled from 'styled-components'
import { color, fontSize, propTypes, space, textAlign } from 'styled-system'

const Label = styled.label`
  font-size: 10px;
  display: block;
  width: 100%;

  ${space} ${fontSize} ${color} ${textAlign};
`

Label.propTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color
}

Label.defaultProps = {
  fontSize: '10px'
}

export default Label

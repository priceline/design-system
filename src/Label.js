import styled from 'styled-components'
import { color, fontSize, propTypes, space, textAlign } from 'styled-system'
import theme from './theme'

const Label = styled.label`
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
  fontSize: '10px',
  theme: theme
}

export default Label

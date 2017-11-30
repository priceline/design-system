import styled from 'styled-components'
import { space, fontSize, color, propTypes } from 'styled-system'
import theme from './theme'

const Label = styled.label`
  font-size: 10px;
  display: block;
  width: 100%;

  ${space} ${fontSize} ${color};
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

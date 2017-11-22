import styled from 'styled-components'
import { space, fontSize, fontWeight, color, propTypes } from 'styled-system'
import theme from './theme'

const Label = styled.label`
  font-size: 10px;
  letter-spacing: 0.2px;
  display: block;
  width: 100%;

  ${space} ${fontSize} ${color} ${fontWeight};
`

Label.propTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color,
  ...propTypes.fontWeight
}

Label.defaultProps = {
  fontSize: '10px',
  fontWeight: 'bold',
  color: 'gray',
  theme: theme
}

Label.displayName = 'Label'

export default Label

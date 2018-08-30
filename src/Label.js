import styled from 'styled-components'
import { space, fontSize, fontWeight, color, propTypes } from 'styled-system'
import theme from './theme'

const nowrap = props =>
  props.nowrap
    ? {
        whiteSpace: 'nowrap'
      }
    : null

const accessiblyHide = props =>
  props.hidden
    ? {
        position: 'absolute',
        width: '1px',
        height: '1px',
        clip: 'rect(1px, 1px, 1px, 1px)'
      }
    : null

const Label = styled.label`
  letter-spacing: 0.2px;
  display: block;
  width: 100%;

  ${space} ${fontSize} ${color} ${fontWeight};
  ${nowrap}
  ${accessiblyHide}
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
  m: 0,
  color: 'gray',
  theme: theme
}

Label.displayName = 'Label'

export default Label

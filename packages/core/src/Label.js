import styled from 'styled-components'
import { space, fontSize, fontWeight, color } from 'styled-system'
import { getPaletteColor, deprecatedColorValue } from './utils'

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
  font-size: 10px;
  letter-spacing: 0.2px;
  display: block;
  width: 100%;
  margin: 0;
  color: ${getPaletteColor('base')};
  ${({ bg, color, ...props }) =>
    bg
      ? `background-color: ${getPaletteColor('base')({ color: bg, ...props })};`
      : ''}

  ${space} ${fontSize} ${fontWeight};
  ${nowrap}
  ${accessiblyHide}
`

Label.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  color: deprecatedColorValue(),
  ...fontWeight.propTypes
}

Label.defaultProps = {
  fontSize: '10px',
  fontWeight: 'bold',
  color: 'border.light'
}

Label.displayName = 'Label'
Label.isLabel = true

export default Label

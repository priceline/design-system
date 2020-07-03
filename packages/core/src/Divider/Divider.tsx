import styled from 'styled-components'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
} from '../utils'
import {
  space,
  width,
  borderColor,
  SpaceProps,
  WidthProps,
  BorderColorProps,
} from 'styled-system'
import { ColorProps } from '../@types/colorProps'

interface DividerProps
  extends SpaceProps,
    WidthProps,
    BorderColorProps,
    ColorProps {}

export const Divider = styled.hr<DividerProps>`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${(props) =>
    getPaletteColor(props.borderColor || props.color, 'base')(props)};
  ${space} ${width};
  ${applyVariations('Divider')}
` as React.FC<DividerProps>

Divider.displayName = 'Divider'

Divider.defaultProps = {
  color: 'border',
  ml: 0,
  mr: 0,
}

Divider.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...borderColor.propTypes,
  color: deprecatedColorValue(),
}

export default Divider

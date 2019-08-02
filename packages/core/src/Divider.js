import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getPaletteColor, deprecatedColorValue } from './utils'
import { space, width, borderColor } from 'styled-system'

const Divider = styled.hr`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${({ color, borderColor, ...props }) =>
      getPaletteColor('base')({ color: borderColor || color, ...props })}
    ${space} ${width};
`

Divider.displayName = 'Divider'

Divider.defaultProps = {
  color: 'border',
  ml: 0,
  mr: 0
}

Divider.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...borderColor.propTypes,
  color: deprecatedColorValue()
}

export default Divider

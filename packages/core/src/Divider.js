import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'
import { getPaletteColor } from './utils'
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
  theme: theme,
  ml: 0,
  mr: 0
}

Divider.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...borderColor.propTypes,
  color: PropTypes.string
}

export default Divider

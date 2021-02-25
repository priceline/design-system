import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import { getPaletteColor } from '../../utils'
import { Box } from '../../Box'

const getColor = ({ disabled }) => (disabled ? 'text.light' : 'base')

const getCursor = ({ disabled }) => (disabled ? 'default' : 'pointer')

const getBorderColor = (props) =>
  props.disabled ? 'transparent' : props.selected ? 'base' : 'border.base'

const getBackgroundColor = (props) =>
  props.disabled
    ? 'background.light'
    : props.selected
    ? 'light'
    : 'background.lightest'

const ChipContentWrapper = styled(Box)`
  ${(props) => `
    cursor: ${getCursor(props)};
    color: ${getPaletteColor(getColor(props))(props)};
    background-color: ${getPaletteColor(getBackgroundColor(props))(props)};
    border: 1px solid ${getPaletteColor(getBorderColor(props))(props)};
    ${
      !props.disabled &&
      `
      &:hover {
        border: 1px solid ${getPaletteColor('base')(props)};
        background-color: ${getPaletteColor('background.lightest')(props)};
      }
    `
    }
  `}
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  border-radius: 2px;
  ${space};
  ${fontSize};
`

export { ChipContentWrapper }

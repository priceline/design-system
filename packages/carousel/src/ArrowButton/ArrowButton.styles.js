import styled from 'styled-components'
import { getPaletteColor, Box } from 'pcln-design-system'

const defaultStyles = (props) => `
  padding: 0;
  background: ${getPaletteColor('background.lightest')(props)};
  border-radius: 100%;
  border: none;
  box-shadow: ${props.theme.shadows.md};
  color: ${getPaletteColor('primary.base')(props)};
  &:hover {
    background: ${getPaletteColor('background.base')(props)};
    color: ${getPaletteColor('primary.dark')(props)};
  }
`
const sideStyles = (props) =>
  props.position === 'side'
    ? `
    ${props.type == 'back' ? 'left' : 'right'}: -30px;
    position: absolute;
    top: 50%;
    margin-top: -30px
    z-index: 2;
    height: 60px;
    width: 60px;
    &:disabled {
      display: none;
    }
  `
    : null

const topBottomStyles = (props) =>
  props.position !== 'side'
    ? `
    width: 40px;
    height: 40px;
    &:disabled {
      opacity: 40%;
      color: ${getPaletteColor('border.base')(props)} !important;
      background: ${getPaletteColor('background.lightest')(props)} !important;
      box-shadow: ${props.theme.shadows.sm};
    }
  `
    : null

const Wrapper = styled(Box)`
  & > button {
    ${defaultStyles}
    ${topBottomStyles}
    ${sideStyles}
  }
`

export { Wrapper }

import styled from 'styled-components'
import { getPaletteColor, Box } from 'pcln-design-system'

const defaultStyles = (props) => `
  padding: 0;
  background: ${getPaletteColor(props.buttonBackground)(props)};
  border-radius: 100%;
  border: none;
  box-shadow: ${props.theme.boxShadows[1]};
  color: ${getPaletteColor(props.buttonColor)(props)};
  &:hover {
    background: ${getPaletteColor(props.buttonHoverBackground)(props)};
    color: ${getPaletteColor(props.buttonHoverColor)(props)};
  }
`

const sidePositionStyles = (props) =>
  props.position === 'side'
    ? `
    ${props.type == 'prev' ? 'left' : 'right'}: 0px;
    position: absolute;
    top: 50%;
    margin-top: -30px;
    z-index: 2;
    `
    : null

const sideStyles = (props) =>
  props.position === 'side'
    ? `
    ${props.type == 'prev' ? 'left' : 'right'}: 0px;
    height: ${props.buttonSize};
    width: ${props.buttonSize};
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
      box-shadow: ${props.theme.boxShadows[0]};
    }
  `
    : null

const Wrapper = styled(Box)`
  ${sidePositionStyles}
  & > button {
    ${defaultStyles}
    ${topBottomStyles}
    ${sideStyles}
  }
`

export { Wrapper }

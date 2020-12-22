import styled from 'styled-components'
import { space, fontSize, themeGet } from 'styled-system'
import PropTypes from 'prop-types'
import {
  applyVariations,
  getPaletteColor,
  borders,
  deprecatedColorValue,
} from '../utils'

const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  margin: 0;

  ::placeholder {
    color: ${getPaletteColor('text.light')};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space} ${fontSize};
  ${applyVariations('Input')}
`

Input.displayName = 'Input'
Input.isField = true
Input.defaultProps = {
  fontSize: [2, null, 1],
}
Input.propTypes = {
  id: PropTypes.string.isRequired,
  color: deprecatedColorValue(),
  ...borders.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
}

export default Input

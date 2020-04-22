import styled from 'styled-components'
import { space, themeGet } from 'styled-system'
import PropTypes from 'prop-types'
import {
  applyVariations,
  getPaletteColor,
  borders,
  deprecatedColorValue,
  mapProps,
  getSCMigrationRef,
  refPropType
} from './utils'

const TextArea = mapProps(({ dsRef, ...props }) => ({
  [getSCMigrationRef()]: dsRef,
  ...props
}))(styled.textarea`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: ${themeGet('fontSizes.1')}px;
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

  ${borders} ${space};
  ${applyVariations('TextArea')}
`)

TextArea.displayName = 'TextArea'
TextArea.isField = true
TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  color: deprecatedColorValue(),
  dsRef: refPropType,
  ...borders.propTypes,
  ...space.propTypes
}

export default TextArea

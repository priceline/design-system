import React from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import propTypes from '@styled-system/prop-types'
import { space, SpaceProps } from 'styled-system'
import PropTypes from 'prop-types'

import { applyVariations, getPaletteColor, borders, deprecatedColorValue } from '../utils'

const textAreaPropTypes = {
  id: PropTypes.string.isRequired,
  color: deprecatedColorValue(),
  ...propTypes.space,
}

export interface ITextAreaProps
  extends SpaceProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    React.RefAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<ITextAreaProps> & { isField: boolean } = styled.textarea`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: ${themeGet('fontSizes.1')}px;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('borderRadii.lg')};
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

  ${applyVariations('TextArea')}
  ${borders} ${space};
`

TextArea.displayName = 'TextArea'
TextArea.isField = true
TextArea.propTypes = textAreaPropTypes

export default TextArea

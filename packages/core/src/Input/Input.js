import React from 'react'
import styled from 'styled-components'
import { space, fontSize, themeGet } from 'styled-system'
import PropTypes from 'prop-types'
import { Text } from '..'
import {
  applyVariations,
  getPaletteColor,
  borders,
  deprecatedColorValue,
} from '../utils'

const StyledInput = styled.input`
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

export const Input = (props) => {
  const { helperText, color, ...restProps } = props
  const borderColor = (helperText && 'error.base') || color
  return (
    <>
      <StyledInput {...restProps} color={borderColor} />
      {helperText && (
        <Text mt={2} color='error.base'>
          {helperText}
        </Text>
      )}
    </>
  )
}

Input.displayName = 'Input'
Input.isField = true
Input.defaultProps = {
  fontSize: [2, null, 1],
}
Input.propTypes = {
  id: PropTypes.string.isRequired,
  color: deprecatedColorValue(),
  /**
   * Display text below the input and set error color on input
   */
  helperText: PropTypes.string,
  ...borders.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
}

export default Input

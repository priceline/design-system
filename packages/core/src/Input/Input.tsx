import React from 'react'
import styled from 'styled-components'
import { space, fontSize, borderRadius } from 'styled-system'
import PropTypes, { InferProps } from 'prop-types'
import { Text } from '../Text'
import { applyVariations, getPaletteColor, borders, deprecatedColorValue, borderRadiusAttrs } from '../utils'

const StyledInput = styled.input.attrs(borderRadiusAttrs)`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
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

  ${applyVariations('Input')}
  ${borders} ${space} ${fontSize} ${borderRadius};
`

const INPUT_ERROR_TEXT = 'InputHelperText'

const propTypes = {
  id: PropTypes.string.isRequired,
  color: deprecatedColorValue(),
  /**
   * Display text below the input and set error color on input
   */
  helperText: PropTypes.node,
  ...space.propTypes,
  ...fontSize.propTypes,
}

export const Input: React.Component<InferProps<typeof propTypes>> = React.forwardRef((props, ref) => {
  const { helperText, color, ...restProps } = props
  return (
    <>
      <StyledInput {...restProps} color={color} ref={ref} />
      {helperText &&
        React.cloneElement(helperText, {
          color: helperText?.props?.color || color,
        })}
    </>
  )
})

const HelperText = styled(Text).attrs(() => ({
  mt: 2,
  fontSize: 1,
}))``

Input.HelperText = (props) => <HelperText {...props}>{props.children}</HelperText>

Input.HelperText.displayName = INPUT_ERROR_TEXT

Input.displayName = 'Input'
Input.isField = true
Input.defaultProps = {
  fontSize: [2, null, 1],
  borderRadius: 'lg',
}
Input.propTypes = propTypes

export default Input
import React from 'react'
import styled, { css } from 'styled-components'
import { space, fontSize, borderRadius } from 'styled-system'
import PropTypes, { InferProps } from 'prop-types'
import { Text } from '../Text'
import {
  applyVariations,
  getPaletteColor,
  borders,
  deprecatedColorValue,
  borderRadiusAttrs,
  applySizes,
} from '../utils'

const sizes = {
  sm: css`
    padding: 6px 12px 7px 12px;
  `,
  md: css`
    padding: 10px 12px 11px 12px;
  `,
  lg: css`
    padding: 14px 12px 14px 12px;
  `,
  xl: css`
    padding: 18px 12px 19px 12px;
  `,
}

const StyledInput = styled.input.attrs(borderRadiusAttrs)`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  margin: 0;

  ::placeholder {
    color: ${getPaletteColor('text.light')};
  }

  ::-ms-clear {
    display: none;
  }

  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};
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
  size: PropTypes.oneOf(Object.keys(sizes)),
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
  size: 'lg',
}
Input.propTypes = propTypes

export default Input

import React from 'react'
import styled, { css } from 'styled-components'
import { space, fontSize, borderRadius, SpaceProps, FontSizeProps } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import { Text, ITextProps } from '../Text'
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
  color: ${getPaletteColor('text.base')};
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

const inputPropTypes = {
  id: PropTypes.string.isRequired,
  color: deprecatedColorValue(),
  /**
   * Display text below the input and set error color on input
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
  helperText: PropTypes.node,
  ...propTypes.space,
  ...propTypes.fontSize,
}

export interface IInputProps
  extends SpaceProps,
    FontSizeProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    React.RefAttributes<HTMLInputElement> {
  onChange?: (unknown) => unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  helperText?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  color?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  borderRadius?: string
}

export const Input: React.FC<IInputProps> & { isField?: boolean; HelperText?: React.FC<ITextProps> } =
  React.forwardRef((props: IInputProps, ref) => {
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
Input.propTypes = inputPropTypes

export default Input

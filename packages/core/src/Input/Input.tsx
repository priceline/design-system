import React from 'react'
import styled, { css } from 'styled-components'
import {
  space,
  fontSize,
  borderRadius,
  zIndex,
  SpaceProps,
  FontSizeProps,
  ZIndexProps,
  compose,
} from 'styled-system'
import { Text, type TextProps } from '../Text'
import { applyVariations, getPaletteColor, borders, borderRadiusAttrs, applySizes } from '../utils'

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
  position: relative;
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

  &:disabled {
    background-color: ${getPaletteColor('background.light')};
    color: ${getPaletteColor('text.light')};
    cursor: not-allowed;
  }

  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};
  ${applyVariations('Input')}
  ${borders}

  ${(props) => compose(space, fontSize, borderRadius, zIndex)(props)}
`

const INPUT_ERROR_TEXT = 'InputHelperText'

export type InputProps = SpaceProps &
  FontSizeProps &
  ZIndexProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  React.RefAttributes<HTMLInputElement> & {
    children?: React.ReactNode
    onChange?: (unknown) => unknown
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    helperText?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    color?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    borderRadius?: string
  }

export const Input: React.FC<InputProps> & {
  isField?: boolean
  HelperText?: React.FC<TextProps>
} = React.forwardRef((props: InputProps, ref) => {
  const { helperText, color, ...restProps } = props
  return (
    <>
      <StyledInput {...restProps} color={color} ref={ref} />
      {helperText &&
        React.cloneElement(helperText, {
          color: helperText.props.color || color,
        })}
    </>
  )
})

const HelperText: React.FC<InputHelperTextProps> = styled(Text).attrs(() => ({
  mt: 2,
  fontSize: 1,
}))``

export type InputHelperTextProps = TextProps & {
  children?: React.ReactNode
}

Input.HelperText = (props: InputHelperTextProps) => <HelperText {...props}>{props.children}</HelperText>

Input.HelperText.displayName = INPUT_ERROR_TEXT

Input.displayName = 'Input'
Input.isField = true
Input.defaultProps = {
  fontSize: [2, null, 1],
  borderRadius: 'lg',
  size: 'lg',
}

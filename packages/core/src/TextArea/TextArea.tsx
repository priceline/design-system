import themeGet from '@styled-system/theme-get'
import React, { type ComponentPropsWithRef } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { applyVariations, borders, getPaletteColor } from '../utils/utils'

/**
 * @public
 */
export type TextAreaProps = SpaceProps & ComponentPropsWithRef<'textarea'>

const StyledTextArea = styled.textarea<TextAreaProps>`
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

/**
 * A multi-line text input for longer form content.
 *
 * Renders a styled `<textarea>` with validation `color` states (primary, secondary,
 * warning, error). Use with Label for accessible form controls. Supports all
 * standard textarea attributes like `rows`, `placeholder`, and `maxLength`.
 *
 * @public
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => (
  <StyledTextArea ref={ref} {...props} />
)) as React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>> & {
  isField?: boolean
}
TextArea.displayName = 'TextArea'
TextArea.isField = true

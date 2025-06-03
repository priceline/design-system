import { RadioChecked, RadioEmpty } from 'pcln-icons'
import React, { type ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { type PaletteFamilyName } from '../theme/theme'
import { applyVariations, getPaletteColor } from '../utils/utils'

const RadioWrap = styled.div`
  display: inline-block;
  color: ${getPaletteColor('text.light')};
  cursor: ${(props) => (props.disabled ? `not-allowed` : `pointer`)};
  &:hover > svg {
    ${(props) => {
      if (props.checked && !props.disabled) {
        return `color: ${getPaletteColor('dark')(props)} !important;`
      }

      return props.disabled ? null : `color: ${getPaletteColor('base')(props)};`
    }};
  }
  ${applyVariations('Radio')}
`

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;

  & ~ svg {
    border: 1px solid transparent;
    border-radius: 50%;
    padding: 2px;
  }

  &:focus {
    box-shadow: none;
    & ~ svg {
      border: 1px solid ${getPaletteColor('border.base')};
      background-color: ${getPaletteColor('background.light')};
    }
  }
  &:checked ~ svg {
    color: ${getPaletteColor('base')};
  }
  &:disabled ~ svg {
    color: ${getPaletteColor('border.base')};
    cursor: not-allowed;
  }
`

const RadioCheckedIcon = styled(RadioChecked)`
  vertical-align: middle;
`
const RadioEmptyIcon = styled(RadioEmpty)`
  vertical-align: middle;
`

type RadioIconProps = {
  checked?: boolean
  size?: number
}

const RadioIcon = ({ checked, ...props }: RadioIconProps) => {
  return checked ? <RadioCheckedIcon {...props} /> : <RadioEmptyIcon {...props} />
}

/**
 * @public
 */
export type RadioProps = ComponentPropsWithoutRef<'input'> & {
  size?: number
  color?: PaletteFamilyName
}

/**
 * @public
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ color = 'primary', size = 24, ...props }, ref) => {
    const defaultedProps = { color, size, ...props }
    const { checked, disabled } = defaultedProps

    const borderAdjustedSize = size + 4

    const dataNameHelper = (checked, disabled) => {
      if ((checked && disabled) || (!checked && disabled)) {
        return 'disabled'
      }
      if (checked && !disabled) {
        return 'checked'
      }
      return 'unchecked'
    }

    return (
      <RadioWrap
        color={color}
        checked={checked}
        disabled={disabled}
        data-name={dataNameHelper(checked, disabled)}
      >
        <RadioInput type='radio' {...defaultedProps} ref={ref} />
        <RadioIcon checked={checked} size={borderAdjustedSize} />
      </RadioWrap>
    )
  }
)

Radio.displayName = 'Radio'

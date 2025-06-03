import { BoxChecked, BoxEmpty, BoxMinus } from 'pcln-icons'
import React, { type ComponentPropsWithRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { applyVariations, getPaletteColor } from '../utils/utils'

const CheckBoxWrapper = styled.div<CheckboxProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  padding: 2px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: inherit;
  color: ${(props) =>
    props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('border.dark')(props)};

  svg {
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 2px;
  }

  svg[data-name='checked'] {
    display: none;
  }
  svg[data-name='indeterminate'] {
    display: none;
  }

  ~ span {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  > input[data-indeterminate='true'] {
    & ~ svg[data-name='indeterminate'] {
      display: inline-block;
      color: ${(props) =>
        props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('base')(props)};
    }
    &:hover ~ svg[data-name='indeterminate'] {
      color: ${(props) =>
        props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('dark')(props)};
    }
    & ~ svg[data-name='empty'] {
      display: none;
    }
    & ~ svg[data-name='checked'] {
      display: none;
    }
  }

  > input:not([data-indeterminate='true']) {
    & ~ svg[data-name='empty'] {
      color: ${(props) =>
        props.disabled ? getPaletteColor('border.base') : getPaletteColor(props.unselectedColor)};
    }
    &:focus-visible ~ svg {
      border: 1px solid ${getPaletteColor('border.base')};
      background-color: ${getPaletteColor('background.light')};
    }
  }

  > input:checked:not([data-indeterminate='true']) {
    & ~ svg[data-name='checked'] {
      display: inline-block;
      color: ${(props) =>
        props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('base')(props)};
    }

    & ~ svg[data-name='empty'] {
      display: none;
    }

    &:focus-visible ~ svg {
      border: 1px solid ${getPaletteColor('base')};
      background-color: ${getPaletteColor('light')};
    }

    &:hover ~ svg[data-name='checked'] {
      color: ${(props) =>
        props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('dark')(props)};
    }
  }

  > input:hover ~ svg[data-name='empty'] {
    color: ${(props) =>
      props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('base')(props)};
  }

  ${applyVariations('Checkbox')}
`

const StyledInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
`

/**
 * @public
 */
export type CheckboxProps = ComponentPropsWithRef<'input'> & {
  id?: string
  indeterminate?: boolean
  size?: number
  color?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  unselectedColor?: string
}

/**
 * @public
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 20,
      indeterminate = false,
      color = 'primary',
      unselectedColor = 'text.light',
      disabled,
      onChange,
      defaultChecked,
      ...props
    },
    ref
  ) => {
    const spreadProps = {
      size,
      indeterminate,
      color,
      unselectedColor,
      disabled,
      onChange,
      defaultChecked,
      ...props,
    }
    const [showIndeterminate, setShowIndeterminate] = useState(indeterminate && !defaultChecked)

    function handleChange(e) {
      setShowIndeterminate(false)
      if (typeof onChange === 'function') {
        onChange(e)
      }
    }

    useEffect(() => {
      setShowIndeterminate(indeterminate)
    }, [indeterminate])

    // Add 4px to Icon's height and width to account for size reduction caused by adding padding to SVG element
    const borderAdjustedSize = size + 4
    return (
      <CheckBoxWrapper {...spreadProps}>
        <StyledInput
          type='checkbox'
          {...spreadProps}
          onChange={handleChange}
          aria-checked={showIndeterminate ? 'mixed' : props.checked}
          data-indeterminate={showIndeterminate}
          ref={ref}
        />
        <BoxChecked size={borderAdjustedSize} data-name='checked' />
        <BoxMinus size={borderAdjustedSize} data-name='indeterminate' />
        <BoxEmpty size={borderAdjustedSize} data-name='empty' />
      </CheckBoxWrapper>
    )
  }
)

Checkbox.displayName = 'Checkbox'

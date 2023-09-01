import { BoxChecked, BoxEmpty, BoxMinus } from 'pcln-icons'
import PropTypes, { InferProps } from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { applyVariations, deprecatedColorValue, getPaletteColor } from '../utils'

const propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  size: PropTypes.number,
  onChange: PropTypes.func,
  color: deprecatedColorValue(),
  unselectedColor: PropTypes.string,
}

export type CheckboxProps = InferProps<typeof propTypes> & {
  children?: React.ReactNode
  ref?: React.Ref<HTMLInputElement>
}

const CheckBoxWrapper = styled.div<CheckboxProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  padding: 2px;
  cursor: ${(props) => (props.disabled ? `default` : `pointer`)};
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
  > input:hover ~ svg[data-name='empty'] {
    color: ${(props) =>
      props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('base')(props)};
  }

  > input:not([data-indeterminate='true']) {
    & ~ svg[data-name='empty'] {
      color: ${(props) =>
        props.disabled ? getPaletteColor('border.base') : getPaletteColor(props.unselectedColor)};
    }
    &:focus ~ svg {
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

    &:focus ~ svg {
      border: 1px solid ${getPaletteColor('base')};
      background-color: ${getPaletteColor('light')};
    }

    &:hover ~ svg[data-name='checked'] {
      color: ${(props) =>
        props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('dark')(props)};
    }
  }

  ${applyVariations('Checkbox')}
`

const StyledInput = styled.input<CheckboxProps>`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
`

const Checkbox: React.FC<CheckboxProps> = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { disabled, size, indeterminate, unselectedColor, onChange, defaultChecked } = props

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
    <CheckBoxWrapper color={props.color} disabled={disabled} unselectedColor={unselectedColor}>
      <StyledInput
        type='checkbox'
        {...props}
        onChange={handleChange}
        role='checkbox'
        aria-checked={showIndeterminate ? 'mixed' : props.checked}
        data-indeterminate={showIndeterminate}
        ref={ref}
      />
      <BoxChecked size={borderAdjustedSize} data-name='checked' />
      <BoxMinus size={borderAdjustedSize} data-name='indeterminate' />
      <BoxEmpty size={borderAdjustedSize} data-name='empty' />
    </CheckBoxWrapper>
  )
})

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = propTypes
Checkbox.defaultProps = {
  size: 20,
  indeterminate: false,
  color: 'primary',
  unselectedColor: 'text.light',
}

export default Checkbox

import React, { useRef, useEffect } from 'react'
import styled, { withTheme } from 'styled-components'
import { BoxChecked, BoxEmpty, BoxMinus } from 'pcln-icons'
import PropTypes, { InferProps } from 'prop-types'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

const propTypes = {
  id: PropTypes.string.isRequired,
  indeterminate: PropTypes.bool,
  size: PropTypes.number,
  onChange: PropTypes.func,
  color: deprecatedColorValue(),
  unselectedColor: PropTypes.string,
}

const CheckBoxWrapper = styled.div`
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

  > input:indeterminate {
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

  > input {
    & ~ svg[data-name='empty'] {
      color: ${(props) =>
        props.disabled ? getPaletteColor('border.base') : getPaletteColor(props.unselectedColor)};
    }
    &:focus ~ svg {
      border: 1px solid ${getPaletteColor('border.base')};
      background-color: ${getPaletteColor('background.light')};
    }
  }

  > input:checked {
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

const StyledInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
`

const Checkbox: React.FC<InferProps<typeof propTypes>> = React.forwardRef((props, ref) => {
  const inputRef = useRef()

  useEffect(() => {
    // @ts-ignore
    inputRef.current.indeterminate = props.indeterminate
  }, [props.indeterminate])

  // eslint-disable-next-line react/prop-types
  const { disabled, size, indeterminate, unselectedColor } = props
  // Add 4px to Icon's height and width to account for size reduction caused by adding padding to SVG element
  const borderAdjustedSize = size + 4
  return (
    <CheckBoxWrapper
      // eslint-disable-next-line react/prop-types
      theme={props.theme}
      color={props.color}
      disabled={disabled}
      unselectedColor={unselectedColor}
    >
      <StyledInput
        type='checkbox'
        {...props}
        role='checkbox'
        aria-checked={props.indeterminate ? 'mixed' : props.checked}
        ref={(element: HTMLInputElement) => {
          if (indeterminate && element) {
            element.indeterminate = true
          }
          if (ref) {
            // @ts-ignore
            ref.current = element
          }
          // @ts-ignore
          inputRef.current = element
        }}
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

export default withTheme(Checkbox)

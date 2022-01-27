import React from 'react'
import styled, { withTheme } from 'styled-components'
import { BoxChecked, BoxEmpty } from 'pcln-icons'
import PropTypes, { InferProps } from 'prop-types'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

const propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  onChange: PropTypes.func,
  color: deprecatedColorValue(),
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
  
  > input:hover ~ svg[data-name='empty'] {
    color: ${(props) =>
      props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('base')(props)};
  }
  
  > input {
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
        props.disabled ? getPaletteColor('border.base')(props) : getPaletteColor('dark')(props)}
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
  // eslint-disable-next-line react/prop-types
  const { disabled, size } = props

  // Add 4px to Icon's height and width to account for size reduction caused by adding padding to SVG element
  const borderAdjustedSize = size + 4

  return (
    <CheckBoxWrapper
      // eslint-disable-next-line react/prop-types
      theme={props.theme}
      color={props.color}
      disabled={disabled}
    >
      <StyledInput type='checkbox' {...props} role='checkbox' ref={ref} />
      <BoxChecked size={borderAdjustedSize} data-name='checked' />
      <BoxEmpty size={borderAdjustedSize} data-name='empty' />
    </CheckBoxWrapper>
  )
})

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = propTypes
Checkbox.defaultProps = {
  size: 20,
  color: 'primary',
}

export default withTheme(Checkbox)

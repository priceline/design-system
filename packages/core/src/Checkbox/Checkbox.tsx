import React from 'react'
import styled from 'styled-components'
import { BoxChecked, BoxEmpty } from 'pcln-icons'
import { Box, BoxProps } from '../Box'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
  mapProps,
  getSCMigrationRef,
} from '../utils'

interface CheckboxProps
  extends Omit<BoxProps, 'width'>,
    RefProps,
    React.HTMLProps<HTMLInputElement> {
  size?: number
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
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
      <StyledInput type='checkbox' {...props} role='checkbox' />
      <BoxChecked size={borderAdjustedSize} data-name='checked' />
      <BoxEmpty size={borderAdjustedSize} data-name='empty' />
    </CheckBoxWrapper>
  )
}

interface WrapperProps extends BoxProps {
  disabled?: boolean
}

const CheckBoxWrapper = styled(Box)<WrapperProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  padding: 2px;
  cursor: pointer;
  background-color: inherit;
  color: ${(props) =>
    props.disabled
      ? getPaletteColor('border.base')(props)
      : getPaletteColor('border.light')(props)};

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
      props.disabled
        ? getPaletteColor('border.base')(props)
        : getPaletteColor('base')(props)};
      }
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
        props.disabled
          ? getPaletteColor('border.base')(props)
          : getPaletteColor('base')(props)};
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
        props.disabled
          ? getPaletteColor('border.base')(props)
          : getPaletteColor('dark')(props)}
  }

  ${applyVariations('Checkbox')}
` as React.FC<WrapperProps>

const StyledInput = mapProps(({ dsRef, ...props }) => ({
  [getSCMigrationRef()]: dsRef,
  ...props,
}))(styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
`)

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  color: deprecatedColorValue(),
}

Checkbox.defaultProps = {
  size: 20,
  color: 'primary',
}

export default Checkbox

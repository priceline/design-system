import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { applyVariations, deprecatedColorValue, getPaletteColor } from './utils'

const RadioWrap = styled.div`
  display: inline-block;
  color: ${getPaletteColor('border.base')};
  &:hover > svg {
    ${props => {
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
  }
`

const RadioIcon = styled(Icon)`
  vertical-align: middle;
`

const Radio = props => {
  const { checked, disabled, size } = props

  const radioIconName = checked ? 'radioChecked' : 'radioEmpty'

  const borderAdjustedSize = size + 4

  return (
    <RadioWrap color={props.color} checked={checked} disabled={disabled}>
      <RadioInput type="radio" {...props} />
      <RadioIcon name={radioIconName} size={borderAdjustedSize} />
    </RadioWrap>
  )
}

Radio.defaultProps = {
  color: 'primary',
  size: 24
}

Radio.propTypes = {
  color: deprecatedColorValue()
}

export default Radio

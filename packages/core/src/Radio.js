import React from 'react'
import styled from 'styled-components'
import theme from './theme'
import Icon from './Icon'

const RadioWrap = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.borderGray};
  &:hover > svg {
    ${props => {
      if (props.checked && !props.disabled) {
        return `color: ${props.theme.colors.darkBlue} !important;`
      }

      return props.disabled ? null : `color: ${props.theme.colors.blue};`
    }};
  }
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
      border: 1px solid ${theme.colors.borderGray};
      background-color: ${theme.colors.lightGray};
    }
  }
  &:checked ~ svg {
    color: ${props => props.theme.colors.blue};
  }
  &:disabled ~ svg {
    color: ${props => props.theme.colors.borderGray};
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
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput type="radio" {...props} />
      <RadioIcon name={radioIconName} size={borderAdjustedSize} />
    </RadioWrap>
  )
}

Radio.defaultProps = {
  theme: theme,
  size: 24
}

export default Radio

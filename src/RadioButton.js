import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Icon from './Icon'

const RadioButton = ({
  className,
  theme,
  onClick,
  isSelected,
  disabled,
  radioButtonText
}) => {
  const radioIconName = isSelected ? 'radioFilled' : 'radio'
  const radioIconColor = isSelected ? 'blue' : 'borderGray'

  function handleClick() {
    if (disabled || isSelected) return
    onClick()
  }

  return (
    <RadioButtonWrap
      className={className}
      onClick={handleClick}
      isSelected={isSelected}
      disabled={disabled}
      theme={theme}
    >
      <RadioIconWrap>
        <Icon name={radioIconName} size={24} color={radioIconColor} />
      </RadioIconWrap>
      <RadioButtonText>{radioButtonText}</RadioButtonText>
    </RadioButtonWrap>
  )
}

const RadioButtonWrap = styled.label`
  position: relative;
  cursor: ${props => (props.isSelected || props.disabled ? null : 'pointer')};

  font-weight: ${props => (props.isSelected ? '600' : '400')};

  &:hover {
    color: ${props =>
      props.isSelected || props.disabled ? null : props.theme.colors.blue};

    svg {
      fill: ${props =>
        props.isSelected || props.disabled ? null : props.theme.colors.blue};
    }
  }
`

const RadioIconWrap = styled.span`
  position: absolute;
  height: 24px;
  top: -2px;
`

const RadioButtonText = styled.span`
  padding-left: 32px;
`

export default RadioButton

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Icon from './Icon'
import Text from './Text'

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
      <Text.span pl={4}>{radioButtonText}</Text.span>
    </RadioButtonWrap>
  )
}

const RadioButtonWrap = styled.label`
  position: relative;
  cursor: ${props => (props.isSelected || props.disabled ? null : 'pointer')};

  font-weight: ${props =>
    props.isSelected ? props.theme.bold : props.theme.regular};

  ${props =>
    props.disabled ? `color: ${props.theme.colors.borderGray};` : null};

  &:hover {
    ${props =>
      props.isSelected || props.disabled
        ? null
        : `color: ${props.theme.colors.blue};`};

    svg {
      ${props =>
        props.isSelected || props.disabled
          ? null
          : `fill: ${props.theme.colors.blue};`};
    }
  }
`

const RadioIconWrap = styled.span`
  position: absolute;
  height: 24px;
  top: -2px;
`

export default RadioButton

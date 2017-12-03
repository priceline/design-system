import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Icon from './Icon'
import Text from './Text'
import Input from './Input'

const propTypes = {
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string
}

const RadioButton = ({
  className,
  onClick,
  isSelected,
  disabled,
  name,
  value
}) => {
  const radioIconName = isSelected ? 'radioFilled' : 'radio'
  const radioIconColor = isSelected ? 'blue' : 'borderGray'

  const testID = isSelected
    ? 'SELECTED'
    : disabled ? 'DISABLED' : 'NOT_SELECTED'

  function handleClick() {
    if (disabled || isSelected) return
    onClick()
  }

  return (
    <div
      className={className}
      onClick={handleClick}
      data-test-id={`RADIO_BUTTON_${testID}`}
    >
      <IconWrap isSelected={isSelected} disabled={disabled}>
        <Icon name={radioIconName} size={24} color={radioIconColor} />
      </IconWrap>
      <RadioInput type="radio" name={name} value={value} />
    </div>
  )
}

const IconWrap = styled.span`
  &:hover {
    svg {
      ${props =>
        props.isSelected || props.disabled
          ? null
          : `fill: ${props.theme.colors.blue};`};
    }
  }
`

const RadioInput = styled(Input)`
  visibility: hidden;
  display: inline;
`

RadioButton.propTypes = propTypes

export default RadioButton

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from './theme'
import Icon from './Icon'
import { getPaletteColor } from './utils'

const RadioWrap = styled.div`
  display: inline-block;
  color: ${getPaletteColor('border.base')};
  &:hover {
    ${props =>
      props.checked || props.disabled
        ? null
        : `color: ${getPaletteColor('base')(props)};`};
  }
`

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
  &:focus {
    box-shadow: none;
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
  const { checked, disabled } = props

  const radioIconName = checked ? 'radioChecked' : 'radioEmpty'

  return (
    <RadioWrap color={props.color} checked={checked} disabled={disabled}>
      <RadioInput type="radio" {...props} />
      <RadioIcon name={radioIconName} size={24} />
    </RadioWrap>
  )
}

Radio.defaultProps = {
  color: 'primary'
}

Radio.propTypes = {
  color: PropTypes.string
}

export default Radio

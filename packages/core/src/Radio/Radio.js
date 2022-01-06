import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RadioChecked, RadioEmpty } from 'pcln-icons'
import { applyVariations, deprecatedColorValue, getPaletteColor } from '../utils'

const RadioWrap = styled.div`
  display: inline-block;
  color: ${getPaletteColor('border.base')};
  &:hover > svg {
    ${(props) => {
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

const RadioCheckedIcon = styled(RadioChecked)`
  vertical-align: middle;
`
const RadioEmptyIcon = styled(RadioEmpty)`
  vertical-align: middle;
`
const RadioIcon = ({ checked, ...props }) => {
  return checked ? <RadioCheckedIcon {...props} /> : <RadioEmptyIcon {...props} />
}
RadioIcon.propTypes = {
  checked: PropTypes.bool,
}

const Radio = React.forwardRef((props, ref) => {
  const { checked, disabled, size } = props

  const borderAdjustedSize = size + 4

  return (
    <RadioWrap color={props.color} checked={checked} disabled={disabled}>
      <RadioInput type='radio' {...props} ref={ref} />
      <RadioIcon checked={checked} size={borderAdjustedSize} />
    </RadioWrap>
  )
})

Radio.displayName = 'Radio'
Radio.propTypes = {
  color: deprecatedColorValue(),
  size: PropTypes.number,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
}
Radio.defaultProps = {
  color: 'primary',
  size: 24,
}

export default Radio

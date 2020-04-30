import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RadioChecked, RadioEmpty } from 'pcln-icons'
import {
  applyVariations,
  deprecatedColorValue,
  getPaletteColor,
  refPropType,
  getSCMigrationRef
} from './utils'

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

const RadioCheckedIcon = styled(RadioChecked)`
  vertical-align: middle;
`
const RadioEmptyIcon = styled(RadioEmpty)`
  vertical-align: middle;
`
const RadioIcon = ({ checked, ...props }) => {
  return checked ? (
    <RadioCheckedIcon {...props} />
  ) : (
    <RadioEmptyIcon {...props} />
  )
}

const Radio = props => {
  const { checked, disabled, size } = props

  const borderAdjustedSize = size + 4

  // TODO remove once migrated to SC4
  const spreadProps = { ...props }
  spreadProps[getSCMigrationRef()] = props.dsRef
  delete spreadProps.dsRef

  return (
    <RadioWrap color={props.color} checked={checked} disabled={disabled}>
      <RadioInput type="radio" {...spreadProps} />
      <RadioIcon checked={checked} size={borderAdjustedSize} />
    </RadioWrap>
  )
}

Radio.defaultProps = {
  color: 'primary',
  size: 24
}

Radio.propTypes = {
  color: deprecatedColorValue(),
  dsRef: refPropType,
  size: PropTypes.number
}

export default Radio

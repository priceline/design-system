// @ts-nocheck

import React from 'react'
import { Box, IBoxProps } from '../Box'
import { IconField } from '../IconField'

export interface IFormFieldProps extends IBoxProps {}

const paddingTopWithLabel = {
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
}
const paddingBottomWithLabel = {
  sm: '0px',
  md: '5px',
  lg: '8px',
  xl: '13px',
}
const paddingTopForLabel = {
  sm: '0px',
  md: '2px',
  lg: '6px',
  xl: '10px',
}

const inputPaddingTop = (size) => {
  return paddingTopWithLabel?.[size] ? paddingTopWithLabel[size] : '20px'
}
const inputPaddingBottom = (size) => {
  return paddingBottomWithLabel?.[size] ? paddingBottomWithLabel[size] : '8px'
}
const labelPaddingTop = (size) => {
  return paddingTopForLabel?.[size] ? paddingTopForLabel[size] : '6px'
}

const FormField = ({ children, ...props }: IFormFieldProps) => {
  let iconBefore = false

  const childrenArray = React.Children.toArray(children)
  const [field] = childrenArray.filter((child) => child.type.isField)
  const [label] = childrenArray.filter((child) => child.type.isLabel)
  const valueNoLabel = !label && field && !!field.props.value
  const showLabel = ((label && !label.props.autoHide) || (field && !!field.props.value)) && !valueNoLabel
  const id = field && (field.props.id || field.props.name)
  const inputSize = field && (field.props.size || undefined)

  const styled = childrenArray.map((child, i, arr) => {
    if (child.type.isField && arr[i - 1] && arr[i - 1].type.isIcon) {
      iconBefore = true
    }
    if (child === field) {
      return React.cloneElement(child, {
        id,
        style: {
          ...child.props.style,
          transitionProperty: 'padding-top, padding-bottom',
          transitionDuration: '.1s',
          paddingTop: showLabel ? inputPaddingTop(inputSize) : undefined,
          paddingBottom: showLabel ? inputPaddingBottom(inputSize) : undefined,
        },
      })
    }
    return child
  })

  const ml = iconBefore ? '40px' : '12px'

  const styledLabel =
    label &&
    React.cloneElement(label, {
      htmlFor: label.props.htmlFor || id,
      fontSize: 10,
      ml,
      pt: labelPaddingTop(inputSize),
      mb: '-20px',
      style: {
        ...label.props.style,
        height: 20,
        transitionProperty: 'opacity',
        transitionDuration: '.1s',
        opacity: showLabel ? 1 : 0,
        pointerEvents: 'none',
        position: 'relative',
        width: `calc(100% - ${ml})`,
      },
    })

  return (
    <Box {...props}>
      {styledLabel}
      <IconField>{styled}</IconField>
    </Box>
  )
}

FormField.displayName = 'FormField'

export default FormField

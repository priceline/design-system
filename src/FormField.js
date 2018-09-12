import React from 'react'
import PropTypes from 'prop-types'
import Flex from './Flex'
import IconField from './IconField'

const FormField = props => {
  let iconBefore = false

  const children = React.Children.toArray(props.children)
  const [field] = children.filter(child => child.type.isField)
  const showLabel = props.showLabel || (field && !!field.props.value)

  const styled = children.map((child, i, arr) => {
    if (child.type.isField && arr[i - 1] && arr[i - 1].type.isIcon)
      iconBefore = true
    if (child === field) {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          transitionProperty: 'padding-top, padding-bottom',
          transitionDuration: '.1s',
          paddingTop: showLabel ? 20 : 14,
          paddingBottom: showLabel ? 8 : 14
        }
      })
    }
    return child
  })

  const [label] = children.filter(child => child.type.isLabel).map(label =>
    React.cloneElement(label, {
      fontSize: 10,
      ml: iconBefore ? '40px' : '12px',
      pt: '6px',
      mb: '-20px',
      style: {
        ...label.props.style,
        height: 20,
        transitionProperty: 'opacity',
        transitionDuration: '.1s',
        opacity: showLabel ? 1 : 0
      }
    })
  )

  return (
    <div>
      {label}
      <IconField>{styled}</IconField>
    </div>
  )
}

const childrenPropType = (props, propName, componentName) => {
  const children = React.Children.toArray(props.children)
  const [label] = children.filter(child => child.type.isLabel)
  const [field] = children.filter(child => child.type.isField)
  if (!field) {
    return new Error(
      `No form field found for ${componentName}. Please include an Input, Select, or other form field as a child.`
    )
  }
  if (!label) {
    return new Error(
      `No label found for ${componentName}. Please include a Label as a child.`
    )
  }
}

FormField.propTypes = {
  showLabel: PropTypes.bool,
  children: childrenPropType
}

FormField.displayName = 'FormField'

export default FormField

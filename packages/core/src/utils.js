import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { themeGet } from 'styled-system'

export const mapProps = map => Component =>
  hoistStatics(props => <Component {...map(props)} />, Component)

// Use this to mark props as deprecated
export const deprecatedPropType = replacement => (
  props,
  propName,
  componentName
) => {
  if (props[propName]) {
    return new Error(
      `The \`${propName}\` prop is deprecated and will be removed in a future release. Please use \`${replacement}\` instead.`
    )
  }
}

/**
 * Applies the selected variant style to a styled component.
 * Combines the variant style with any custom styling from
 * theme.componentStyles[component][variant]
 *
 * Once updated to styled-components v4, componentName is no
 * longer needed as it is part of forwardedClass.displayName
 *
 * @param {string}  componentName The name of the component
 * @param {Object=} variants      An object of variant styles
 *
 * @returns Array
 */
export const applyVariant = (componentName, variants = null) => props => {
  if (variants) {
    return (variants[props.variant] || []).concat(
      themeGet(`componentStyles.${componentName}.${props.variant}`, [])(props)
    )
  }

  return themeGet(`componentStyles.${componentName}`, {})(props)
}

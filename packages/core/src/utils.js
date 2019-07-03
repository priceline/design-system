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

export const getVariantStyle = component => props =>
  themeGet(
    'componentStyles.' +
      component +
      props.variant.charAt(0).toUpperCase() +
      props.variant.slice(1)
  )(props)

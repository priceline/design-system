import React from 'react'
import upperFirst from 'lodash.upperfirst'
import * as icons from './index'

const Icon = ({ name, ...props }) => {
  const Component = icons[name] || icons[upperFirst(name)]
  if (!Component) return false
  return <Component {...props} />
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  name: (props, key, componentName) => {
    const name = props[key]
    if (!icons[name] && !icons[upperFirst(name)]) {
      return new Error(
        `Unknown name prop \`${name}\` supplied to \`${componentName}\``
      )
    } else if (!icons[name]) {
      return new Error(
        `Icon name prop should be uppercase.\n` +
          `Use \`${upperFirst(name)}\` instead of ${name}.`
      )
    }
  }
}

export default Icon

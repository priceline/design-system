import React from 'react'
import upperFirst from 'lodash.upperfirst'
import * as icons from './icons'

const aliases = {
  ac: 'AcUnit'
}

const Icon = ({ name, ...props }) => {
  const key = upperFirst(name)
  const Component = icons[name] || icons[key] || icons[aliases[name]]
  if (!Component) return false
  return <Component {...props} />
}

Icon.displayName = 'Icon'

export default Icon

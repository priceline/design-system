import React from 'react'
import * as icons from './icons'

const Icon = ({ name, ...props }) => {
  const Component = icons[name]
  if (!Component) return false
  return <Component {...props} />
}

Icon.displayName = 'Icon'

export default Icon

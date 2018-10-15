const { getProps } = require('@svgr/core')

const template = (code, config, state) => {
  return `import React from 'react'
import Svg from './Svg'

const ${state.componentName} = props =>
  <Svg viewBox='0 0 24 24' {...props}>
    ${code}
  </Svg>

export default ${state.componentName}
  `
}

module.exports = {
  template,
  expandProps: false,
  svgoConfig: {
    plugins: [
      {
        removeAttrs: { attrs: '(fill|width|height)' }
      }
    ]
  }
}

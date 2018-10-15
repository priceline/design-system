const { getProps } = require('@svgr/core')

const template = (code, config, state) => {
  const props = getProps(config)

  return `import React from 'react'
import Svg from './Svg'

const ${state.componentName} = ${props} =>
  <Svg {...props}>
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
        removeAttrs: { attrs: '(fill)' }
      }
    ]
  }
}

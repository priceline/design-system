const template = (code, config, state) => `import React from 'react'
import Svg from './Svg'

export const ${state.componentName} = props =>
  <Svg {...props}>
    ${code}
  </Svg>

export default ${state.componentName}`

module.exports = {
  template,
  expandProps: false,
  svgoConfig: {
    plugins: [{ removeAttrs: { attrs: 'fill' } }]
  }
}

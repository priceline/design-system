const template = (code, config, state) => `import React from 'react'
import Svg from './Svg'

export const ${state.componentName} = ({
  size,
  ...props
}) =>
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'>
    ${code}
  </Svg>

${state.componentName}.isIcon = true

${state.componentName}.defaultProps = {
  size: 24
}

export default ${state.componentName}`

module.exports = {
  template,
  expandProps: false,
  dimensions: false,
  svgoConfig: {
    plugins: {
      removeAttrs: { attrs: '(fill|viewBox)' }
    }
  },
  prettierConfig: {
    semi: false,
    singleQuote: true
  }
}

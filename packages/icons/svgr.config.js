const dynamicTitlePlugin = require('./plugins/svg-dynamic-title-plugin')

const replaceSvgPlugin = require('./plugins/svg-replace-plugin')

const template = (
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) => template.ast`import React from 'react'
import Svg from './Svg'
import styled from 'styled-components'

const BaseComponent = ({
  size,
  title,
  desc,
  titleId,
  descId,
  ...props
}) => (
  ${jsx}
)

const showOutline = ({ focusable, tabIndex }) => {
  if (focusable === 'true' && parseInt(tabIndex, 10) >= 0){
    return ''
  }
  else {
    return 'outline: none;'
  }
}

export const ${componentName} = styled(BaseComponent)\`
  \$\{props => showOutline(props)\}
\`

${componentName}.isIcon = true

${componentName}.defaultProps = {
  size: 24,
  'aria-hidden': 'true',
  'focusable': 'false',
  tabIndex: '-1'
}

export default ${componentName}`

module.exports = {
  template,
  jsx: {
    babelConfig: {
      plugins: [replaceSvgPlugin, dynamicTitlePlugin]
    }
  },
  svgProps: {
    viewBox: '0 0 24 24',
    height: '{size}',
    width: '{size}',
    fill: 'currentcolor'
  },
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

const replaceSvgPlugin = ({ types: t }) => {
  const replaceSvg = {
    JSXElement(path) {
      if (!path.get('openingElement.name').isJSXIdentifier({ name: 'svg' })) {
        return
      }
      const openingElementName = path.get('openingElement.name')
      openingElementName.replaceWith(t.jsxIdentifier('Svg'))
      if (path.has('closingElement')) {
        const closingElementName = path.get('closingElement.name')
        closingElementName.replaceWith(t.jsxIdentifier('Svg'))
      }
    }
  }

  return {
    visitor: {
      Program(path) {
        path.traverse(replaceSvg)
      }
    }
  }
}

const template = (
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) => template.ast`import React from 'react'
import Svg from './Svg'

export const ${componentName} = ({
  size,
  ...props
}) => (
  ${jsx}
)

${componentName}.isIcon = true

${componentName}.defaultProps = {
  size: 24
}

export default ${componentName}`

module.exports = {
  template,
  jsx: {
    babelConfig: {
      plugins: [replaceSvgPlugin]
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

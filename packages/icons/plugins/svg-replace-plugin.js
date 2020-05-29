//Replace <svg> tag with <Svg>
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
    },
  }

  return {
    visitor: {
      Program(path) {
        path.traverse(replaceSvg)
      },
    },
  }
}

module.exports = replaceSvgPlugin

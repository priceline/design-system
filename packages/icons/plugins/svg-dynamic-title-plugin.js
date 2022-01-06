// Plugin to add <title> and <desc> to SVG elements
const elements = ['svg', 'Svg']

const dynamicTitlePlugin = ({ types: t }) => {
  const addTitle = {
    JSXElement(path) {
      if (!elements.some((element) => path.get('openingElement.name').isJSXIdentifier({ name: element }))) {
        return
      }

      //Remove the Default <title> and <desc> tags if exists
      path.get('children').forEach((childPath) => {
        if (
          childPath.isJSXElement() &&
          (childPath.node.openingElement.name.name === 'title' ||
            childPath.node.openingElement.name.name === 'desc')
        ) {
          childPath.remove()
        }
      })
      const titleElement = t.jsxExpressionContainer(
        t.identifier('!!title && (<title id={titleId}>{title}</title>)')
      )
      const descElement = t.jsxExpressionContainer(
        t.identifier('!!desc && (<desc id={descId}>{desc}</desc>)')
      )
      path.node.children.unshift(descElement)
      path.node.children.unshift(titleElement)
    },
  }

  return {
    visitor: {
      Program(path) {
        path.traverse(addTitle)
      },
    },
  }
}

module.exports = dynamicTitlePlugin

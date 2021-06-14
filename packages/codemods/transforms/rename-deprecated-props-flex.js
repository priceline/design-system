import get from 'lodash.get'

const update = (path) => {
  const Node = path.value

  // Dumb way to skip text elements since they also can have an align prop
  if (
    get(Node, 'openingElement.name.name', '').toLowerCase().includes('text')
  ) {
    return
  }

  Node.openingElement.attributes
    .filter((obj) => {
      // console.log(obj.name)
      return ['wrap', 'align', 'justify'].includes(obj.name && obj.name.name)
    })
    .forEach((item) => {
      switch (item.name.name) {
        case 'align': {
          item.name.name = 'alignItems'
          break
        }
        case 'wrap': {
          item.name.name = 'flexWrap'
          break
        }
        case 'justify': {
          item.name.name = 'justifyContent'
          break
        }
      }
    })
}

module.exports = function (file, api) {
  const j = api.jscodeshift

  const root = j(file.source)

  return root.find(j.JSXElement).forEach(update).toSource()
}

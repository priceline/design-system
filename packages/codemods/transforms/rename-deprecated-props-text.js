const update = (path) => {
  const Node = path.value

  Node.openingElement.attributes
    .filter((obj) => ['align'].includes(obj.name && obj.name.name))
    .forEach((item) => {
      // Only make change if fullWidth is true
      if (item.name.name === 'align') {
        item.name.name = 'textAlign'
      }
    })
}

module.exports = function (file, api) {
  const j = api.jscodeshift

  const root = j(file.source)

  return root.find(j.JSXElement).forEach(update).toSource()
}

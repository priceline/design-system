const update = (path) => {
  const Node = path.value

  Node.openingElement.attributes
    .filter((obj) => {
      // console.log(obj.name)
      return ['variation'].includes(obj.name && obj.name.name)
    })
    .forEach((item) => {
      if (
        item.value &&
        item.value.expression &&
        item.value.expression.value === 'solid'
      ) {
        item.value.expression.value = 'fill'
      }
    })
}

module.exports = function (file, api){
  const j = api.jscodeshift

  const root = j(file.source)

  return root.find(j.JSXElement).forEach(update).toSource()
}

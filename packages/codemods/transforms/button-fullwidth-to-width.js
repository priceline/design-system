const update = (path) => {
  const Node = path.value

  Node.openingElement.attributes
    .filter((obj) => obj.name.name === 'fullWidth')
    .forEach((item) => {
      // Only make change if fullWidth is true
      if (item.value.expression.value) {
        item.name.name = 'width'
        item.value.expression.value = 1
      }
    })
}

module.exports = function (file, api) {
  const j = api.jscodeshift

  const root = j(file.source)

  return (
    root
      // Todo handle styled(Button) components
      .findJSXElements('Button')
      .forEach(update)
      .toSource()
  )
}

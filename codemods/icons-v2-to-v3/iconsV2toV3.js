module.exports = function (fileInfo, api, options) {
  // Sample:
  // import Dollar from 'pcln-icons/lib/Dollar'
  // import Dollar from "pcln-icons/lib/Dollar";
  // import DollarIcon from 'pcln-icons/lib/Dollar'

  const importRegex = /import (?<iconName>\w+) from ['"]pcln-icons\/lib\/(?<moduleName>\w+)['"];?\n?/
  const foundIcons = []

  let out = fileInfo.source.replace(RegExp(importRegex, 'g'), (replace) => {
    // regex should not use global mode here
    const match = importRegex.exec(replace)

    if (match) {
      // delete the old import statement line
      foundIcons.push(match.groups)
      return ``
    }
  })

  if (foundIcons.length) {
    // handle default imports that don't match the module name
    const imports = foundIcons.map(({ iconName, moduleName }) => {
      return iconName !== moduleName
        ? `${moduleName} as ${iconName}`
        : moduleName
    })

    // create combined import statement
    const newImport = `import { ${imports.join(', ')} } from 'pcln-icons'`

    // choose anchor; prefer pcln-design-system, but fall back to react
    let anchor = /from ['"]pcln-design-system['"];?\n?/
    if (!out.match(anchor)) {
      anchor = /from ['"]react['"];?\n?/
    }

    // insert combined import below anchor
    out = out.replace(
      RegExp(anchor, 'g'),
      (replace) => `${replace}${newImport}\n`
    )
  }

  return out
}

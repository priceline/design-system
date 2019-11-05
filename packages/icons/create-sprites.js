const fs = require('fs')
const path = require('path')

const dirname = path.join(__dirname, './svg')
const icons = fs
  .readdirSync(dirname)
  .filter(filename => /\.svg$/.test(filename))
  .map(filename => path.basename(filename, '.svg'))

const template = icons => {
  const namedIconLines = icons.map(name => `import './svg/${name}.svg'`)
  const lines = [...namedIconLines]

  return lines.join('\n')
}

const content = template(icons)
const filename = path.join(__dirname, './src/generateSprite.js')

fs.writeFileSync(filename, content)

const fs = require('fs')
const path = require('path')

const dirname = path.join(__dirname, './components')
const icons = fs
  .readdirSync(dirname)
  .filter(filename => /\.js$/.test(filename))
  .map(filename => path.basename(filename, '.js'))

const template = icons => {
  icons.map(name => `export { default as ${name} } from './${name}'`)
  const lines = [`export { default as Icon } from './Icon'`, ...icons]
  const output = lines.join('\n')

  return output
}

const content = template(icons)
const filename = path.join(__dirname, './src/index.js')

fs.writeFileSync(filename, content)

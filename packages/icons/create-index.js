const fs = require('fs')
const path = require('path')

const dirname = path.join(__dirname, './components')
const icons = fs
  .readdirSync(dirname)
  .filter((filename) => /\.js$/.test(filename))
  .map((filename) => path.basename(filename, '.js'))

const template = (icons) => {
  const iconsToExport = icons
    // Don't include a line for the index file itself, since it's also in the components folder
    .filter((name) => name !== 'index')
    .map((name) => `export { default as ${name} } from './${name}'`)
  iconsToExport.push(`export { default as Icon } from './Icon'\n`)
  return iconsToExport.join('\n')
}

const content = template(icons)
const filename = path.join(__dirname, './src/index.js')

fs.writeFileSync(filename, content)

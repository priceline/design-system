#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const readdir = require('recursive-readdir')
const camelCase = require('lodash.camelcase')
const upperFirst = require('lodash.upperfirst')
const uniqBy = require('lodash.uniqby')
const iconList = require('./icons')

const mdPkg = path.join(__dirname, './node_modules/material-design-icons')
const pclnSVGs = path.join(__dirname, './svg/pcln')
const mdOutDir = path.join(__dirname, './svg/md')

const ignore = (file, stats) => {
  if (stats.isDirectory()) return false
  // ignore svg/design directories
  if (file === 'design') return true
  return !/\.svg$/.test(file)
}

const is24px = filename => /24px.svg$/.test(filename)

const rename = filename =>
  path
    .basename(filename, path.extname(filename))
    .replace(/^ic_/, '')
    .replace(/_24px$/, '')
    .replace(/^3d/, 'three-d') // remove number from beginning

const readFile = filename => {
  const content = fs.readFileSync(filename, 'utf8')
  const name = rename(filename)
  const capitalName = upperFirst(camelCase(name))
  return {
    filename,
    name,
    capitalName,
    content
  }
}

const writeFile = ({ name, content }) => {
  const filename = path.join(mdOutDir, name + '.svg')
  fs.writeFileSync(filename, content)
}

const docTemplate = ({ md, pcln }) => `
## Material Design Icons (${md.length})

${md.map(name => `- \`${name}\``).join('\n')}

## Priceline Icons (${pcln.length})

${pcln.map(name => `- \`${name}\``).join('\n')}
`

const createFile = (name, template) => context => {
  const filename = path.join(__dirname, './' + name)
  const content = template(context)
  fs.writeFileSync(filename, content)
}

const barrelTemplate = icons =>
  icons.map(name => `export { default as ${name} } from './${name}'`).join('\n')

const build = async () => {
  const files = await readdir(mdPkg, [ignore])
  const icons = uniqBy(files, file => path.basename(file))
    .filter(is24px)
    .filter(filename => {
      const name = upperFirst(camelCase(rename(filename)))
      return iconList.md.includes(name)
    })
    .map(readFile)
    .sort((a, b) => (a.name < b.name ? -1 : 1))

  if (!fs.existsSync(mdOutDir)) fs.mkdirSync(mdOutDir)

  icons.forEach(writeFile)

  createFile('ICONS.md', docTemplate)(iconList)
  createFile('src/icons.js', barrelTemplate)(iconList.all)
}

build()

const svgr = require('@svgr/rollup').default
const svgSprite = require('rollup-plugin-svg-sprite')

const config = require('../../rollup.config')

config.plugins.push(svgr())
config.plugins.push(
  svgSprite({
    outputFolder: 'dist/public'
  })
)

module.exports = config

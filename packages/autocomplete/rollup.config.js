const rollupConfig = require('../../rollup.config')
rollupConfig.external.push('react-is')

module.exports = rollupConfig

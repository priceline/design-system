const rollupConfig = require('../../rollup.config')
rollupConfig.external.push('pcln-icons')
rollupConfig.external.push('pcln-slider')
module.exports = rollupConfig

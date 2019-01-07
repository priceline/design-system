const rollupConfig = require('../../rollup.config')
rollupConfig.external.push('pcln-design-system')
rollupConfig.external.push('pcln-icons')
module.exports = rollupConfig

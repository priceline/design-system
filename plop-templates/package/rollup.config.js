// This refers to the Rollup config at the root of design-system
const rollupConfig = require('../../rollup.config')
rollupConfig.external.push('pcln-design-system')
module.exports = rollupConfig

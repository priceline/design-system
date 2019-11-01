const fs = require('fs')

const analyze = require('rollup-plugin-analyzer')
const visualize = require('rollup-plugin-visualizer')

const rollupConfig = require('./rollup.config')

rollupConfig.plugins.push(
  analyze({
    showExports: true,
    summaryOnly: true,
    filter: module => {
      const zeroBytes = module.size === 0

      return !zeroBytes
    },
    onAnalysis: analysis => {
      fs.writeFileSync(
        'rollup.bundleAnalysis.json',
        JSON.stringify(analysis, null, 4)
      )
    }
  }),
  visualize({
    // template: 'sunburst'
    // template: 'treemap'
    // template: 'circlepacking'
    // template: 'network',
    open: true
  })
)

module.exports = rollupConfig

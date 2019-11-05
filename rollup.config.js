const fs = require('fs')

const babel = require('rollup-plugin-babel')
const peerExternal = require('rollup-plugin-peer-deps-external')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const fileSize = require('rollup-plugin-filesize')
const { terser } = require('rollup-plugin-terser')
const analyze = require('rollup-plugin-analyzer')
const visualize = require('rollup-plugin-visualizer')

const isAudit = process.env.AUDIT_BUNDLE === 'true'

const generatePlugins = () => {
  const plugins = [
    babel({
      exclude: 'node_modules/**'
    }),
    peerExternal(),
    commonjs({
      namedExports: {
        'node_modules/deepmerge/index.js': ['deepmerge'],
        'node_modules/classnames/index.js': ['classNames'],
        'node_modules/shallowequal/index.js': ['shallowEqual']
      }
    }),
    json(),
    resolve(),
    fileSize(),
    terser()
  ]

  if (isAudit) {
    plugins.push(
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
  }

  return plugins
}
module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: generatePlugins(),
  external: [
    'styled-components',
    'react',
    'react-dom',
    'prop-types',
    'styled-system',
    'pcln-icons',
    'rc-util/lib/KeyCode',
    'rc-util/lib/Dom/addEventListener',
    'warning'
  ]
}

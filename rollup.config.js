const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const fileSize = require('rollup-plugin-filesize')

const peerExternal = require('rollup-plugin-peer-deps-external')
const { terser } = require('rollup-plugin-terser')

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
  plugins,
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

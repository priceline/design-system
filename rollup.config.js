const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const fileSize = require('rollup-plugin-filesize')

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
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      namedExports: {
        'node_modules/deepmerge/index.js': ['deepmerge'],
        'node_modules/classnames/index.js': ['classNames'],
        'node_modules/shallowequal/index.js': ['shallowEqual']
      }
    }),
    json(),
    resolve(),
    fileSize()
  ],
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

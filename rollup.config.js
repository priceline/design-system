import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import fileSize from 'rollup-plugin-filesize'

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index-cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.js',
      format: 'esm'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    json(),
    resolve(),
    fileSize()
  ],
  external: [
    'styled-components',
    'react',
    'react-dom',
    'prop-types',
    'styled-system'
  ]
}

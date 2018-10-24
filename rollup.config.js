import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

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
    resolve()
  ],
  external: ['styled-components', 'react', 'react-dom']
}
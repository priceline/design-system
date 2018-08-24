import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import json from 'rollup-plugin-json'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [
    'prop-types',
    'rc-slider',
    'styled-system',
    'react',
    'styled-components',
    'react-dom'
  ],
  plugins: [
    json({
      preferConst: true,
      indent: '  '
    }),
    babel({
      exclude: ['node_modules/**'],
      plugins: ['external-helpers']
    }),
    filesize()
  ]
}

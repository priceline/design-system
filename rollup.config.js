import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import json from 'rollup-plugin-json'

export default [
  // export ES modules format
  {
    input: 'src/index.js',
    output: {
      name: 'pcln-design-system',
      file: pkg.module,
      format: 'es'
    },
    external: ['react', 'react-dom', 'styled-components'],
    plugins: [
      resolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        babelrc: false,
        runtimeHelpers: false,
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                esmodules: true
              }
            }
          ],
          '@babel/react'
        ],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          'transform-class-properties',
          '@babel/plugin-external-helpers'
        ],
        externalHelpers: true
      }),
      json({
        preferConst: true,
        indent: '  '
      }),
      filesize()
    ]
  }
]

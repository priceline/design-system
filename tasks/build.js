const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const fileSize = require('rollup-plugin-filesize')
const rimraf = require('rimraf')
const bundles = require('./bundles')

function asyncRimRaf(filepath) {
  return new Promise((resolve, reject) =>
    rimraf(filepath, error => {
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  )
}

async function createBundle(bundle, format) {
  await asyncRimRaf(`packages/${bundle.label}/dist/${format}`)

  const inputOptions = {
    input: `packages/${bundle.label}/${bundle.entry}`,
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      commonjs(),
      json(),
      resolve(),
      fileSize()
    ],
    external: bundle.external
  }

  const outputOptions = {
    file: `packages/${bundle.label}/dist/${format}/index.js`,
    format: format
  }

  const result = await rollup.rollup(inputOptions)
  await result.write(outputOptions)
}

async function build() {
  for (const bundle of bundles) {
    await createBundle(bundle, 'esm')
    await createBundle(bundle, 'cjs')
  }
}

build()

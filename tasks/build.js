const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const fileSize = require('rollup-plugin-filesize')
const rimraf = require('rimraf')
const bundles = require('./bundles')
const chalk = require('chalk')

function getBundleLabel(argv) {
  return argv.slice(2)[0]
}

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
  const inputOptions = {
    input: `${bundle.entry}`,
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
    file: `dist/index.${format}.js`,
    format: format
  }

  const result = await rollup.rollup(inputOptions)
  await result.write(outputOptions)
}

async function build(bundleLabel) {
  await asyncRimRaf(`dist`)
  await createBundle(bundles[bundleLabel], 'esm')
  console.log(chalk.green(`Finish compile ${bundleLabel} es module version`))
  await createBundle(bundles[bundleLabel], 'cjs')
  console.log(
    chalk.green(`Finish compile ${bundleLabel} commonjs module version`)
  )
}

build(getBundleLabel(process.argv))

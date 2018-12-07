const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const fileSize = require('rollup-plugin-filesize')
const rimraf = require('rimraf')
const chalk = require('chalk')
const path = require('path')

function getConfigFile() {
  try {
    return require(path.join(process.cwd(), 'bundle.config.js'))
  } catch {
    console.log(
      chalk.red(`bundle.config.js file is missing for ${process.cwd()}`)
    )
    console.log(chalk.red('build bundle failed'))
    process.exit()
  }
}

async function asyncRimRaf(filepath) {
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
        exclude: 'node_modules/**'
      }),
      resolve(),
      commonjs(),
      json(),
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
  const bundleConfig = getConfigFile()
  await createBundle(bundleConfig, 'esm')
  console.log(chalk.green(`Finish compile ${bundleLabel} es module version`))
  await createBundle(bundleConfig, 'cjs')
  console.log(
    chalk.green(`Finish compile ${bundleLabel} commonjs module version`)
  )
}

build()

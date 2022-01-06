const { execSync } = require('child_process')
const { readFileSync } = require('fs')

function hasInternalRegistry(filePath) {
  const file = readFileSync(filePath)
  return /https?:\/\/npm\.prod\.pcln\.com/.exec(file.toString())
}

function getPackageLocks() {
  const lockfiles = execSync(`find . -name 'package-lock.json' -not -path "*/node_modules/*"`)

  return lockfiles
    .toString()
    .trim()
    .split('\n')
    .filter((s) => s !== '')
}

/**
 * Throws an error if any PCLN internal NPM registry URLs are found in any lockfiles.
 * @public
 */
function run() {
  const lockfiles = getPackageLocks()

  const foundNoInternalRegistries = lockfiles.reduce((acc, lock) => {
    const hasInternal = hasInternalRegistry(lock)

    if (hasInternal) {
      console.warn(`Internal NPM registry found in ${lock}`)
      return false
    }

    return acc
  }, true)

  if (!foundNoInternalRegistries) {
    throw new Error(
      'Internal NPM registry URLs found in lockfile(s). Please recreate them with only public NPM registries before publishing.'
    )
  }
}

run()

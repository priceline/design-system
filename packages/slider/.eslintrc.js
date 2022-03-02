require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  extends: ['@priceline/eslint-config/heft'],
  parserOptions: { tsconfigRootDir: __dirname },
}

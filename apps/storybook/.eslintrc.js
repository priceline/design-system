require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  extends: ['@priceline', '@priceline/eslint-config/jsx-a11y', 'plugin:storybook/recommended'],
  parserOptions: { tsconfigRootDir: __dirname, requireConfigFile: false },
}

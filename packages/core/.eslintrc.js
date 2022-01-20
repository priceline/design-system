require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/react',
    '@priceline/eslint-config/jsx-a11y',
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    '@rushstack/typedef-var': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/typedef': 'off',
  },
}

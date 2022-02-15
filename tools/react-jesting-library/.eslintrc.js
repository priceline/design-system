require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@rushstack/eslint-config/profile/web-app', '@rushstack/eslint-config/mixins/react'],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    '@rushstack/typedef-var': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/typedef': 'off',
  },
}

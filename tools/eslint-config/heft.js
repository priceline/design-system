// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution')

const a11yRules = require('./jsx-a11y')

module.exports = {
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/tsdoc',
    '@rushstack/eslint-config/mixins/react',
    'plugin:storybook/recommended',
  ],
  plugins: ['react-hooks', 'jsx-a11y'],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    ...a11yRules.rules,

    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/typedef': 0,

    '@rushstack/typedef-var': 0,

    'react/jsx-no-bind': 0,
  },
  overrides: [
    { files: ['**/svg-build/**', '**/*.stories*'], rules: { '@typescript-eslint/naming-convention': 'off' } },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.2',
    },
  },
}

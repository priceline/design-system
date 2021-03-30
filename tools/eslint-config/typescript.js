const defaultExtends = require('./shared/extends.js')
const defaultPlugins = require('./shared/plugins.js')

/**
 * This config is meant to extend the base config to add support for TypeScript
 */

module.exports = {
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      extends: [
        ...defaultExtends,
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'prettier',
      ],
      plugins: [...defaultPlugins, '@typescript-eslint', 'import'],
      rules: {
        'node/no-missing-import': 'off', // Disabled because the import plugin handles this
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: '*/tsconfig.json',
      },
    },
  },
}

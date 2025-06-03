const defaultExtends = require('./shared/extends.js')
const defaultPlugins = require('./shared/plugins.js')

module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  extends: [...defaultExtends],
  plugins: defaultPlugins,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  reportUnusedDisableDirectives: true,
  rules: {
    // Import
    'import/no-named-as-default-member': 'off',

    // ESLint progress indicator
    'progress/activate': 0,

    // React
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],

    // React hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // SonarJS
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-nested-template-literals': 'off',
  },
  overrides: [
    {
      files: ['testing-library.js'],
      rules: {
        'import/export': 'off',
      },
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.1',
    },
  },
}

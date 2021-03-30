const defaultExtends = require('./shared/extends.js')
const defaultPlugins = require('./shared/plugins.js')

module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  extends: [...defaultExtends],
  globals: {
    rendererCreateWithTheme: 'writeable',
  },
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
    'react/prop-types': [
      'error',
      {
        ignore: ['children'],
      },
    ],

    // React hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // SonarJS
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/cognitive-complexity': 'off',
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

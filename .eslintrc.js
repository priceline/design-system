module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/style',
    'pcln-accessibility',
    'prettier',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',

    // temporary pending test refactors
    rendererCreateWithTheme: 'readonly',
    renderWithTheme: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    // '@typescript-eslint',
    'prettier',
  ],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
}

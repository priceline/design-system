const defaultExtends = [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:jest/style',
  'pcln-accessibility',
  'prettier',
]

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: defaultExtends,
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',

    // temporary pending test refactors
    rendererCreateWithTheme: 'readonly',
    renderWithTheme: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'jest', 'prettier', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: [
        ...defaultExtends,
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'node/no-missing-import': 'off', // Disabled because the import plugin handles this
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}

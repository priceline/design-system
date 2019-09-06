module.exports = {
  root: true,
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  globals: {
    shallow: false,
    render: false,
    mount: false,
    graphql: false,
  },
  plugins: ['react', 'prefer-object-spread', 'compat'],
  rules: {
    // Prettier warnings
    'prettier/prettier': 'warn',

    // Turn of preference of default export, allows for barrel exporting of components
    'import/prefer-default-export': 'off',

    // JSX allowed in .js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // Disable the formatting of JSX elements (it doesn't always know whats best!)
    'react/jsx-one-expression-per-line': 'off',

    // Turn off an annoying rule when using Gatsby's Link component
    'jsx-a11y/anchor-is-valid': 'off',

    // Turn off wrapping every emoji in <span> tags
    'jsx-a11y/accessible-emoji': 'off',
  },
  overrides: [
    {
      files: ['**/*.story.js', '**/components/**/examples/*.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
      },
    ],
    '@babel/react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    test: {
      presets: [['@babel/env', { targets: { node: 'current' } }]],
      plugins: ['@babel/transform-runtime'],
    },
    cjs: {
      presets: [['@babel/env', { modules: 'cjs' }]],
      plugins: ['@babel/transform-runtime'],
    },
  },
}

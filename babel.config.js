module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining'
  ]
}

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false
      }
    ],
    '@babel/react'
  ],
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ]
}

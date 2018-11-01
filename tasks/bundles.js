const bundles = [
  {
    label: 'core',
    entry: 'src/index.js',
    external: [
      'styled-components',
      'react',
      'react-dom',
      'prop-types',
      'styled-system',
      'pcln-icons'
    ]
  },
  {
    label: 'icons',
    entry: 'src/Icon.js',
    external: ['styled-components']
  }
]

module.exports = bundles

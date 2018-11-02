const bundles = {
  core: {
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
  slider: {
    entry: 'src/index.js',
    external: [
      'pcln-design-system',
      'styled-components',
      'styled-system',
      'react',
      'react-dom'
    ]
  }
}

module.exports = bundles

const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'styled-components': path.join(
        __dirname,
        '../node_modules/styled-components'
      ),
      'styled-system': path.join(__dirname, '../node_modules/styled-system'),
      'prop-types': path.join(__dirname, '../node_modules/prop-types'),
      '@babel/runtime': path.join(__dirname, '../node_modules/@babel/runtime'),
      'pcln-design-system': path.resolve(__dirname, '../packages/core'),
      'pcln-icons': path.resolve(__dirname, '../packages/icons')
    }
  }
}

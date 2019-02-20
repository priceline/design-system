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
      'pcln-design-system': path.join(__dirname, '../packages/core/src/index'),
      'pcln-icons': path.join(__dirname, '../packages/icons')
    }
  }
}

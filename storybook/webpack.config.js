const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'styled-components': path.join(
        __dirname,
        '../node_modules/styled-components'
      ),
      'pcln-icons': path.join(__dirname, '../packages/icons')
    }
  }
}

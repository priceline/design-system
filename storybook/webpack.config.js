const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'styled-components': path.join(
        __dirname,
        '../node_modules/styled-components'
      )
    }
  }
}

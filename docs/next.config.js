const path = require('path')

const mdPlugins = [
  require('remark-images'),
  require('remark-emoji'),
  require('remark-slug'),
  require('remark-autolink-headings')
]

const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: IS_PROD ? 'https://pricelinelabs.github.io/design-system/' : '',
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.join(__dirname, '../packages'),
      use: [defaultLoaders.babel]
    })
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins
          }
        }
      ]
    })

    config.resolve.alias['styled-components'] = path.join(
      __dirname,
      './node_modules/styled-components'
    )

    config.resolve.alias['pcln-design-system'] = path.join(
      __dirname,
      '../packages/core/src'
    )

    return config
  }
}

const mdPlugins = [
  require('remark-images'),
  require('remark-emoji'),
  require('remark-slug'),
  require('remark-autolink-headings'),
]

const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: IS_PROD ? 'https://priceline.github.io/design-system/' : '',
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins,
          },
        },
      ],
    })

    return config
  },
}

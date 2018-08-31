const mdPlugins = [
  require('remark-images'),
  require('remark-emoji'),
  require('remark-slug'),
  require('remark-autolink-headings')
]

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
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

    return config
  }
}

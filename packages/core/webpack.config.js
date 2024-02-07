'use strict'

const createWebpackConfig = require('@rushstack/heft-web-rig/profiles/library/webpack-base.config')
const { ModuleMinifierPlugin } = require('@rushstack/webpack5-module-minifier-plugin')
const { WorkerPoolMinifier } = require('@rushstack/module-minifier')
const { RsdoctorWebpackPlugin } = require('@rsdoctor/webpack-plugin')

module.exports = function createConfig(env, argv) {
  return createWebpackConfig({
    env: env,
    argv: argv,
    projectRoot: __dirname,

    // Documentation: https://webpack.js.org/configuration/
    configOverride: {
      externals: ['react', 'react-dom', 'framer-motion', 'styled-components', 'tslib', 'pcln-icons'],

      target: ['web', 'es2020'],

      module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                plugins: [
                  [
                    'babel-plugin-styled-components',
                    {
                      ssr: true,
                      displayName: true,
                      pure: true,
                      namespace: 'pcln-design-system',
                    },
                  ],
                ],
              },
            },
          },
        ],
      },

      optimization: {
        minimizer: [
          new ModuleMinifierPlugin({
            minifier: new WorkerPoolMinifier(),
            // If not provided, the plugin will attempt to guess from `mode` and `devtool`.
            // Providing it expressly gives better results
            useSourceMap: true,
          }),
        ],
      },

      performance: {
        hints: env.production ? 'error' : false,
        // This specifies the bundle size limit that will trigger Webpack's warning saying:
        // "The following entrypoint(s) combined asset size exceeds the recommended limit."
        // maxEntrypointSize: 500000,
        // maxAssetSize: 500000
      },
    },

    plugins: [
      process.env.RSDOCTOR &&
        new RsdoctorWebpackPlugin({
          features: ['loader', 'plugins', 'bundle', 'resolver'],
        }),
    ].filter(Boolean),
  })
}
